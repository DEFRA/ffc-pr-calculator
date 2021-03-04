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

  test('GET /api/v1/calculation returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/api/v1/calculation/1000'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /api/v1/calculation returns calculation', async () => {
    const options = {
      method: 'GET',
      url: '/api/v1/calculation/1000'
    }

    const result = await server.inject(options)
    expect(result.payload).toContain('bandResult')
    expect(result.payload).toContain('overallResult')
  })

  test('GET /api/v1/calculation returns 404 if no parameter', async () => {
    const options = {
      method: 'GET',
      url: '/api/v1/calculation'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(404)
  })

  test('GET /api/v1/calculation returns 400 if invalid', async () => {
    const options = {
      method: 'GET',
      url: '/api/v1/calculation/invalid'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(400)
  })
})
