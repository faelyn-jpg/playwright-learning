@test-table
Feature: Test Dynamic Table

    @check-CPU
    Scenario: Check value of Chrome CPU in table equals yellow label
        When I check value of "Chrome" process CPU load 
        Then It should equal value of "Chrome" CPU in yellow label