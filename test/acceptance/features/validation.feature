Feature: FFC-PR-CALCULATOR2

#Scenario: 001-Calculate BPS multiple payment for a farmer
#Given I open the url "/"
#When I click on start new calculator button ".govuk-button--start"
#Then I expect that the url contains "/input-type"
#And I click on option button "#inputType-2"  
#When I click on Next button "#submit"
#Then I expect that the url contains "/value"
#When I add "aaa" to the inputfield "#value2021"
#When I click on Next button "#submit"
#Then I expect that the url contains "/value"
#Then I expect that element "#value2021-error" contains the text "The value for 2021 must be a number"

Scenario: 002-Validate input value must be numeric for BPS payment
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add "aaaa" to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/value"
Then I expect that element "#value-error" contains the text "The value must be between £0 and £1,000,000,000."

Scenario: 003-Validate input value must greater than Zero for BPS payment
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add "0" to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/value"
Then I expect that element "#value-error" contains the text "The value needs to be greater than £0."

Scenario: 003-Validate input value must greater than Zero for BPS payment
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add "-45" to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/value"
Then I expect that element "#value-error" contains the text "The value needs to be greater than £0."

