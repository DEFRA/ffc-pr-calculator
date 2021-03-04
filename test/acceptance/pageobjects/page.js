export default class Page {
<<<<<<< HEAD
   
    open (path) {
       //return browser.url(`http://host.docker.internal:3000/${path}`)     https://www.google.co.uk/
       // browser.url(path)

       return browser.url(`http://localhost:3000/${path}`);
    }
=======
  open (path) {
    return browser.url(`http://host.docker.internal:3000/${path}`)
  }
>>>>>>> c2c14e3b1f6d3af3d62e9b37998b0cb73adbf609
}
