Feature: FFC-PR-CALCULATOR

Scenario: 001-Calculate BPS payment value for a farmer
Given I am on the Progressive Reductions Calculator home page 
When I click on start new calculator button
When I enter BPS payment value "500"
When I click calculate my payment
Then I should see "Your progressive reductions have been estimated"

