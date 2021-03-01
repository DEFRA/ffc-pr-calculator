describe('bps selection route', () => {
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

  test('GET /bps/selection returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/bps'
    }
  })
})