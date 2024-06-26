import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  it('Should parse body as json', async () => {
    app.post('/test_body_parses', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parses')
      .send({ name: 'any_name' })
      .expect({ name: 'any_name' })
  })
})
