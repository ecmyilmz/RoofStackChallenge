Feature: PostUsers
  Test POST operation using REST-assured library

  Scenario Outline: Verify success scenarios with creating users with valid credentials
    Given My path is "/users/"
    Given I request create with "<firstName>", "<lastName>", "<userName>", "<password>"
    When I send POST method
    Then I should see the body has id as not empty
    Then I should see status code "<statusCode>"

    Examples:
      | firstName                                          | lastName                                           | userName     | password  | statusCode |
      | ja                                                 | doe                                                | doejj        | 123456Aa* | 200        |
      | janejanejanejanejanejanejanejanejanejanejanejaneja | doe                                                | doejj        | 123456Aa* | 200        |
      | jane                                               | do                                                 | doejj        | 123456Aa* | 200        |
      | jane                                               | doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo | doejj        | 123456Aa* | 200        |
      | jane                                               | doe                                                | doej         | 123456Aa* | 200        |
      | jane                                               | doe                                                | doejjdoejjdo | 123456Aa* | 200        |
      | jane                                               | doe                                                | doejj12      | 123456Aa* | 200        |
      | jane                                               | doe                                                | doejj?       | 123456Aa* | 200        |
      | jane                                               | doe                                                | 12345        | 123456Aa* | 200        |

  Scenario Outline: Verify non-success scenarios when creating a user with an invalid firstname
    Given My path is "/users/"
    Given I request create with "<firstName>", "<lastName>", "<userName>", "<password>"
    When I send POST method
    Then I should see the body has id as not empty
    Then I should see status code "<statusCode>"

    Examples:
      | firstName                                            | lastName | userName | password  | statusCode |
      |                                                      | doe      | doejj    | 123456Aa* | 400        |
      |  j                                                   | doe      | doejj    | 123456Aa* | 400        |
      |  123                                                 | doe      | doejj    | 123456Aa* | 400        |
      |  jane?                                               | doe      | doejj    | 123456Aa* | 400        |
      |  janejanejanejanejanejanejanejanejanejanejanejanejan | doe      | doejj    | 123456Aa* | 400        |

  Scenario Outline: Verify non-success scenarios when creating a user with an invalid lastname
    Given My path is "/users/"
    Given I request create with "<firstName>", "<lastName>", "<userName>", "<password>"
    When I send POST method
    Then I should see the body has id as not empty
    Then I should see status code "<statusCode>"
    Examples:
      | firstName | lastName                                            | userName     | password  | statusCode |
      | jane      |                                                     | doejj        | 123456Aa* | 400        |
      | jane      | d                                                   | doejj        | 123456Aa* | 400        |
      | jane      | 123                                                 | doejj        | 123456Aa* | 400        |
      | jane      | d                                                   | doejj        | 123456Aa* | 400        |
      | jane      | doe?                                                | doejj        | 123456Aa* | 400        |
      | jane      | doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe | doejj        | 123456Aa* | 400        |

  Scenario Outline: Verify non-success scenarios when creating a user with an invalid username
    Given My path is "/users/"
    Given I request create with "<firstName>", "<lastName>", "<userName>", "<password>"
    When I send POST method
    Then I should see the body has id as not empty
    Then I should see status code "<statusCode>"
    Examples:
      | firstName | lastName | userName      | password  | statusCode |
      | jane      | doe      |               | 123456Aa* | 400        |
      | jane      | doe      | doe           | 123456Aa* | 400        |
      | jane      | doe      | doejjdoejjdoe | 123456Aa* | 400        |
