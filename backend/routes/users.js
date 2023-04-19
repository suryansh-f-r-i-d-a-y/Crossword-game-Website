var express = require("express");
var {
  getUser,
  update,
  deleteUser,
    preogressIncrement,
    preogressDecrement,

} = require("../controllers/user.js");

const router = express.Router();

// Update User
router.put("/:id", update);

// Get User
router.get("/find/:id", getUser);

// Delete User
router.delete("/:id", deleteUser);

// Follow
router.put("/increment/:id", preogressIncrement);

// Unfollow
router.put("/incremet/:id", preogressDecrement);

module.exports = router;
