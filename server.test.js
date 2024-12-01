const request = require('supertest');
const app = require('./server');

describe('API Tests', () => {
  it('GET / should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Hola Este es una prueba tarea LINUX"
    });
  });

  it('GET /chambas should return a list of areas', async () => {
    const response = await request(app).get('/chambas');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('areas');
    expect(response.body.areas).toEqual(expect.arrayContaining([
      "Desarrollo de Software",
      "Ciencia de Datos",
      "Seguridad Informática",
      "Inteligencia Artificial",
      "Redes y Telecomunicaciones",
      "Administración de Sistemas",
      "Computación en la Nube",
      "Bases de Datos",
      "Desarrollo Web",
      "Desarrollo Móvil"
    ]));
  });
});
