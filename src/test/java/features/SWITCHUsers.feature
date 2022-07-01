Feature: PatchUsers

  Scenario Outline: Verify that patch operation successfully
    Given My path is "/users"
    When I send Patch method with "<userID>" userID , "<isActive>" active body
    Then I should see status code "<statusCode>"
    Examples:
    |userID                                     | isActive | statusCode |
    |c4f6c088-f91b-494e-b7f0-a08f48df3180       |true      |200         |
    |c4f6c088-f91b-494e-b7f0-a08f48df3180       |false     |200         |

  Scenario Outline: Verify that patch operation with invalid active body unsuccessfully
    Given My path is "/users"
    When I send Patch method with "<userID>" userID , "<isActive>" active body
    Then I should see status code "<statusCode>"
    Examples:
      |userID                                | isActive | statusCode |
      | c4f6c088-f91b-494e-b7f0-a08f48df3180 |          | 400        |
      | c4f6c088-f91b-494e-b7f0-a08f48df3180 | invalid  | 400        |
