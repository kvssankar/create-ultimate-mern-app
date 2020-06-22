module.exports=`const router = require("express").Router();
const Test = require("../models/testModel");

router.post("/getdata", async (req, res) => {
  const data = await Test.find();
  res.json(data);
});

module.exports = router;
`