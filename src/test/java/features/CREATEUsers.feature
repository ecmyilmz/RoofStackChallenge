Feature: PostUsers
  Test POST operation using REST-assured library

  @smoke
  Scenario: Verify Post operation for Users
    Given I Perform POST operation for "/users/" adding new user with body
      | firstName | lastName | username |
      | Ecem      | Yilmaz   | ECMYLM   |
    Then I should see the body has id as "c4f6c088-f91b-494e-b7f0-a08f48df3180"