Feature: FFC-PR-CALCULATOR

Scenario: 001-Calculate BPS payment value for a farmer
Given I am on the Progressive Reductions Calculator home page 
When I click on start new calculator button
When I enter BPS payment value "500"
When I click calculate my payment
Then I should see "Your progressive reductions have been estimated"

Scenario Outline: 002-Verify farmer cannot received BPS with invalid value lesser or equal to zero or rounded number
Given I am on the Progressive Reductions Calculator home page
When I click on start new calculator button
When I enter BPS payment value <invalidvalue> 
When I click calculate my payment
Then I see the <errormessage> 
Examples:
| invalidvalue      |  errormessage                                               |
|   0               | Your BPS 2020 value must be greater than zero               | 
|  -10              | Your BPS 2020 value must be greater than zero               | 
                 
Scenario: 003-Verify user can return to home page from bpsValue page
Given I am on the Progressive Reductions Calculator home page
When I click on start new calculator button
When I enter BPS payment value <500>  
When I click calculate my payment
When I click home link on bps value page
Then I should successfully return to homepage and <Useful links> is displayed

Scenario: 004-Verify user can return to home page from bps page
Given I am on the Progressive Reductions Calculator home page
When I click on start new calculator button
When I click home link on bps page
Then I should successfully return to homepage and <Useful links> is displayed

Scenario: 005-Verify user can click on all links
Given I am on the Progressive Reductions Calculator home page
When I click on start new calculator button
When I enter BPS payment value <500>  
When I click calculate my payment
When I click home link on bps value page
Then I should return to <expectedpageheader>

Scenario: 006-Verify user can click on all links
Given I am on the Progressive Reductions Calculator home page
When I click on start new calculator button
When I enter BPS payment value <500>  
When I click calculate my payment
When I click service link on bps value page
Then I should return to <expectedpageheader>

Scenario Outline: 007-Verify user can click on all links
When I click on start new calculator button
When I enter BPS payment value <500>  
When I click calculate my payment
When I click on all the <links> on bps value page
Then I should return to <expectedpageheader>
Examples:
| links          |  expectedpageheader                                   |
| home           | Useful links                                          |
| licence        | Open Government License for public sector information |  
| service        | Your progressive reductions have been estimated       |








