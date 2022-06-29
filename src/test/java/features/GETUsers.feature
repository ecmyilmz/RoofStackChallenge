Feature: GETUsers
  Verify different GET operations using REST-assured

  Scenario: Verify one username of the users
    Given I perform GET operation for "/users"
    Then I should see the username as "doejj"

  Scenario: Verify one user id of the users
    Given I perform GET operation for "/users"
    Then I should see the user id as "c4f6c088-f91b-494e-b7f0-a08f48df3180"

  Scenario: Status code  check of user list request
    When I perform GET operation for "/users"
    Then the status code should be "200"