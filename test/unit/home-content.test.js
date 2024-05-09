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

  test('GET / first paragraph says Delinked payments have replaced Basic Payment Scheme (BPS) payments in England and will reduce each year until they finish at the end of 2027.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Delinked payments have replaced Basic Payment Scheme (BPS) payments in England and will reduce each year until they finish at the end of 2027.'
    )
  })

  test('GET / second paragraph says These reductions to delinked payments are known as progressive reductions.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'These reductions to delinked payments are known as progressive reductions.'
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
      'Use this calculator to estimate how the progressive reduction could reduce your delinked payment for 2024.'
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

  test('GET / seventh paragraph says Defra and the Rural Payments Agency (RPA) will publish more information about reductions to delinked payments from 2025 to 2027 when it\'s available.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Defra and the Rural Payments Agency (RPA) will publish more information about reductions to delinked payments from 2025 to 2027 when it\'s available.'
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
      'new schemes and grants '
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
