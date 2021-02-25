Feature: FFC-PR-CALCULATOR

Background:
Given that I am on the Progressive Reductions Calculator home page

Scenario: 001-Calculate BPS payment value for a farmer
When I click on start new calculator button
When I enter BPS payment value "500"
When I click calculate my payment
Then I should see "Your progressive reductions have been estimated"

Scenario Outline: 002-Calculate BPS payment value for multiple farmers
When I click on start new calculation button
When I enter BPS payment <value>
When I click calculate my payment
Then I should see <Message>
Examples:
| value    |  message                                        |
| 100      | Your progressive reductions have been estimated |
| 500.56   | Your progressive reductions have been estimated |                      
| 1000     | Your progressive reductions have been estimated |

Scenario: 003-Verify farmer cannot received BPS with value lesser or equal to zero
When I click on start new calculation button
When I enter BPS payment <0> 
When I click calculate my payment
Then I should see "Your BPS 2020 value must be greater than zero"

Scenario Outline: 004-Verify farmer cannot received BPS with invalid value 
When I click on start new calculation button
When I enter BPS payment <invalidvalue> that lesser or equal zero
When I click calculate my payment
Then I should see <ErrorMessage>
Examples:
|invalidvalue |Error Message                                     |
|    -1500    |  Your BPS 2020 value must be greater than zero   |
|    -14      |   Your BPS 2020 value must be greater than zero  |  

Scenario: 005-Verify user can return to home page from calculation?bpsValue page
When I click on start new calculation button
When I enter BPS payment value <500>  
When I click calculate my payment
When I click home link on bps value page
Then I should successfully return to homepage

Scenario: 006-Verify user can return to home page from bps page
When I click on start new calculation button
When I click home link on bps page
Then I should successfully return to homepage
                                              
Scenario Outline: 007-Verify user can click on all links
When I click on start new calculation button
When I enter BPS payment value <500>  
When I click calculate my payment
When I click on all the <links> on bps value page
Then I should returned to <expectedpage>
Examples:
| val      |  expectedpage                                         |
| home     | Calculate my progressive reductions                   |
| Licence  | Open Government License for public sector information |                      
| Service  | Your progressive reductions have been estimated       |
