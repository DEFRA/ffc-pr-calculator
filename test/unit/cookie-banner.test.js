describe('Cookie Banner Text Content', () => {
  const requiredText = {
    noscript: 'We use cookies to make this service work and collect analytics information. To accept or reject cookies, turn on JavaScript in your browser settings or reload this page.',
    essential: 'We use some essential cookies to make this service work.',
    analytics: 'We\'d also like to use analytics cookies so we can understand how you use the service and make improvements.',
    accept: 'You\'ve accepted analytics cookies. You can change your cookie settings at any time.',
    reject: 'You\'ve rejected analytics cookies. You can change your cookie settings at any time.',
    buttons: [
      'Accept analytics cookies',
      'Reject analytics cookies',
      'View cookies'
    ]
  }

  test('contains correct noscript message', () => {
    expect(requiredText.noscript).toBe('We use cookies to make this service work and collect analytics information. To accept or reject cookies, turn on JavaScript in your browser settings or reload this page.')
  })

  test('contains correct essential cookies message', () => {
    expect(requiredText.essential).toBe('We use some essential cookies to make this service work.')
  })

  test('contains correct analytics cookies message', () => {
    expect(requiredText.analytics).toBe('We\'d also like to use analytics cookies so we can understand how you use the service and make improvements.')
  })

  test('contains correct acceptance message', () => {
    expect(requiredText.accept).toBe('You\'ve accepted analytics cookies. You can change your cookie settings at any time.')
  })

  test('contains correct rejection message', () => {
    expect(requiredText.reject).toBe('You\'ve rejected analytics cookies. You can change your cookie settings at any time.')
  })
})
