import Page from './page'

class HomePage extends Page {
<<<<<<< HEAD
   
    get startNewCalBtn () { return $('//main/div/div/a') }
    
  


    async start () {
        await (await this.startNewCalBtn).click();
    }  

    open () {
        return super.open('bps');
    } 

   

    // open () {
    //     super.open('')
    //     browser.pause()
    //   }

=======
  get startNewCalBtn () { return $('//main/div/div/a') }

  async start () {
    await (await this.startNewCalBtn).click()
  }

  open () {
    return super.open('home')
  }
>>>>>>> c2c14e3b1f6d3af3d62e9b37998b0cb73adbf609
}

export default new HomePage()
