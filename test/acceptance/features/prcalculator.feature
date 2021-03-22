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
Then I expect that the url contains "/government/"
Then I expect that element "h1" contains the text "Agricultural transition plan 2021 to 2024"

Scenario: 003-User can click on Farming is changing link
Given I open the url "/"
When I click on the link "Farming is changing"
Then I expect that the url contains "/939683/farming-changing.pdf"
#Then I expect that element "h1" contains the text "Farming is changing"


Scenario: 004-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "Open Government Licence v3.0"
Then I expect that the url contains "/open-government-licence/version/3/"
#Then I expect that element "h1" contains the text ""

Scenario: 005-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "© Crown copyright"
Then I expect that the url contains "/uk-government-licensing-framework/crown-copyright"
Then I expect that element "h1" contains the text "Crown copyright"

Scenario: 006-User can click on Gov.uk link
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I click on the link "GOV.UK"
Then I expect that the url contains "/www.gov.uk"
Then I expect that element "h1" contains the text "Welcome to GOV.UK"

Scenario: 007-User can click on Calculate my progressive reductions link
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I click on the link "Calculate my progressive reductions"
Then I expect that the url contains "http://host.docker.internal:3000/"
Then I expect that element "h1" contains the text "Calculate my progressive reductions"

Scenario: 008-Calculate BPS single payment for a farmer
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
And I add "500" to the inputfield "#value"
And I click on Next button "#submit"   
When I click on the link "back"
#And I click on the backlink
#And I click on the link ".govuk-back-link"
Then I expect that the url contains "/cookies"
When I click on the link "back"
#And I click on the backlink 
Then I expect that the url contains "/cookies"
And I click on the backlink 
Then I expect that the url contains "/cookies"