const Pool = require("../config/db");

//Select Data transactions
// const selectTransac = () => Pool.query("SELECT * FROM transactions");

// const selectTransacById = (id) =>
//   new Promise((resolve, reject) => {
//     Pool.query(`select * from transactions where id = '${id}' `, (err, res) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });

  const selectTransacById = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(`Select transactions.id,transactions.amount,transactions.total,products.name as product FROM transactions INNER JOIN products ON transactions.product_id = products.id WHERE transactions.id=${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });

  const selectTransac = () => Pool.query(`Select transactions.id,transactions.amount,transactions.total,products.name as product FROM transactions INNER JOIN products ON transactions.product_id = products.id`);

  const select = () => Pool.query(` Select total from transactions`)
// Insert transactions
const insertTransac = (datatransactions) => {
  const { amount, total, product_id } = datatransactions;

  return Pool.query(
    `INSERT INTO transactions(amount,total,product_id)VALUES(${amount}, ${total},${product_id})`
  );
};

//update transactions
const updateTransac = (id, datatransactions) => {
  const { amount, total, product_id} = datatransactions;
  return Pool.query(
    `UPDATE transactions SET amount=${amount},total=${total},product_id=${product_id} WHERE id='${id}'`
  );
};

//delete transactions
const deleteTransac = (id) =>
  Pool.query(`DELETE FROM transactions where id='${id}'`);

const deleteTransact = () =>
  Pool.query(`DELETE FROM transactions `);

module.exports = {
  selectTransac,
  selectTransacById,
  insertTransac,
  deleteTransac,
  updateTransac,
  deleteTransact,
  select
};
