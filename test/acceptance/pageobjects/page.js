export default class Page {
   
    open (path) {
       //return browser.url(`http://host.docker.internal:3000/${path}`)     https://www.google.co.uk/
       // browser.url(path)

       return browser.url(`http://localhost:3000/${path}`);
    }
}
