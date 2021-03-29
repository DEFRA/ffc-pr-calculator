/**
 * Check the URL of the given browser window
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 */
export default (falseCase, expectedUrl) => {
  /**
     * The current browser window's URL
     * @type {String}
     */
  const currentUrl = browser.getUrl()

  if (falseCase) {
    expect(currentUrl).to.not
      .contain(expectedUrl, `expected url not to contain "${currentUrl}"`)
  } else 
  {
    
    const envRoot = (process.env.TEST_ENVIRONMENT_ROOT_URL || 'http://host.docker.internal:3000')
    var expectedUrl1 = envRoot + expectedUrl
    expect(currentUrl).to
      .contain(
        expectedUrl1,
       // expectedUrl,
        `expected url to contain "${expectedUrl}" but found ` +
                `"${currentUrl}"`
      )
  }

  // {     
  //   expect(currentUrl).to
  //     .contain(
  //       expectedUrl,
  //       `expected url to contain "${expectedUrl}" but found ` +
  //               `"${currentUrl}"`
  //     )
  // }

}
