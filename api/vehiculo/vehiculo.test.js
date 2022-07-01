require("dotenv").config();
const {sequelize} = require("../../config/database");
const supertest = require("supertest");
const {app} = require("../../app");

const request = supertest(app);

describe("Test endpoints Vehículo ", ()=>{

  describe("Petición POST para crear vehículos en el sistema", ()=>{ 
      it("Deberia retornar 400 si algún dato del vehico falta", async()=>{
        const respuesta = await request.post('/api/vehiculo/registro')
        .set('Content-Type', 'application/json')
        .send({"placa":"ABC300"});
        expect(respuesta.statusCode).toEqual(400);
      })
      it("Deberia retornar 400 si algún dato del vehico falta", async()=>{
        const respuesta = await request.post('/api/vehiculo/registro')
        .set('Content-Type', 'application/json')
        .send({"tipo":"1"});
        expect(respuesta.statusCode).toEqual(400);
      })
      it("Deberia retornar 200 si algún dato del vehico falta", async()=>{
        const respuesta = await request.post('/api/vehiculo/registro')
        .set('Content-Type', 'application/json')
        .send({"tipo":"1", "placa":"ABC300"});
        expect(respuesta.statusCode).toEqual(200);
      })
      it("Deberia retornar 202 si ase intenta rgistrar un vehículo existente", async()=>{
        const respuesta = await request.post('/api/vehiculo/registro')
        .set('Content-Type', 'application/json')
        .send({"tipo":"1", "placa":"ABC300"});
        expect(respuesta.statusCode).toEqual(202);
      })
  })
});