describe('bps selection route', () => {
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

  test('GET /bps/selection bps-multiple view', async () => {
    const options = {
      method: 'GET',
      url: '/bps/selection'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('bps-selection')
  })

  test('POST /bps/selection  returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/bps/selection ',
      payload: { bpsSelection: 'multiple' }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe('/bps/multiple')
  })

  test('POST /bps/selection  returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/bps/selection ',
      payload: { bpsSelection: 'single' }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe('/bps')
  })

  test('POST /bps/selection invalid', async () => {
    const options = {
      method: 'POST',
      url: '/bps/selection',
      payload: { bpsSelection: '' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps-selection')
    expect(result.request.response.source.context.model.errorMessage).toBeDefined()
    expect(result.statusCode).toBe(400)
  })
})
