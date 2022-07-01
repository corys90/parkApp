require("dotenv").config();
const {sequelize} = require("../../config/database");
const supertest = require("supertest");
const {app} = require("../../app");

const request = supertest(app);

describe("Test endpoints cuenta ", ()=>{

  describe("Petición GET para obtener info de las cuentas de cobros de residentes", ()=>{ 
      it("Deberia retornar 200 si el archivo se generó sin problemas", async()=>{
        const respuesta = await request.get('/api/cuenta/cobro');
        expect(respuesta.statusCode).toEqual(200);
        expect(respuesta.body.listado).toEqual(true);
      })
  })
});