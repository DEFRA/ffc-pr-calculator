describe('value route', () => {
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

  test('GET /value returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/value'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /value returns value view', async () => {
    const options = {
      method: 'GET',
      url: '/value'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('value')
  })

  test('GET /value context includes Header', async () => {
    const options = {
      method: 'GET',
      url: '/value'
    }

    const result = await server.inject(options)
    expect(result.request.response._payload._data).toContain('Calculate my progressive reductions')
  })

  test('POST /value returns 302', async () => {
    const options = {
      method: 'POST',
      url: '/value',
      payload: { value: 1000.01 }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('POST /value invalid', async () => {
    const options = {
      method: 'POST',
      url: '/value',
      payload: { value: 'aaaaaa' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('value')
    expect(result.request.response.source.context.model.errorMessage).toBeDefined()
    expect(result.statusCode).toBe(400)
  })

  test('POST /value redirects to calculation', async () => {
    const value = 1000.01

    const options = {
      method: 'POST',
      url: '/value',
      payload: { value }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/calculation?value=${value}`)
  })

  test('POST /value 0', async () => {
    const options = {
      method: 'POST',
      url: '/value',
      payload: { value: '0' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('value')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be greater than £0.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /value above £1,000,000,000.', async () => {
    const options = {
      method: 'POST',
      url: '/value',
      payload: { value: '1000000000.' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('value')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value needs to be less than £1,000,000,000.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /value not a number', async () => {
    const options = {
      method: 'POST',
      url: '/value',
      payload: { value: 'abc' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('value')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value must be a number.')
    expect(result.statusCode).toBe(400)
  })

  test('POST /value too high to be number', async () => {
    const options = {
      method: 'POST',
      url: '/value',
      payload: { value: '10000000000000000000' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('value')
    expect(result.request.response.source.context.model.errorMessage.text).toContain('The value must be between £0 and £1,000,000,000.')
    expect(result.statusCode).toBe(400)
  })
})
