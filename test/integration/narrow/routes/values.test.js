describe('values route', () => {
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

  test('GET /values returns values view', async () => {
    const options = {
      method: 'GET',
      url: '/values'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('values')
  })

  test('POST /values  returns 302', async () => {
    const value2021 = 5000
    const value2022 = 4000
    const value2023 = 3000
    const value2024 = 2000

    const options = {
      method: 'POST',
      url: '/values ',
      payload: { value2021, value2022, value2023, value2024 }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
    expect(result.headers.location).toBe(`/calculation?value2021=${value2021}&value2022=${value2022}&value2023=${value2023}&value2024=${value2024}`)
  })

  test('POST /values invalid value 0', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2022: 0 }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('values')
    expect(result.request.response.source.context.model.errors.errorList.length).toBe(1)
    expect(result.statusCode).toBe(400)
  })

  test('POST /values invalid all values 0', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2021: 0, value2022: 0, value2023: 0, value2024: 0 }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('values')
    expect(result.request.response.source.context.model.errors.errorList.length).toBe(4)
    expect(result.statusCode).toBe(400)
  })

  test('POST /values value less than 1000000000', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2023: 999999999 }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('POST /values invalid empty values', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2021: '', value2022: '', value2023: '', value2024: '' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('values')
    expect(result.request.response.source.context.model.errors.errorList.length).toBe(1)
    expect(result.statusCode).toBe(400)
  })

  test('POST /values invalid greater than 999999999', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2023: 1000000000 }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('values')
    expect(result.request.response.source.context.model.errors.errorList.length).toBe(1)
    expect(result.statusCode).toBe(400)
  })

  test('POST /values at least 1 value', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2021: 500000 }
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('POST /values invalid value', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2021: '2222222222222222222222222222222222222222222222222222222222222222222222222222222' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('values')
    expect(result.request.response.source.context.model.errors.errorList.length).toBe(1)
    expect(result.statusCode).toBe(400)
  })

  test('POST /values not a number', async () => {
    const options = {
      method: 'POST',
      url: '/values',
      payload: { value2021: 'dddddddd' }
    }

    const result = await server.inject(options)
    expect(result.request.response.source.template).toBe('values')
    expect(result.request.response.source.context.model.errors.errorList.length).toBe(1)
    expect(result.statusCode).toBe(400)
  })
})
