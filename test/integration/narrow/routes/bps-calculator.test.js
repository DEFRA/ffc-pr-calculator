describe('bps-calculator route', () => {
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

  test('GET /bps-calculator returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /bps-calculator returns bps-calculator view', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('bps-calculator')
  })

  test('GET /bps-calculator context includes Header', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Calculate my progressive reductions')
  })

  test('POST /bps-calculator returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/bps-calculator',
      payload: { value: 1000.01 }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('POST /bps-calculator invalid', async () => {
    const options = {
      method: 'POST',
      url: '/bps-calculator',
      payload: { value: 'aaaaaa' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps-calculator')
    expect(result.request.response.source.context.model.errorMessage).toBeDefined()
    expect(result.statusCode).toBe(400)
  })

  test('POST /bps-calculator redirects to calculation', async () => {
    const value = 1000.01

    const options = {
      method: 'POST',
      url: '/bps-calculator',
      payload: { value }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/calculation-bps?value=${value}`)
  })

  test('POST /bps-calculator 0', async () => {
    const options = {
      method: 'POST',
      url: '/bps-calculator',
      payload: { value: '0' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be greater than £0.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /bps-calculator above £1,000,000,000.', async () => {
    const options = {
      method: 'POST',
      url: '/bps-calculator',
      payload: { value: '1000000000.' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be less than £1,000,000,000.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /bps-calculator not a number', async () => {
    const options = {
      method: 'POST',
      url: '/bps-calculator',
      payload: { value: 'abc' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value must be a number without commas.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /bps-calculator too high to be number', async () => {
    const options = {
      method: 'POST',
      url: '/bps-calculator',
      payload: { value: '10000000000000000000' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('bps-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be less than £1,000,000,000.')
    expect(result.statusCode).toBe(400)
  })

  test('GET /bps-calculator layout includes use the Enter your BPS starting payment amount header', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Enter your BPS starting payment amount')
  })

  test('GET /bps-calculator first paragraph says This calculator will estimate your payment for the 2023 scheme year based on the starting payment amount you enter.', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('This calculator will estimate your payment for the 2023 scheme year based on the starting payment amount you enter.')
  })

  test('GET /bps-calculator second paragraph says You will also see estimated payments for the 2021 and 2022 scheme years when you input your starting amount.', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('You will also see estimated payments for the 2021 and 2022 scheme years when you input your starting amount.')
  })

  test('GET /bps-calculator third paragraph says You should use the Sub total in the Claim summary box of your most recent BPS Claim Statement as the starting payment amount.', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('of your most recent BPS Claim Statement as the starting payment amount.')
  })

  test('GET /bps-calculator fourth paragraph says If your claim area changed during 2021 to 2023, you can use the calculator as many times as you need, using different starting payment amounts each time.', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('If your claim area changed during 2021 to 2023, you can use the calculator as many times as you need, using different starting payment amounts each time.')
  })

  test('GET /bps-calculator fifth paragraph says The number you enter should not include commas. For example, enter £20,000 as 20000.', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('The number you enter should not include commas. For example, enter £20,000 as 20000.')
  })
})
