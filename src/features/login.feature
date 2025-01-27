@bookstore-login
Feature: User Authentication for Bookstore

    @valid-signin
     Scenario: Verify login with valid credentials
        When I sign in with the credentials "hackerpandaa@gmail.com" "horse10"
        Then I should be signed in

    @invalid-signin-password
      Scenario: Deny login with invalid password
        When I sign in with the credentials "hackerpandaa@gmail.com" "invalidPassword"
        But I should not be signed in

    @invalid-email
      Scenario: Deny login with invalid email address
        When I sign in with the credentials "fakeemail@email.com" "horse10"
        But I should not be signed in