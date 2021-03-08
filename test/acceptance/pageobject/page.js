export default class Page {
   
    open (path) {  
       browser.debug()
       return browser.url(`http://host.docker.internal:3000/${path}`);
    }
}


