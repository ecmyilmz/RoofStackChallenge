Feature: UpdateUsers

  Scenario Outline: Verify that the update operation with valid user credentials successfully
    Given My path is "/users/"
    Given I created a user whose firstname is "jane" and  lastname is "doe"
     When I send PUT method with "<firstname>" and "<lastname>" update
     Then I should see the body has id as not empty
     Then I should see status code "<statusCode>"
    Examples:
    | firstname                                          | lastname                                           | statusCode |
    | ja                                                 | doe                                                | 200        |
    | janejanejanejanejanejanejanejanejanejanejanejaneja | doe                                                | 200        |
    | jane                                               | do                                                 | 200        |
    | jane                                               | doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo | 200        |

  Scenario Outline: Verify that the update operation with invalid user credentials unsuccessfully
    Given My path is "/users/"
    Given I created a user whose firstname is "jane" and  lastname is "doe"
     When I send PUT method with "<firstname>" and "<lastname>" update
     Then I should see the body has id as not empty
     Then I should see status code "<statusCode>"
    Examples:
      | firstname                                           | lastname                                            | statusCode |
      |                                                     | doe                                                 | 400        |
      | j                                                   | doe                                                 | 400        |
      | 123                                                 | doe                                                 | 400        |
      | jane?                                               | doe                                                 | 400        |
      | janejanejanejanejanejanejanejanejanejanejanejanejan | doe                                                 | 400        |
      | jane                                                |                                                     | 400        |
      | jane                                                | d                                                   | 400        |
      | jane                                                | 123                                                 | 400        |
      | jane                                                | d                                                   | 400        |
      | jane                                                | doe?                                                | 400        |
      | jane                                                | doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe | 400        |