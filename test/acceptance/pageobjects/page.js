export default class Page {
   
    open (path) {
       return browser.url(`http://host.docker.internal:3000/${path}`)
    }
}
