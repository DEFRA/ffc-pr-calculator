const appInsights = require('applicationinsights')

function setup () {
  if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY) {
    appInsights.setup().start()
    console.log('App Insights Running')
    const cloudRoleTag = appInsights.defaultClient.context.keys.cloudRole
    const appName = process.env.APPINSIGHTS_CLOUDROLE
    appInsights.defaultClient.context.tags[cloudRoleTag] = appName
  } else {
    console.log('App Insights Not Running!')
  }
}

function trackCalculationEvent (inputValue) {
  if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY) {
    const client = appInsights.defaultClient
    client.trackEvent({ name: 'calculation', properties: { inputValue, timestamp: new Date() } })
  }
}

module.exports = { setup, trackCalculationEvent }
