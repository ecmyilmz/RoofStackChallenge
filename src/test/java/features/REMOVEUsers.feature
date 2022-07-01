Feature: DeleteUsers
  Test the delete operation

  Scenario Outline: Verify that delete operation with valid UserID successfully
    Given My path is "/users"
    Given I created a user
     When I send REMOVE method with "<userId>" userID
     Then I should see status code "<statusCode>"
    Examples:
      | userId                               | statusCode |
      | c4f6c088-f91b-494e-b7f0-a08f48df3180 | 200        |

  Scenario Outline: Verify that delete operation with invalid userID unsuccessfully
    Given My path is "/users"
    Given I created a user
    When I send REMOVE method with "<userId>" userID
    Then I should see status code "<statusCode>"
    Examples:
      | userId                               | statusCode |
      | invaliduserID-494e-b7f0-a08f48df3180 | 403        |
      |                                      | 403        |

