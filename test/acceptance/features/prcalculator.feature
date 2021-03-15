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

Scenario: 004-Calculate BPS  partial multiple payment for a farmer
Given I open the url "/"






