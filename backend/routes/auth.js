var express = require ("express");
var { signin, signup } = require ("../controllers/auth.js");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signup", (req, res) => {
    console.log(req.body)
    return req.body
});
module.exports = router;
