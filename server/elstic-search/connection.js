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

const createIndex = () => {
  return client.indices.create({ index: "gov" });
};

const deleteIndex = () => {
  return client.indices.delete({ index: "gov" });
};

const createDoc = () => {
  return client.index({
    index: "gov",
    id: "1",
    type: "constituencies",
    body: {
      ConstituencyName: "Ipswich",
      ConstituencyID: "E14000761",
      ConstituencyType: "Borough",
      Electorate: 74499,
      ValidVotes: 48694,
    },
  });
};

const deleteDoc = () => {
  return client.delete({
    index: "gov",
    id: "1",
    type: "constituencies",
  });
};

const countDoc = () => {
  return client.count({ index: "gov", type: "constituencies" });
};

(async () => {
  // const create = await createDoc();
  // console.log(create, "create");
  // const deleted = await deleteDoc();
  // console.log(deleted, "deleted");
  // const count = await countDoc();
  // console.log(count, "count");

})();

module.exports = client;
