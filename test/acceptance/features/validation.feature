Feature: FFC-PR-CALCULATOR2

Scenario: 001-Validate input value must be numeric for BPS payment
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add "aaaa" to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/value"
Then I expect that element "#value-error" contains the text "The value must be a number without commas."

Scenario: 002-Validate input value must greater than Zero for BPS payment
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

Scenario: 003-Validate blank value thrown error
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add " " to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/value"
Then I expect that element "#value-error" contains the text "The value must be a number without commas."

Scenario: 004-Validate input value must not greater than £1,000,000,000 for BPS payment
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add "1000000009" to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/value"
Then I expect that element "#value-error" contains the text "The value needs to be less than £1,000,000,000."

Scenario: 005-Validate input value must not equal to £1,000,000,000 for BPS payment
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
Then I expect that the url contains "/value"
When I add "1000000000" to the inputfield "#value"
And I click on Next button "#submit" 
Then I expect that the url contains "/value"
Then I expect that element "#value-error" contains the text "The value needs to be less than £1,000,000,000."


    
  
