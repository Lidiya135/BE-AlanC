const Pool = require("../config/db");

//Select Data pay
const selectPay = () => Pool.query("SELECT * FROM pay");

const selectPayById = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(`select * from pay where id = '${id}' `, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });

// Insert pay
const insertPay = (datapay) => {
  const { charge, pay, change, transaction_id} = datapay;

  return Pool.query(
    `INSERT INTO pay(charge, pay, change, transaction_id)VALUES('${charge}',${pay},${change},${transaction_id})`
  );
};

//update pay
const updatePay = (id, datapay) => {
  const {charge, pay, change, transaction_id} = datapay;
  return Pool.query(
    `UPDATE pay SET charge='${charge}',pay=${pay},change=${change},transaction_id=${transaction_id} WHERE id='${id}'`
  );
};

//delete pay
const deletePay = (id) =>
  Pool.query(`DELETE FROM pay where id='${id}'`);

module.exports = {
  selectPay,
  selectPayById,
  insertPay,
  deletePay,
  updatePay,
};
