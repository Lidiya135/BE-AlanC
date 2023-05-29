const Pool = require("../config/db");

//Select Data transactions
const selectTransac = () => Pool.query("SELECT * FROM transactions");

const selectTransacById = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(`select * from transactions where id = '${id}' `, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });

// Insert transactions
const insertTransac = (datatransactions) => {
  const { name, product_id, amount, total, pay, change } = datatransactions;

  return Pool.query(
    `INSERT INTO transactions(name,product_id, amount, total, pay, change)VALUES('${name}',${product_id},${amount}, ${total},${pay},${change})`
  );
};

//update transactions
const updateTransac = (id, datatransactions) => {
  const { name, product_id, amount, total, pay, change} = datatransactions;
  return Pool.query(
    `UPDATE transactions SET name='${name}',product_id=${product_id},amount=${amount},total=${total},pay=${pay},change=${change} WHERE id='${id}'`
  );
};

//delete transactions
const deleteTransac = (id) =>
  Pool.query(`DELETE FROM transactions where id='${id}'`);

module.exports = {
  selectTransac,
  selectTransacById,
  insertTransac,
  deleteTransac,
  updateTransac,
};
