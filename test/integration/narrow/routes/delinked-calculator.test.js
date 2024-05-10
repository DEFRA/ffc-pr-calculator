describe('delinked-calculator route', () => {
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

  test('GET /delinked-calculator returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /delinked-calculator returns delinked-calculator view', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('delinked-calculator')
  })

  test('GET /delinked-calculator context includes Header', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Calculate my progressive reductions')
  })

  test('POST /delinked-calculator returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/delinked-calculator',
      payload: { value: 1000.01 }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('POST /delinked-calculator invalid', async () => {
    const options = {
      method: 'POST',
      url: '/delinked-calculator',
      payload: { value: 'aaaaaa' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('delinked-calculator')
    expect(result.request.response.source.context.model.errorMessage).toBeDefined()
    expect(result.statusCode).toBe(400)
  })

  test('POST /delinked-calculator redirects to calculation', async () => {
    const value = 1000.01

    const options = {
      method: 'POST',
      url: '/delinked-calculator',
      payload: { value }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/calculation-delinked?value=${value}`)
  })

  test('POST /delinked-calculator 0', async () => {
    const options = {
      method: 'POST',
      url: '/delinked-calculator',
      payload: { value: '0' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('delinked-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be greater than £0.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /delinked-calculator above £1,000,000,000.', async () => {
    const options = {
      method: 'POST',
      url: '/delinked-calculator',
      payload: { value: '1000000000.' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('delinked-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be less than £1,000,000,000.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /delinked-calculator not a number', async () => {
    const options = {
      method: 'POST',
      url: '/delinked-calculator',
      payload: { value: 'abc' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('delinked-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value must be a number without commas.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /delinked-calculator too high to be number', async () => {
    const options = {
      method: 'POST',
      url: '/delinked-calculator',
      payload: { value: '10000000000000000000' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('delinked-calculator')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be less than £1,000,000,000.')
    expect(result.statusCode).toBe(400)
  })

  test('GET /delinked-calculator layout includes Enter your delinked payments reference amount header', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Enter your delinked payment reference amount')
  })

  test('GET /delinked-calculator header subline says This calculator will estimate your payment for 2024 based on the reference amount you enter.', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('This calculator will estimate your payment for 2024 based on the reference amount you enter.')
  })

  test('GET /delinked-calculator first paragraph says You were sent your reference amount in the delinked payments information statement.', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('You were sent your reference amount in the delinked payments information statement.')
  })

  test('GET /delinked-calculator second paragraph says This amount will have changed if BPS 2020, 2021 and 2022 reference data has either:', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('This amount will have changed if BPS 2020, 2021 and 2022 reference data has either:')
  })

  test('GET /delinked-calculator third paragraph says been transferred in or out of your business changed following a payment query ', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('been transferred in or out of your business')
    expect(result.request.response._payload._data).toContain('changed following a payment query')
  })

  test('GET /delinked-calculator fourth paragraph says You can view your current reference amount and any data transfers in the Rural Payments service.', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('You can view your current reference amount and any data transfers in the')
    expect(result.request.response._payload._data).toContain('https://www.ruralpayments.service.gov.uk/customer-account/login')
  })

  test('GET /delinked-calculator fifth paragraph says Do not include commas in the amount you enter. For example, enter £20,000 as 20000.', async () => {
    const options = {
      method: 'GET',
      url: '/delinked-calculator'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Do not include commas in the amount you enter. For example, enter £20,000 as 20000.')
  })
})
