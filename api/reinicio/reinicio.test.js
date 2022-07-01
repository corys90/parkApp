require("dotenv").config();
const {sequelize} = require("../../config/database");
const supertest = require("supertest");
const {app} = require("../../app");

const request = supertest(app);

describe("Test endpoints reinicio ", ()=>{

  describe("Petición GET para reiniciar las instancias de vehículos residentes y oficiales", ()=>{ 
      it("Deberia retornar 200 si el reinicio no tiene problemas, 400 si lo hay", async()=>{
        const respuesta = await request.get('/api/reinicio/mes');
        expect(respuesta.statusCode).toEqual(200);
      })
  })
});