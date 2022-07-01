

Documento T�cnico Proyecto ParkApp

Sistema de informaci�n de parqueadero que administra y gestiona el servicio de parqueo pago a diferentes tipos de veh�culos con costes de cobro distintos.
Es un sistema de informaci�n desarrollado con tecnolog�a Javascript en el Backend, como servicio Api-Rest y gestor de bases de datos MySQL.

Caracter�sticas
* Tecnolog�a Javascript como lenguaje de programaci�n
* Node JS./Express/Sequelize/MySQL como herramientas utilizadas
* Arquitectura API-REST
* Jest/Supertest como Herramientas de testeo

Descripci�n del modelo arquitect�nico
ParkApp se desarroll� como aplicaci�n orientada al servicio. Se desarrollaron los endPoints como se describen a continuaci�n:
Ruta:  /api/vehiculo/registro
M�todo POST: utilizado para a�adir veh�culos a la Base de datos de ParkApp
Cuerpo de petici�n POST debe ir de la siguiente forma:
{
       �placa�:�num_placa�,
       �tipo�:�valor num�rico�
}

Placa y tipo son obligatorios, de no ser enviado alguno de los dos, el sistema rechazar� la petici�n informado con c�digo de estado 400 y un mensaje con el formato {message:"Faltan datos para el registro de un veh�culo."}
Mensajes de respuesta
* C�digo 400, {message:"Faltan datos para el registro de un veh�culo."} si falta alguno de los campos arriba listados.
* C�digo 202, {message:"Ya existe un veh�culo con esa placa registrado."} si se intenta registrar un veh�culo que ya est� registrado.
* C�digo 200, {objeto con datos del veh�culo creado} si se registra un nuevo veh�culo a la base de datos. Objeto devuelto en el body de la respuesta
{
    "id": 20,
    "placa": "ABC123",
    "tipo": "1",
    "updatedAt": "2022-06-30T18:21:58.594Z",
    "createdAt": "2022-06-30T18:21:58.594Z"
}

Ruta:  /api/parqueo/registro
M�todo POST: utilizado para ingresar un parqueo de veh�culo al parqueadero
Cuerpo de petici�n POST debe ir de la siguiente forma:
{
       �placa�:�num_placa�,
}

Placa es obligatorio, de no ser enviado, el sistema rechazar� la petici�n informando con c�digo de estado 400 y un mensaje con el formato {message:"Faltan datos para el registro de un veh�culo."}
Mensajes de respuesta
* C�digo 400, {message:"Faltan datos para el registro de un veh�culo."} si falta alguno de los campos arriba listados.
* C�digo 202, {message:" Ya existe un veh�culo con esa placa ingresado al parqueadero."} si se intenta registrar un veh�culo que ya est� registrado.
* C�digo 200, {objeto con datos del parqueo} si se registra un nuevo parqueo de veh�culo en el parqueadero. Objeto devuelto en el body de la respuesta.
{
    "id": 46,
    "placa": "ABC123",
    "tipo": 0,
    "fechaIngreso": "6/30/2022",
    "horaIngreso": "1:28:45 AM",
    "updatedAt": "2022-06-30T01:28:45.804Z",
    "createdAt": "2022-06-30T01:28:45.804Z"
}

M�todo PATCH: utilizado para registrar una salida de veh�culo del parqueadero
Cuerpo de petici�n PATCH debe ir de la siguiente forma:
{
       �placa�:�num_placa�,
}

Placa es obligatorio, de no ser enviado, el sistema rechazar� la petici�n informado con c�digo de estado 400 y un mensaje con el formato { message:�Falta informaci�n del veh�culo para la asignaci�n de un parqueadero�}
Mensajes de respuesta
* C�digo 400, { message:�Falta informaci�n del veh�culo para la asignaci�n de un parqueadero�}si falta alguno de los campos arriba listados.
* C�digo 202, {message:" No existe un veh�culo con esa placa ingresado al parqueadero."} si se intenta registrar una salida de un veh�culo que no est� registrado.
* C�digo 200, {objeto con datos del parqueo} si la salida se registra sin problemas. Objeto devuelto en el body de la respuesta.
{
    "Mensaje": "Salida de veh�culo registrada",
    "vehiculo": {
        "id": 12,
        "placa": "ABC123",
        "tipo": 0,
        "estancia": 0,
        "createdAt": "2022-06-30",
        "updatedAt": "2022-06-30"
    }
}

Ruta:  /api/cuenta/cobro
M�todo GET: utilizado para generar un archivo con las cuentas de cobros de los veh�culos residentes
Mensajes de respuesta
* C�digo 400, {message:" Se present� un problema en el proceso generaci�n de listado de cuentas de cobro."}.
* C�digo 200, {message:"Listado ejecutado con �xito.", listado: resultado} 

Ruta:  /api/reinicio/mes
M�todo GET: utilizado para borrar los registros de estancias de veh�culos oficiales y reestablece las estancias de los veh�culos residentes.
Mensajes de respuesta
* C�digo status 400, {message:" Se pesent� un problema en el proceso de reinicio."}.
* C�digo 200, {message:� Reinicio ejecutado con �xito.."} 

Testing
En cada ruta de servicio de endpoint, se encentra un archivo que en su nombre se identifica con test, y este se corresponde con las pruebas de cada endpoint en sus diferentes m�todos.

Descripci�n de carpetas de proyecto
El proyecto cuenta con una estructura de carpetas arregladas de la siguiente forma que se corresponde con las rutas anteriormente descritas:

* Api/cuenta: Contiene todo los archivos ejecutables de rutas, controladores, modelos,  servicios y  test  que son importantes para la generaci�n del estado de cuentas de los veh�culos residentes y genera el archivo con la informaci�n correspondiente a ese detalle. Valida la operaci�n del servicio correspondiente a esa ruta como se describi� en el apartado anterior.

* Api/parqueo: Contiene los archivos para gestionar la ruta correspondiente descrita anteriormente que registrar las entradas y salidas de los veh�culos al parqueadero con sus respectivos importes de pago. 

* Api/reinicio: Contiene los archivos para gestionar la ruta correspondiente descrita anteriormente que registrar reiniciar los valores de estancias de los diferentes tipos de veh�culos. 

* Api/veh�culo: Contiene los archivos del aplicativo para gestionar el ingreso de cada nuevo veh�culo al sistema.

* config: Contiene los archivos de configuraci�n del servidor web, ORM Sequelize para el acceso a la base de datos.

* util: Contiene una librer�a para gesti�n y c�lculo de fechas.

* temp: Carpeta que almacena temporalmente el archivo generado con las cuentas de cobro de los veh�culos residentes.

* Routes: Contiene las rutas de los servicios API

* Index y app: Son los archivos principales del aplicativo.






