Feature: DeleteUsers
  Test the delete operation

  @smoke
  Scenario: Verify DELETE operation
    Given I Perform DELETE operation for "/users/" and i want delete "c4f6c088-f91b-494e-b7f0-a08f48df3180" userId
    Then I should see the response body should be an empty