describe('home route', () => {
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

  test('GET / returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET / returns home view', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('home')
  })

  test('GET / context includes serviceName', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response.source.manager._context.serviceName).toBe('Calculate my progressive reductions')
  })

  test('GET / layout includes use the calculator paragraph', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Use the calculator to see how progressive reductions could affect your Direct Payments in England for:')
  })

  test('GET / layout includes use the calculator should be quick section', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Calculation should be quick, and will not ask for any personal information. The results are an estimated calculation based on our progressive reduction figures. The reduction rates for 2025 to 2027 will be published when they are available.')
  })

  test('GET / layout includes BPS calculation button', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Start new BPS calculation')
  })

  test('GET / layout hides the delinked calculation button', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).not.toContain('Start new Delinked Payment calculation')
  })

  test('GET / containing the starting payment amount paragraph', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('This starting payment amount will be the total payment you would have been due in each scheme year')
    expect(result.request.response._payload._data).toContain('before progressive reductions are applied.')
  })

  test('GET / if the claim area changed', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('If your claim area changed during 2021 to 2023, you can use the calculator as many times as you need, using different starting payment amounts each time.')
    expect(result.request.response._payload._data).toContain('Your starting amount will be your delinked payments')
    expect(result.request.response._payload._data).toContain('To receive delinked payments, you must also have claimed, and been eligible for, BPS 2023 in England (except for some inheritance cases).')
  })

  test('GET / look for delinked-guidance link', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('delinked-payments-replacing-the-basic-payment-scheme')
  })

  test('GET / is the RPA helpline number correct', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('tel:03000 200 301')
  })

  test('GET opportunities within other schemes', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('a farmer, land manager or forester, read Funding for farmers and land managers for information about opportunities to apply for money to improve the environment and your farms productivity. You can keep up to date with scheme news on the Rural Payments Agency website and the Defra Farming blog.')
  })

  test('GET more information section', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('If you would like more information about schemes and grants funded through the reductions to BPS, please visit the Rural payments and grants page')
  })
})
