const homeContent = require('../mocks/mockHomeContent')
const useCalculator = homeContent.useCalculator
const buttonText = homeContent.buttonText
const beforeYouStart = homeContent.beforeYouStart
const delinkedPayments = homeContent.delinkedPayments
const opportunities = homeContent.opportunities

describe('PRC content changes', () => {
  test('use the calculator', () => {
    expect(useCalculator.affect).toMatch('Use the calculator to see how progressive reductions could affect your Direct Payments in England for:')
  })

  test('Basic Payments Scheme (BPS)2021 to 2023', () => {
    expect(useCalculator.basicPaymentsScheme).toMatch('Basic Payments scheme (BPS) 2021 to 2023 \nDelinked payments 2024')
  })

  test('Calculation should be quick paragraph', () => {
    expect(useCalculator.calculation).toMatch('Calculation should be quick, and will not ask for any personal information. The results are an estimated calculation based on our progressive reduction figures. The reduction rates for 2025 to 2027 will be published when they are available.')
  })

  test('There are two buttons and the BPS button still exists', () => {
    expect(buttonText.bpsButton).toMatch('Start new BPS calculation')
  })

  test('the second button includes the new Start new delinked button', () => {
    expect(buttonText.delinkedButton).toMatch('Start new Delinked Payment calculation')
  })

  test('before you start section, calculator estimated', () => {
    expect(beforeYouStart.calculatorEstimated).toMatch('This calculator will estimate your payment based on the starting amount you enter.')
  })

  test('bps Years show 2021 to 2023', () => {
    expect(beforeYouStart.bpsYears).toMatch('BPS years 2021 to 2023')
  })

  test('starting payment amount paragraph', () => {
    expect(beforeYouStart.startingPaymentAmount).toMatch('This starting payment amount will be the total payment you would have been due in each scheme year, before progressive reductions are applied. If you wish to use your 2020, 2021 or 2022 figure then you should use the \'sub total\' in the claim summary box of your BPS Claim Statement. This figure is the total of the \'Main BPS claim value (excluding young farmer part)\' and \'Young farmer payment\'. This is your \'gross payment\' before any reductions have taken place.')
  })

  test('claim area changed', () => {
    expect(beforeYouStart.claimAreaChanged).toMatch('If your claim area changed during 2021 to 2023, you can use the calculator as many times as you need, using different starting payment amounts each time')
  })

  test('delinked payments starting amount', () => {
    expect(delinkedPayments.yourStartingAmount).toMatch('Your starting amount will be your delinked payments \'reference amount\'. This will be shown on your delinked payments Information Statement. If your reference amount changes, for example if you transfer some of your reference amount to another business, you should use your updated reference amount.')
  })

  test('to receive delinked payments paragraph', () => {
    expect(delinkedPayments.toReceiveDelinked).toMatch('To receive delinked payments, you must also have claimed, and been eligible for, BPS 2023 in England (except for some inheritance cases).')
  })

  test('Read link to guidance', () => {
    expect(delinkedPayments.linkToGuidance).toMatch('Read [link to guidance] for more information about delinked payments.')
  })

  test('if you require help using this calculator', () => {
    expect(delinkedPayments.requireHelp).toMatch('If you require help in using this calculator, please call the Rural Payments helpline on 03000 200 301')
  })

  test('opportunities section, if you are a farmer', () => {
    expect(opportunities.ifFarmer).toMatch('If you\'re a farmer, land manager or forester, read Funding for farmers and land managers for information about opportunities to apply for money to improve the environment and your farms productivity. You can keep up to date with scheme news on the Rural Payments Agency website and the Defra Farming blog.')
  })

  test('If you would like more info', () => {
    expect(opportunities.moreInfo).toMatch('If you would like more information about schemes and grants funded through the reductions to BPS, please visit the Rural payments and grants page')
  })
})
