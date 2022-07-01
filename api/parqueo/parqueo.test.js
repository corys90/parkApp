require("dotenv").config();
const {sequelize} = require("../../config/database");
const supertest = require("supertest");
const {app} = require("../../app");

const request = supertest(app);

describe("Test endpoints parqueo ", ()=>{

  describe("Petición POST para crear un nuevo parqueo en el sistema", ()=>{ 
      it("Deberia retornar 400 si faltan datos del vehiculo", async()=>{
        const respuesta = await request.post('/api/vehiculo/registro')
        .set('Content-Type', 'application/json')
        .send({"tipo":"0"});
        expect(respuesta.statusCode).toEqual(400);
      });
  });
  describe("Petición POST para crear un nuevo parqueo en el sistema", ()=>{ 
    it("Deberia retornar 200 si se registra el parqueo sin problemas", async()=>{
      const respuesta = await request.post('/api/parqueo/registro')
      .set('Content-Type', 'application/json')
      .send({"placa":"HZZ300"});
      expect(respuesta.statusCode).toEqual(200);

    });
   });

   describe("Petición PATCH para actualizar la salida de un vehículo del parqueadero", ()=>{ 
    it("Deberia retornar 202 si se no registra un vehículo en el parqueadero", async()=>{
      const respuesta = await request.patch('/api/parqueo/registro')
      .set('Content-Type', 'application/json')
      .send({"placa":"ABC300"});
      expect(respuesta.statusCode).toEqual(202);
    });
   });
   describe("Petición PATCH para actualizar la salida de un vehículo del parqueadero", ()=>{ 
    it("Deberia retornar 200 si se registra la salida sin problemas", async()=>{
      const respuesta = await request.patch('/api/parqueo/registro')
      .set('Content-Type', 'application/json')
      .send({"placa":"HZZ300"});
      expect(respuesta.statusCode).toEqual(200);
    });
   });
});