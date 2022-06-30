Feature: GETUsers
  Verify different GET operations using REST-assured

  Scenario: Verify that status code with user list request
    Given My path is "/users/"
     Then I should see status code "200"


  Scenario Outline: Verify the user credentials field with user list request
    Given My path is "/users/"
    Then I should see "<firstName>", "<lastName>", "<userName>" credendials
    Then I should see the body has id as not empty
    Examples:
      |firstName |lastName |userName |
      | jane     | doe     | doejj   |

  Scenario Outline: Verify that status code with user by id
    Given My path is "/users/"
    When I send GET method with "<userByID>" user by ID
    Then I should see status code "<statusCode>"
    Examples:
      | userByID                            | statusCode |
      | c4f6c088-f91b-494e-b7f0-a08f48df3180| 200        |

  Scenario Outline: Verify the user credentials field with user by id
    Given My path is "/users/"
    When I send GET method with "<userByID>" user by ID
    Then I should see "<firstName>", "<lastName>", "<userName>" credendials
    Then I should see the body has id as not empty
    Examples:
      |userByID                             |firstName |lastName |userName |
      | c4f6c088-f91b-494e-b7f0-a08f48df3180| jane     | doe     | doejj   |