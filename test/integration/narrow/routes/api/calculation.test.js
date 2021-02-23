describe('calculation route', () => {
  let createServer
  let server

  beforeEach(async () => {
    createServer = require('../../../../../app/server')
    server = await createServer()
    await server.initialize()
  })

  afterEach(async () => {
    await server.stop()
  })

  test('GET /api/calculation returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/api/calculation?bpsValue=1000'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /api/calculation returns calculation', async () => {
    const options = {
      method: 'GET',
      url: '/api/calculation?bpsValue=1000'
    }

    const result = await server.inject(options)
    expect(result.payload).toBe(JSON.stringify({ success: true }))
  })

  test('GET /api/calculation returns 400 if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/api/calculation'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(400)
  })
})
