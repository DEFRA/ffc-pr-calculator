describe('bps multiple route', () => {
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

  test('GET /bps/multiple bps-multiple view', async () => {
    const options = {
      method: 'GET',
      url: '/bps/multiple'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('bps-multiple')
  })

  test('POST /bps/multiple  returns 302', async () => {
    const bps2021Value = 5000
    const bps2022Value = 4000
    const bps2023Value = 3000
    const bps2024Value = 2000

    const options = {
      method: 'POST',
      url: '/bps/multiple ',
      payload: { bps2021Value, bps2022Value, bps2023Value, bps2024Value }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/calculation/multiple?bps2021Value=${bps2021Value}&bps2022Value=${bps2022Value}&bps2023Value=${bps2023Value}&bps2024Value=${bps2024Value}`)
  })

  test('POST /bps/multiple invalid', async () => {
    const options = {
      method: 'POST',
      url: '/bps/multiple',
      payload: { bps2001Value: 2001 }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps-multiple')
    expect(result.request.response.source.context.model.errorMessage).toBeDefined()
    expect(result.statusCode).toBe(400)
  })
})
