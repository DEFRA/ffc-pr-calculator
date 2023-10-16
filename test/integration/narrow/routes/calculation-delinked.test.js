describe('calculation-delinked route', () => {
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

  test('GET /calculation-delinked returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-delinked?value=1000'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /calculation-delinked returns calculation view', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-delinked?value=1000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation-delinked')
  })

  test('GET /calculation-delinked includes table', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-delinked?value=1000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation-delinked')
    expect(result.payload).toContain('govuk-table')
  })

  test('GET /calculation-delinked returns 302 if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-delinked'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('GET /calculation-delinked redirect to delinked view if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-delinked'
    }

    const result = await server.inject(options)
    expect(result.headers.location).toBe('/delinked-calculator')
  })
})
