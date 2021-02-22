function ViewModel (value) {
  this.model = {
    titleText: 'Your progressive reduction calculation',
    html: `Your payment is<br><strong>${value}</strong>`
  }
}

module.exports = ViewModel
