describe('bps route', () => {
  let createServer
  let server

  beforeEach(async () => {
    createServer = require('../../../../app/server')
    server = await createServer()
    await server.initialize()
  })

  afterEach(async () => {
    await server.stop()
  })

  test('GET /bps returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/bps'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /bps returns bps view', async () => {
    const options = {
      method: 'GET',
      url: '/bps'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('bps')
  })

  test('GET /bps context includes Header', async () => {
    const options = {
      method: 'GET',
      url: '/bps'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Calculate my progressive reductions')
  })

  test('POST /bps returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/bps',
      payload: { bpsValue: 1000.01 }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('POST /bps invalid', async () => {
    const options = {
      method: 'POST',
      url: '/bps',
      payload: { bpsValue: 'aaaaaa' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps')
    expect(result.request.response.source.context.model.errorMessage).toBeDefined()
    expect(result.statusCode).toBe(400)
  })

  test('POST /bps redirects to calculation', async () => {
    const bpsValue = 1000.01

    const options = {
      method: 'POST',
      url: '/bps',
      payload: { bpsValue }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/calculation?bpsValue=${bpsValue}`)
  })
})
