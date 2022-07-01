const { Router } = require("express");
const { altaVehiculo } = require("./vehiculo.controller");

const router = Router();
router.post("/", altaVehiculo);

module.exports = router;