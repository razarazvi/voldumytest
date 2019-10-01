Feature: Product Management

    Rules:
    1. You must be able to add a Product

    Background: Ensure product isn't in the system
        Given a product doesnt exist
        | name    | Description       | price |
        | carrots | orange vegetables | 10    |

    Scenario: A product is added
        When I add the product
        Then the product is created
