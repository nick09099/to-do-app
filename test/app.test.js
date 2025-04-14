const request = require('supertest');
const app = require('../app'); // Make sure this path is correct

describe('To-Do API', () => {
  it('GET /todos should return array', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('POST /todos should add a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Test Todo' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('Test Todo');
  });
});
