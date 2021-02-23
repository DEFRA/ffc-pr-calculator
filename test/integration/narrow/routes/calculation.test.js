describe('calculation route', () => {
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

<<<<<<< HEAD
  test('GET /calculation returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?bpsValue=1000'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /calculation returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?bpsValue=1000'
=======
  test('GET / returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
>>>>>>> de8194ae14f095530b9a50f0423dd120b08eb7a3
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

<<<<<<< HEAD
  test('GET /calculation returns calculation view', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?bpsValue=1000'
=======
  test('GET / returns calculation view', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
>>>>>>> de8194ae14f095530b9a50f0423dd120b08eb7a3
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })

<<<<<<< HEAD
  test('GET /calculation includes table', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?bpsValue=1000'
=======
  test('GET / includes table', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
>>>>>>> de8194ae14f095530b9a50f0423dd120b08eb7a3
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
    expect(result.payload).toContain('govuk-table')
  })
<<<<<<< HEAD

  test('GET /calculation returns 302 if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('GET /calculation redirect to bps view if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
    }

    const result = await server.inject(options)
    expect(result.headers.location).toBe('/bps')
  })
=======
>>>>>>> de8194ae14f095530b9a50f0423dd120b08eb7a3
})
