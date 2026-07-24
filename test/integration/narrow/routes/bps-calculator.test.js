describe('bps-calculator route', () => {
  jest.mock('../../../../app/plugins/crumb')
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

  test.each([
    {
      description: '0',
      value: '0',
      expectedError: 'The value needs to be greater than £0.'
    },
    {
      description: 'above £1,000,000,000',
      value: '1000000000.',
      expectedError: 'The value needs to be less than £1,000,000,000.'
    },
    {
      description: 'not a number',
      value: 'abc',
      expectedError: 'The value must be a number without commas.'
    },
    {
      description: 'too high to be number',
      value: '10000000000000000000',
      expectedError: 'The value needs to be less than £1,000,000,000.'
    }
  ])('POST /bps-calculator - $description', async ({ value, expectedError }) => {
    const result = await server.inject({
      method: 'POST',
      url: '/bps-calculator',
      payload: { value }
    })

    expect(result.request.response.source.template).toBe('bps-calculator')
    expect(result.request.response.source.context.model.errorMessage.text)
      .toContain(expectedError)
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

  test('GET /bps-calculator first paragraph says This calculator will estimate your payment', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('This calculator will estimate your payment')
  })

  test('GET /bps-calculator second paragraph says You will also see estimated payments', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('You will also see estimated payments')
  })

  test('GET /bps-calculator third paragraph says You should use the \'Sub total\' in the \'Claim summary box\'', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('You should use the \'Sub total\' in the \'Claim summary box\'')
  })

  test('GET /bps-calculator fourth paragraph says If your claim area changed during 2021 to 2023', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('If your claim area changed during 2021 to 2023')
  })

  test('GET /bps-calculator fifth paragraph says The number you enter should not include commas', async () => {
    const options = {
      method: 'GET',
      url: '/bps-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('The number you enter should not include commas')
  })
})
