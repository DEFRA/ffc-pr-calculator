const buildQueryStringFromObject = (obj) => {
  const queryString = []
  for (const property in obj) {
    if (Object.hasOwn(obj, property) && obj[property]) {
      queryString.push(`${encodeURIComponent(property)}=${encodeURIComponent(obj[property])}`)
    }
  }
  return queryString.join('&')
}

module.exports = buildQueryStringFromObject
