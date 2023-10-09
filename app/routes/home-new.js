module.exports = {
  method: 'GET',
  path: '/home-new',
  options: {
    handler: (request, h) => {
      return h.view('home-new')
    }
  }
}
