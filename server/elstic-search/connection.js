const elasticsearch = require("elasticsearch");

var client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace",
  apiVersion: "7.2",
});

var client = new elasticsearch.Client({
  hosts: ["http://elastic:changeme@localhost:9200/"],
});

// client.cluster.health({}, (err, resp, status) => {
//   console.log("-- Client Health --", resp);
// });

// const createIndex = () => {
//   return client.indices.create({ index: "gov" });
// };

// const deleteIndex = () => {
//   return client.indices.delete({ index: "gov" });
// };

const createDoc = (index, body) => {
  return client.index({
    index,
    body,
  });
};

// const deleteDoc = () => {
//   return client.delete({
//     index: "gov",
//     id: "1",
//     type: "constituencies",
//   });
// };

const countDoc = (index) => {
  return client.count({ index });
};

module.exports = { createDoc, countDoc };
