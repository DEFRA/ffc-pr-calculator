describe('input-type route', () => {
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

  test('GET /input-type bps-multiple view', async () => {
    const options = {
      method: 'GET',
      url: '/input-type'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('input-type')
  })

  test('POST /input-type  returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/input-type ',
      payload: { inputType: 'multiple' }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe('/bps/multiple')
  })

  test('POST /input-type  returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/input-type ',
      payload: { inputType: 'single' }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe('/bps')
  })

  test('POST /input-type invalid', async () => {
    const options = {
      method: 'POST',
      url: '/input-type',
      payload: { inputType: '' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('input-type')
    expect(result.request.response.source.context.model.errorMessage).toBeDefined()
    expect(result.statusCode).toBe(400)
  })
})
