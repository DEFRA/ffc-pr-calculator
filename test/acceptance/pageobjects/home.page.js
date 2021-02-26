import Page from './page'

class HomePage extends Page {
  get startNewCalBtn () { return $('//main/div/div/a') }

  async start () {
    await (await this.startNewCalBtn).click()
  }

  open () {
    return super.open('home')
  }
}

export default new HomePage()
