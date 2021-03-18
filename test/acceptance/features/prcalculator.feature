Feature: FFC-PR-CALCULATOR

Scenario: 001-Calculate BPS single payment for a farmer
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/input-type"
When I click on option button "#inputType"  
And I click on Next button "#submit"
Then I expect that the url contains "/value"
When I add "500" to the inputfield "#value"
And I click on Next button "#submit"
Then I expect that the url contains "/calculation?value"
Then I expect that element "h1" contains the text "Calculation complete"    


Scenario: 002-Calculate BPS multiple payment for a farmer
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/input-type"
And I click on option button "#inputType-2"  
When I click on Next button "#submit"
Then I expect that the url contains "/value"
When I add "500" to the inputfield "#value2021"
When I add "1000" to the inputfield "#value2022"
When I add "1500" to the inputfield "#value2023"
When I add "2000" to the inputfield "#value2024"
When I click on Next button "#submit"
Then I expect that the url contains "/calculation?value"
Then I expect that element "h1" contains the text "Calculation complete"


Scenario: 003-Calculate BPS  partial multiple payment for a farmer
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/input-type"
When I click on option button "#inputType-2"  
When I click on Next button "#submit"
Then I expect that the url contains "/value"
When I add "500" to the inputfield "#value2021"
When I add "1000" to the inputfield "#value2022"
When I click on Next button "#submit"
Then I expect that the url contains "/calculation?value"
Then I expect that element "h1" contains the text "Calculation complete"

Scenario: 004-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "Agricultural Transition Plan 2021 to 2024"
Then I expect that the url contains "/government/"
Then I expect that element "h1" contains the text "Agricultural transition plan 2021 to 2024"

Scenario: 005-User can click on Farming is changing link
Given I open the url "/"
When I click on the link "Farming is changing"
Then I expect that the url contains "/939683/farming-changing.pdf"
#Then I expect that element "h1" contains the text "Farming is changing"


Scenario: 007-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "Open Government Licence v3.0"
Then I expect that the url contains "/open-government-licence/version/3/"
#Then I expect that element "h1" contains the text ""

Scenario: 008-User can click on Agricultural transition link
Given I open the url "/"
When I click on the link "© Crown copyright"
Then I expect that the url contains "/uk-government-licensing-framework/crown-copyright"
Then I expect that element "h1" contains the text "Crown copyright"

Scenario: 009-Calculate BPS single payment for a farmer
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
And I click on option button "#inputType"  
And I click on Next button "#submit"
And I add "500" to the inputfield "#value"
And I click on Next button "#submit"   
And I click on the backlink
#And I click on the link ".govuk-back-link"
Then I expect that the url contains "/cookies"
And I click on the backlink 
Then I expect that the url contains "/cookies"
And I click on the backlink 
Then I expect that the url contains "/cookies"










