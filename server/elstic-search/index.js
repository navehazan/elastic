const client = require("./connection.js");
const mysql = require("mysql");
const { promisify } = require("util");

const pool = mysql.createPool({
  connectionLimit: 20,
  host: "204.145.82.18",
  user: "fcmd",
  password: "djack18",
  multipleStatements: true,
  acquireTimeout: 90000,
  timezone: "utc",
});

const executeSqlAsync = async (query) => {
  return promisify(pool.query).bind(pool)(query);
};
const addPages = async () => {
  const pages = await executeSqlAsync("select * from wsrstage.pages limit 4");
  const promises = pages.map((page) => {
    return client.createDoc("pages", page);
  });
  const res = await Promise.all(promises);
  console.log(res);
};
addPages();

module.exports = client;
