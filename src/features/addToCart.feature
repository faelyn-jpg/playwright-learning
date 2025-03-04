@add-to-cart
Feature: Adding Book to cart

    @auth
    Scenario: Authenticated user - Book is added to cart
    When I add a book to my cart
    Then The cart should have a book in it