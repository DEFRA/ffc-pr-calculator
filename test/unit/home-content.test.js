describe('home-new page to test the new version of the homepage before it moves to /', () => {
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

  test('GET /home-new returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /home-new returns new home-new view', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('home-new')
  })

  test('GET /home-new context includes Header', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Calculate my progressive reductions')
  })

  test('GET /home-new layout includes Progressive reductions: calculate how BPS and delinked payments will reduce header', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Progressive reductions: calculate how BPS and delinked payments will reduce')
  })

  test('GET /home-new first paragraph says Payments from the Basic Payment Scheme (BPS) in England are reducing each year from 2021 until the end of the 2023 scheme year.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Payments from the Basic Payment Scheme (BPS) in England are reducing each year from 2021 until the end of the 2023 scheme year.')
  })

  test('GET /home-new second paragraph says Delinked payments will replace BPS payments from 2024 and will reduce each year until payments finish at the end of 2027.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Delinked payments will replace BPS payments from 2024 and will reduce each year until payments finish at the end of 2027.')
  })

  test('GET /home-new third paragraph says These reductions to BPS and delinked payments are known as progressive reductions.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('These reductions to BPS and delinked payments are known as progressive reductions.')
  })

  test('GET /home-new fourth paragraph says Use the BPS calculator to get an estimate of how progressive reductions could affect your BPS payments from 2021 to 2023.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Use the BPS calculator to get an estimate of how progressive reductions could affect your BPS payments from 2021 to 2023.')
  })

  test('GET /home-new fifth paragraph says Use the delinked payments calculator to get an estimate of how progressive reductions could affect your delinked payment in 2024.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Use the delinked payments calculator to get an estimate of how progressive reductions could affect your delinked payment in 2024.')
  })

  test('GET /home-new sixth paragraph says To receive delinked payments, you must have claimed, and been eligible for, BPS 2023 in England (except in some inheritance cases).', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('To receive delinked payments, you must have claimed, and been eligible for, BPS 2023 in England (except in some inheritance cases).')
  })

  test('GET /home-new seventh paragraph says Calculations should be quick and will not ask for personal information.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Calculations should be quick and will not ask for personal information.')
  })

  test('GET /home-new eighth paragraph says Call the Rural Payments helpline on 03000 200 301 if you need help using this calculator.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Call the Rural Payments helpline on 03000 200 301 if you need help using this calculator.')
  })

  test('GET /home-new ninth paragraph says Defra and the Rural Payments Agency (RPA) will publish more information about reductions to delinked payments from 2025 to 2027 when it\'s available.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Defra and the Rural Payments Agency (RPA) will publish more information about reductions to delinked payments from 2025 to 2027 when it\'s available.')
  })

  test('GET /home-new tenth paragraph says New schemes and grants are funded through the reductions to BPS and delinked payments.', async () => {
    const options = {
      method: 'GET',
      url: '/home-new'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('through the reductions to BPS and delinked payments.')
  })
})
