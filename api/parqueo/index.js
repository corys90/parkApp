const { Router } = require("express");
const { ingresoVehiculo, actualizaParqueo } = require("./parqueo.controller");

const router = Router();
router.post("/", ingresoVehiculo);
router.patch("/", actualizaParqueo);

module.exports = router;