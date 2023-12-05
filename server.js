const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const app = require("./App");

//START A SERVER
let port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server running on ${port}...`);
});
