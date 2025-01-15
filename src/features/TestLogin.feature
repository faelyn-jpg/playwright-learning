@test-login
Feature: Test Login

    @valid-login
    Scenario: Verify login with valid credentials
        When I log in to the test page with the credentials "practice" "SuperSecretPassword!"
        Then I should be logged in