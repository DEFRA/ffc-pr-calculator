const fs = require('fs')
const path = require('path')

describe('Cookie Banner Text Content', () => {
  let templateContent
  beforeAll(() => {
    const templatePath = path.resolve(__dirname, '../../app/views/cookies/_cookie-banner.njk')
    templateContent = fs.readFileSync(templatePath, 'utf8')
  })

  // Exact text from template
  const requiredText = {
    noscript: 'We use cookies to make this service work and collect analytics information. To accept or reject cookies, turn on JavaScript in your browser settings or reload this page.',
    essential: 'We use some essential cookies to make this service work.',
    analytics: 'We’d also like to use analytics cookies so we can understand how you use the service and make improvements',
    accept: 'You’ve accepted analytics cookies.',
    reject: 'You’ve rejected analytics cookies.',
    changeSettings: 'change your cookie settings',
    buttons: [
      'Accept analytics cookies',
      'Reject analytics cookies',
      'View cookies',
      'Hide this message'
    ]
  }

  test('cookie banner contains required noscript message', () => {
    expect(templateContent).toContain(requiredText.noscript)
  })

  test('cookie banner contains required cookie messages', () => {
    expect(templateContent).toContain(requiredText.essential)
  })

  test('cookie banner contains required analytics messages', () => {
    expect(templateContent).toContain(requiredText.analytics)
  })

  test('cookie banner contains acceptance/rejection messages', () => {
    expect(templateContent).toContain(requiredText.accept)
    expect(templateContent).toContain(requiredText.reject)
    expect(templateContent).toContain(requiredText.changeSettings)
  })

  test('cookie banner contains all required buttons', () => {
    requiredText.buttons.forEach(buttonText => {
      expect(templateContent).toContain(buttonText)
    })
  })
})
