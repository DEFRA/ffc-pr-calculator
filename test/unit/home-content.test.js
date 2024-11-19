describe('home page to test the new version of the PRC', () => {
  let createServer
  let server

  beforeEach(async () => {
    createServer = require('../../app/server')
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

  test('GET / returns new home view', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('home')
  })

  test('GET / context includes Header', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Calculate your delinked payment'
    )
  })

  test('GET / layout includes Calculate your delinked payment', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Calculate your delinked payment'
    )
  })

  test('GET / first paragraph says Delinked payments have replaced Basic Payment Scheme (BPS) payments in England. These will reduce each year until they finish at the end of 2027.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Delinked payments have replaced Basic Payment Scheme (BPS) payments in England. These will reduce each year until they finish at the end of 2027.'
    )
  })

  test('GET / second paragraph says Reductions to delinked payments are known as progressive reductions.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Reductions to delinked payments are known as progressive reductions.'
    )
  })

  test('GET / third paragraph says To receive delinked payments, you must have claimed, and been eligible for, BPS 2023 in England (except in some inheritance cases).', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'To receive delinked payments, you must have claimed, and been eligible for, BPS 2023 in England (except in some inheritance cases).'
    )
  })

  test('GET / fourth paragraph says Use this calculator to estimate how the progressive reduction could reduce your delinked payment for 2024.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Use this calculator to estimate how progressive reductions could reduce your delinked payment for 2025. The estimate for 2025 is based on the proposed progressive reduction figures for 2025 shown in the <a class="govuk-link" rel="external" href="https://www.gov.uk/guidance/delinked-payments-replacing-the-basic-payment-scheme"> delinked payments guidance</a>. The calculator also shows how progressive reductions affected your 2024 delinked payment.'
    )
  })

  test('GET / fifth paragraph says Calculations should be quick and will not ask for personal information.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Calculations should be quick and will not ask for personal information.'
    )
  })

  test('GET / sixth paragraph says Call the Rural Payments helpline on 03000 200 301 if you need help using this calculator.).', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Call the Rural Payments helpline on 03000 200 301 if you need help using this calculator.'
    )
  })

  test('GET / seventh paragraph says The Rural Payments Agency (RPA) will publish the reductions to delinked payments from 2025 to 2027 when they\'re available.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'The Rural Payments Agency (RPA) will publish the reductions to delinked payments from 2026 to 2027 when they\'re available.'
    )
  })

  test('GET / eighth paragraph says The reductions to delinked payments help fund new schemes and grants', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'The reductions to delinked payments help fund'
    )
    expect(result.request.response._payload._data).toContain(
      'https://www.gov.uk/guidance/funding-for-farmers'
    )
    expect(result.request.response._payload._data).toContain(
      'new schemes and grants.'
    )
  })

  test('GET / ninth paragraph says You can read more about delinked payments: replacing the Basic Payment Scheme.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'You can read more about '
    )
    expect(result.request.response._payload._data).toContain(
      'https://www.gov.uk/guidance/delinked-payments-replacing-the-basic-payment-scheme'
    )
    expect(result.request.response._payload._data).toContain(
      'delinked payments: replacing the Basic Payment Scheme.'
    )
  })
})
