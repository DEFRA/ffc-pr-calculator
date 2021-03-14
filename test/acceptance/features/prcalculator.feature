Feature: FFC-PR-CALCULATOR
        
Scenario: 001-Calculate BPS payment value for a farmer
Given I open the url "/"
When I click on start new calculator button ".govuk-button--start"
When I click on No option button "#bpsSelection-2" 
When I click on Next button "button.govuk-button"  
When I enter BPS payment value "500"
When I click calculate my payment
Then I should see "Your progressive reductions have been estimated"