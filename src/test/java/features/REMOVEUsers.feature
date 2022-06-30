Feature: DeleteUsers
  Test the delete operation

  Scenario: Verify DELETE operation
    Given I Perform DELETE operation for "/users/" and i want delete "c4f6c088-f91b-494e-b7f0-a08f48df3180" userId
    Then I should see the response body should be an empty
# bu silinecek case

  Scenario Outline: Verify that delete operation successfully
    Given My path is "/users/"
    Given I created a user
     When I send REMOVE method with "<userId>" userID
     Then I should see the response body should be an empty
     Then I should see status code "<statusCode>"
    Examples:
      | userId                               | statusCode |
      | c4f6c088-f91b-494e-b7f0-a08f48df3180 | 200        |

  Scenario Outline: Verify that delete operation with invalid userID unsuccessful
    Given My path is "/users/"
    Given I created a user
    When I send REMOVE method with "<userId>" userID
    Then I should see the response body should be an empty
    Then I should see status code "<statusCode>"
    Examples:
      | userId                               | statusCode |
      | invaliduserID-494e-b7f0-a08f48df3180 | 403        |
      |                                      | 403        |

