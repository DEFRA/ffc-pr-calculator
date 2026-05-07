const ViewModel = require('./models/sitemap')

module.exports = {
  method: 'GET',
  path: '/sitemap',
  options: {
    handler: (request, h) => {
      const sections = [
        {
          title: '',
          links: [
            { href: '/', text: 'Home' }
          ]
        },
        {
          title: 'Help',
          links: [
            { href: '/accessibility', text: 'Accessibility statement' },
            { href: '/cookies', text: 'Cookies' },
            { href: '/privacy', text: 'Privacy' }
          ]
        }
      ]

      return h.view('sitemap', new ViewModel(sections))
    }
  }
}
