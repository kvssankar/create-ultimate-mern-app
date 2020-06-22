module.exports=`const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    array: [String],
  },
  { collection: "" }
);

module.exports = Test = mongoose.model("test", testSchema);
`