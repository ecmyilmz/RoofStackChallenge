Feature: UpdateUsers

  Scenario Outline: Verify that the update operation with valid user credentials successfully
    Given My path is "/users"
    Given I created a user whose firstname is "jane" and  lastname is "doe"
     When I send PUT method with "<firstname>" and "<lastname>" update "<userID>"
     Then I should see the body has id as not empty
     Then I should see status code "<statusCode>"
    Examples:
      |userID                                     | firstname                                          | lastname                                           | statusCode |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | ja                                                 | doe                                                | 200        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | janejanejanejanejanejanejanejanejanejanejanejaneja | doe                                                | 200        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                               | do                                                 | 200        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                               | doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo | 200        |

  Scenario Outline: Verify that the update operation with invalid user credentials unsuccessfully
    Given My path is "/users"
    Given I created a user whose firstname is "jane" and  lastname is "doe"
     When I send PUT method with "<firstname>" and "<lastname>" update "<userID>"
     Then I should see the body has id as not empty
     Then I should see status code "<statusCode>"
    Examples:
      |userID                                     | firstname                                           | lastname                                            | statusCode |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       |                                                     | doe                                                 | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | j                                                   | doe                                                 | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | 123                                                 | doe                                                 | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane?                                               | doe                                                 | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | janejanejanejanejanejanejanejanejanejanejanejanejan | doe                                                 | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                                |                                                     | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                                | d                                                   | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                                | 123                                                 | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                                | d                                                   | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                                | doe?                                                | 400        |
      |c4f6c088-f91b-494e-b7f0-a08f48df3180       | jane                                                | doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe | 400        |