describe('calculation route', () => {
  jest.mock('../../../../app/plugins/crumb.js')
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

  test('GET /calculation returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value=1000'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /calculation returns calculation view', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value=1000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })

  test('GET /calculation includes table', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value=1000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
    expect(result.payload).toContain('govuk-table')
  })

  test('GET /calculation returns 302 if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('GET /calculation redirect to bps view if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
    }

    const result = await server.inject(options)
    expect(result.headers.location).toBe('/value')
  })
})
