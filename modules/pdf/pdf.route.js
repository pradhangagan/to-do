const router = require("express").Router();

//CRUD
router.get("/", (req, res) => {
  res.json({ msg: "All the data in the database" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ msg: `we are reading ${id} from database` });
});

router.post("/", (req, res) => {
  res.json({ data: req.body, msg: "Posting new data" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `Updating ${id} from database` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `Patching ${id} from database` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Deleting ${id} from database` });
});

module.exports = router;
