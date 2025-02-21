Feature: FFC-PR-CALCULATOR

  Scenario: 001-Calculate delinked payment for a farmer
    Given I open the url "/"
    When I click on the element "button.govuk-button--start"
    Then I expect that the url contains "/delinked-calculator"
    When I add "500" to the inputfield "#value"
    And I click on Next button "#submit"
    Then I expect that the url contains "/calculation-delinked?value=500"
    Then I expect that element "h1" contains the text "Delinked payment"

  Scenario: 003-User can click on Farming is changing link
    Given I open the url "/"
    When I click on the element "#farming-is-changing-link"
    Then I expect that the url contain "gov.uk/guidance/funding-for-farmers"

  Scenario: 004-User can click on Agricultural transition link
    Given I open the url "/"
    When I click on the link "Open Government Licence v3.0"
    Then I expect that element "#license > main > h1" contains the text "Open Government Licence for public sector information"

  Scenario: 005-User can click on Agricultural transition link
    Given I open the url "/"
    When I click on the link "© Crown copyright"
    Then I expect that element "h1" contains the text "Crown copyright"

  Scenario: 006-User can click on Gov.uk link
    Given I open the url "/"
    When I click on start new calculator button ".govuk-button--start"
    Then I expect that the url contains "/delinked-calculator"
    When I click on the link "GOV.UK"
    Then I expect that element "h1" contains the text "GOV.UK"

  Scenario: 007-User can click on Start now link
    Given I open the url "/"
    When I click on start new calculator button ".govuk-button--start"
    Then I expect that the url contains "/delinked-calculator"
    When I click on the link "Calculate your delinked payment"
    Then I expect that the url contains "/"
    Then I expect that element "h1" contains the text "Calculate your delinked payment"

  Scenario: 008-User can click on Accessibility statement link
    Given I open the url "/"
    When I click on start new calculator button ".govuk-button--start"
    Then I expect that the url contains "/delinked-calculator"
    When I click on the link "Accessibility statement"
    Then I expect that element "h1" contains the text "Accessibility statement"


  Scenario: 009-User can click licence link on value page
    Given I open the url "/delinked-calculator"
    When I click on the link "Open Government Licence v3.0"
    Then I expect that element "#license > main > h1" contains the text "Open Government Licence for public sector information"

  Scenario: 010-User can click copyright link on value page
    Given I open the url "/delinked-calculator"
    When I click on the link "© Crown copyright"
    Then I expect that element "h1" contains the text "Crown copyright"

  Scenario: 011-User can click gov link on value page
    Given I open the url "/delinked-calculator"
    When I click on the link "GOV.UK"
    Then I expect that element "h1" contains the text "GOV.UK"

  Scenario: 012-User can click delinked payment link on value page
    Given I open the url "/delinked-calculator"
    When I click on the link "Calculate your delinked payment"
    Then I expect that element "h1" contains the text "Calculate your delinked payment"

  Scenario: 013-User can click accessibility statement link on value page
    Given I open the url "/delinked-calculator"
    When I click on the link "Accessibility statement"
    Then I expect that element "h1" contains the text "Accessibility statement"

  Scenario: 014-User can click cookies link on value page
    Given I open the url "/delinked-calculator"
    When I click on the link "Cookies"
    Then I expect that element "main > h2" contains the text "Details about cookies on Calculate my progressive reductions"

  Scenario: 015-Can navigate back to previous page
    Given I open the url "/"
    When I click on start new calculator button ".govuk-button--start"
    And I add "500" to the inputfield "#value"
    And I click on Next button "#submit"
    Then I expect that the url contains "/calculation-delinked"
    When I click on the link "Back"
    Then I expect that the url contains "/delinked-calculator"
    When I click on the link "Back"
    Then I expect that the url contains "/"
    Then I expect that element "h1" contains the text "Calculate your delinked payment"

  Scenario: 016-User can click licence link on calculation page
    Given I open the url "/calculation-delinked?value=32"
    When I click on the link "Open Government Licence v3.0"
    Then I expect that element "#license > main > h1" contains the text "Open Government Licence for public sector information"

  Scenario: 017-User can click copyright link on calculation page
    Given I open the url "/calculation-delinked?value=32"
    When I click on the link "© Crown copyright"
    Then I expect that element "h1" contains the text "Crown copyright"

  Scenario: 018-User can click gov link on calculation page
    Given I open the url "/calculation-delinked?value=32"
    When I click on the link "GOV.UK"
    Then I expect that element "h1" contains the text "GOV.UK"

  Scenario: 019-User can click progressive reduction  link on calculation page
    Given I open the url "/calculation-delinked?value=32"
    When I click on the link "Calculate your delinked payment"
    Then I expect that element "h1" contains the text "Calculate your delinked payment"

  Scenario: 0022-User can click on Funding for farmers, growers and land managers link
    Given I open the url "/"
    When I click on the link "Funding for farmers, growers and land managers"
    Then I expect that element "h1" contains the text "Funding for farmers, growers and land managers"


