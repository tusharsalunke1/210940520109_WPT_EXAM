const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbInfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function selectAll() {
  const connection = mysql.createConnection(dbInfo);

  await connection.connectAsync();
  console.log("connection sucess");
  const sql = `select * from MESSAGE order by id desc`;
  let list = await connection.queryAsync(sql);
  //   console.log(list);
  await connection.endAsync();

  return list;
}

async function addAll(user) {
  const connection = mysql.createConnection(dbInfo);

  await connection.connectAsync();
  console.log("connection sucess");
  const sql = `insert into MESSAGE (message) values(?)`;
  await connection.queryAsync(sql, [user.message]);
  await connection.endAsync();
  console.log("record Added");
}

// selectAll();
// const user = { message: "hello" };
// addAll(user);
// module.exports = { selectAll, addAll };

module.exports = { selectAll, addAll };
