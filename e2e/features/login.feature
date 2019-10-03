Feature: Login

Background: a user logs in
Given a user logs in with username 'test@1.8.4' and password 'NFsUj4b9XkYN'

@runThis
Scenario: a customer is selected
When we select a customer called 'BRIAN FISHER'
Then we see what vehicles they own