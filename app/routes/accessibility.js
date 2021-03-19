module.exports = {
  method: 'GET',
  path: '/guidance/accessibility-statement',
  options: {
    handler: (request, h) => {
      return h.view('accessibility')
    }
  }
}
