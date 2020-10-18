const elasticsearch = require("elasticsearch");

var client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace",
  apiVersion: "7.2",
});

var client = new elasticsearch.Client({
  hosts: ["http://elastic:changeme@localhost:9200/"],
});

// client.cluster.health({},(err,resp,status)=> {
//   console.log("-- Client Health --",resp);
// });

// const createIndex = (async (index) => {
//   const koko = await client.indices.create({ index });
//   console.log(koko,"kokokokokoko");
// })("govvvv");

const deleteIndex = (async (index) => {
  const koko = await client.indices.delete({ index });
  console.log(koko,"kokokokokoko");
})("gov");

module.exports = client;
