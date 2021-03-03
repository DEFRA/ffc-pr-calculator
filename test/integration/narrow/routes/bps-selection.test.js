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

  test('GET /bps/selection returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/bps/selection'
    }
  })

  test('POST /bps/selection  returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/bps/selection ',
      payload: { bpsSelection: 'multiple' }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/bps/multiple`)
  })

  test('POST /bps/selection  returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/bps/selection ',
      payload: { bpsSelection: 'single' }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/bps`)
  })
})