const { Router } = require("express");
const { reinicio } = require("./reinicio.controller");

const router = Router();
router.get("/", reinicio);

module.exports = router;