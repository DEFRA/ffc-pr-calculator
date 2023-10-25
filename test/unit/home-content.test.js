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
      'Calculate my progressive reductions'
    )
  })

  test('GET / layout includes Progressive reductions: calculate how BPS and delinked payments will reduce header', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Progressive reductions: calculate how BPS and delinked payments will reduce'
    )
  })

  test('GET / first paragraph says Payments from the Basic Payment Scheme (BPS) in England are reducing each year from 2021 until the end of the 2023 scheme year.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Payments from the Basic Payment Scheme (BPS) in England are reducing each year from 2021 until the end of the 2023 scheme year.'
    )
  })

  test('GET / second paragraph says Delinked payments will replace BPS payments in England in 2024 and will reduce each year until these payments finish', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Delinked payments will replace BPS payments in England in 2024 and will reduce each year until these payments finish'
    )
  })

  test('GET / third paragraph says These reductions to BPS and delinked payments are known as progressive reductions.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'These reductions to BPS and delinked payments are known as progressive reductions.'
    )
  })

  test('GET / fourth paragraph says Use the BPS calculator to get an estimate of how progressive reductions could affect your BPS payments from 2021 to 2023.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Use the BPS calculator to get an estimate of how progressive reductions could affect your BPS payments from 2021 to 2023.'
    )
  })

  test('GET / fifth paragraph says Use the delinked payments calculator to get an estimate of how progressive reductions could affect your delinked payment in 2024.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Use the delinked payments calculator to get an estimate of how progressive reductions could affect your delinked payment in 2024.'
    )
  })

  test('GET / sixth paragraph says To receive delinked payments, you must have claimed, and been eligible for, BPS 2023 in England (except in some inheritance cases).', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'To receive delinked payments, you must have claimed, and been eligible for, BPS 2023 in England (except in some inheritance cases).'
    )
  })

  test('GET / seventh paragraph says Calculations should be quick and will not ask for personal information.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Calculations should be quick and will not ask for personal information.'
    )
  })

  test('GET / eighth paragraph says Call the Rural Payments helpline on 03000 200 301 if you need help using this calculator.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'Call the Rural Payments helpline on 03000 200 301 if you need help using this calculator.'
    )
  })

  test("GET / ninth paragraph says Defra and the Rural Payments Agency (RPA) will publish more information about reductions to delinked payments from 2025 to 2027 when it's available.", async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      "Defra and the Rural Payments Agency (RPA) will publish more information about reductions to delinked payments from 2025 to 2027 when it's available."
    )
  })

  test('GET / tenth paragraph says New schemes and grants are funded through the reductions to BPS and delinked payments.', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain(
      'through the reductions to BPS and delinked payments.'
    )
  })
})
