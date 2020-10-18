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
  return Promise.all(promises);
};

const searchDoc = async (req, res, next) => {
  const { text } = req.params;
  let data = await client.searchDoc("pages", text);
  data = data.hits.hits.map((hit) => hit._source);
  res.send(data);
};

(async () => {
  // const created = await addPages();
  // const count = await client.countDoc("pages");
  // console.log(created)
  // console.log(count)
  // const res = await client.searchDoc("pages", "dr");
})();

module.exports = { searchDoc };
