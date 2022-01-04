Feature: FFC-PR-CALCULATOR

Scenario: 001-Calculate BPS single payment for a farmer
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add "500" to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/calculation?value"
Then I expect that element "h1" contains the text "Calculation complete"

Scenario: 002-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "Agricultural Transition Plan 2021 to 2024"
Then I expect that element "h1" contains the text "Agricultural Transition Plan 2021 to 2024"

Scenario: 003-User can click on Farming is changing link
Given I open the url "/"
When I click on the element "#farming-is-changing-link"
Then I expect that the url contain "/farming-changing.pdf"

Scenario: 004-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "Open Government Licence v3.0"
Then I expect that element "#license/main/h1" contains the text "Open Government Licence for public sector information"
Then I expect that element "//div[@id='license']/div[2]/h3" is displayed

Scenario: 005-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "© Crown copyright"
Then I expect that element "h1" contains the text "Crown copyright"


Scenario: 005-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "© Crown copyright"
Then I expect that element "h1" contains the text "Crown copyright"

Scenario: 006-User can click on Gov.uk link
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I click on the link "GOV.UK"
Then I expect that element "h1" contains the text "Welcome to GOV.UK"

Scenario: 007-User can click on Calculate my progressive reductions link
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I click on the link "Calculate my progressive reductions"
Then I expect that the url contains "/"
Then I expect that element "h1" contains the text "Calculate my progressive reductions"

Scenario: 008-User can click on Accessibility statement link
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I click on the link "Accessibility statement"
Then I expect that element "h1" contains the text "Accessibility statement"


Scenario: 009-User can click licence link on value page
Given I open the url "/value"
When I click on the link "Open Government Licence v3.0"
Then I expect that element "#license/main/h1" contains the text "Open Government Licence for public sector information"   

Scenario: 010-User can click copyright link on value page
Given I open the url "/value"
When I click on the link "© Crown copyright"
Then I expect that element "h1" contains the text "Crown copyright"

Scenario: 011-User can click gov link on value page
Given I open the url "/value"
When I click on the link "GOV.UK"
Then I expect that element "h1" contains the text "Welcome to GOV.UK"

Scenario: 012-User can click progressive reduction  link on value page
Given I open the url "/value"
When I click on the link "Calculate my progressive reductions"
Then I expect that element "h1" contains the text "Calculate my progressive reductions"

Scenario: 013-User can click accessibility statement link on value page
Given I open the url "/value"
When I click on the link "Accessibility statement"
Then I expect that element "h1" contains the text "Accessibility statement"

Scenario: 014-User can click cookies link on value page
Given I open the url "/value"
When I click on the link "Cookies"
Then I expect that element "h2" contains the text "Details about cookies on Calculate my progressive reductions"

Scenario: 015-Can navigate back to previous page
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
And I add "500" to the inputfield "#value"
And I click on Next button "#submit"  
Then I expect that the url contains "/calculation" 
When I click on the link "Back"
Then I expect that the url contains "/value"
When I click on the link "Back"
Then I expect that the url contains "/"
Then I expect that element "h1" contains the text "Calculate my progressive reductions"

Scenario: 016-User can click licence link on calculation page
Given I open the url "/calculation?value=32"
When I click on the link "Open Government Licence v3.0"
Then I expect that element "#license/main/h1" contains the text "Open Government Licence for public sector information"

Scenario: 017-User can click copyright link on calculation page
Given I open the url "/calculation?value=32"
When I click on the link "© Crown copyright"
Then I expect that element "h1" contains the text "Crown copyright"

Scenario: 018-User can click gov link on calculation page
Given I open the url "/calculation?value=32"
When I click on the link "GOV.UK"
Then I expect that element "h1" contains the text "Welcome to GOV.UK"

Scenario: 019-User can click progressive reduction  link on calculation page
Given I open the url "/calculation?value=32"
When I click on the link "Calculate my progressive reductions"
Then I expect that element "h1" contains the text "Calculate my progressive reductions"

Scenario: 020-User can click accessibility statement link on calculation page
Given I open the url "/calculation?value=32"
When I click on the link "Accessibility statement"
Then I expect that element "h1" contains the text "Accessibility statement"

Scenario: 021-User can click cookies link on calculation page
Given I open the url "/calculation?value=32"
When I click on the link "Cookies"
Then I expect that element "h2" contains the text "Cookies"

Scenario: 0022-User can click on Rural payments and grants link
Given I open the url "/"
When I click on the link "Rural payments and grants"
Then I expect that element "h1" contains the text "Rural payments and grants"


