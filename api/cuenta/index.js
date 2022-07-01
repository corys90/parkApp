const { Router } = require("express");
const { reporte } = require("./cuenta.controller");

const router = Router();
router.get("/", reporte);

module.exports = router;