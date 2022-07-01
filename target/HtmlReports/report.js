$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/CREATEUsers.feature");
formatter.feature({
  "name": "PostUsers",
  "description": "  Test POST operation using REST-assured library",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I request create with \"\u003cfirstName\u003e\", \"\u003clastName\u003e\", \"\u003cuserName\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "userName",
        "password",
        "statusCode"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doejj",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "ja",
        "doe",
        "doejj",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "janejanejanejanejanejanejanejanejanejanejanejaneja",
        "doe",
        "doejj",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "jane",
        "do",
        "doejj",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "jane",
        "doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo",
        "doejj",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doej",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doejjdoejjdo",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doejj12",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doejj?",
        "123456Aa*",
        "200"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "12345",
        "123456Aa*",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"ja\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"janejanejanejanejanejanejanejanejanejanejanejaneja\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"do\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"doej\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"doejjdoejjdo\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"doejj12\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"doejj?\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify success scenarios with creating users with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"12345\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I request create with \"\u003cfirstName\u003e\", \"\u003clastName\u003e\", \"\u003cuserName\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "userName",
        "password",
        "statusCode"
      ]
    },
    {
      "cells": [
        "",
        "doe",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "j",
        "doe",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "123",
        "doe",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane?",
        "doe",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "janejanejanejanejanejanejanejanejanejanejanejanejan",
        "doe",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "d",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "123",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "d",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "doe?",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe",
        "doejj",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doe",
        "123456Aa*",
        "400"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doejjdoejjdoe",
        "123456Aa*",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"j\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"123\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane?\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"janejanejanejanejanejanejanejanejanejanejanejanejan\", \"doe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"d\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"123\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"d\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe?\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe\", \"doejj\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"doe\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify non-success scenarios when creating a user with an invalid user credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request create with \"jane\", \"doe\", \"doejjdoejjdoe\", \"123456Aa*\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CREATEUsers.iRequestCreateWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendPOSTMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/CREATEUsers.feature:29)\n",
  "status": "failed"
});
formatter.uri("file:src/test/java/features/GETUsers.feature");
formatter.feature({
  "name": "GETUsers",
  "description": "  Verify different GET operations using REST-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that status code with user list request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendGETMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the user credentials field with user list request",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send GET method",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \"\u003cfirstName\u003e\", \"\u003clastName\u003e\", \"\u003cuserName\u003e\" credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "userName"
      ]
    },
    {
      "cells": [
        "jane",
        "doe",
        "doejj"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the user credentials field with user list request",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET method",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BaseStepDefs.iSendGETMethod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"jane\", \"doe\", \"doejj\" credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.GETUsers.iShouldSeeCredentials(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that status code with user by id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send GET method with \"\u003cuserByID\u003e\" user by ID",
  "keyword": "When "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userByID",
        "statusCode"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that status code with user by id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET method with \"c4f6c088-f91b-494e-b7f0-a08f48df3180\" user by ID",
  "keyword": "When "
});
formatter.match({
  "location": "steps.GETUsers.iSendGETMethodWithUserByID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the user credentials field with user by id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send GET method with \"\u003cuserByID\u003e\" user by ID",
  "keyword": "When "
});
formatter.step({
  "name": "I should see single record with \"\u003cfirstName\u003e\", \"\u003clastName\u003e\", \"\u003cuserName\u003e\" credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userByID",
        "firstName",
        "lastName",
        "userName"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "doe",
        "doejj"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the user credentials field with user by id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET method with \"c4f6c088-f91b-494e-b7f0-a08f48df3180\" user by ID",
  "keyword": "When "
});
formatter.match({
  "location": "steps.GETUsers.iSendGETMethodWithUserByID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see single record with \"jane\", \"doe\", \"doejj\" credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.GETUsers.iShouldSeeSingleRecordWithCredentials(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/REMOVEUsers.feature");
formatter.feature({
  "name": "DeleteUsers",
  "description": "  Test the delete operation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that delete operation successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I created a user",
  "keyword": "Given "
});
formatter.step({
  "name": "I send REMOVE method with \"\u003cuserId\u003e\" userID",
  "keyword": "When "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that delete operation successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.REMOVEUsers.iCreatedAUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send REMOVE method with \"c4f6c088-f91b-494e-b7f0-a08f48df3180\" userID",
  "keyword": "When "
});
formatter.match({
  "location": "steps.REMOVEUsers.iSendREMOVEMethodWithUserID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that delete operation with invalid userID unsuccessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I created a user",
  "keyword": "Given "
});
formatter.step({
  "name": "I send REMOVE method with \"\u003cuserId\u003e\" userID",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the response body should be an empty",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "invaliduserID-494e-b7f0-a08f48df3180",
        "403"
      ]
    },
    {
      "cells": [
        "",
        "403"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that delete operation with invalid userID unsuccessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.REMOVEUsers.iCreatedAUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send REMOVE method with \"invaliduserID-494e-b7f0-a08f48df3180\" userID",
  "keyword": "When "
});
formatter.match({
  "location": "steps.REMOVEUsers.iSendREMOVEMethodWithUserID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the response body should be an empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.REMOVEUsers.iShouldSeeTheResponseBodyShouldBeAnEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"403\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"403\"\n     but: was \"404\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"403\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/REMOVEUsers.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that delete operation with invalid userID unsuccessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.REMOVEUsers.iCreatedAUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send REMOVE method with \"\" userID",
  "keyword": "When "
});
formatter.match({
  "location": "steps.REMOVEUsers.iSendREMOVEMethodWithUserID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the response body should be an empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.REMOVEUsers.iShouldSeeTheResponseBodyShouldBeAnEmpty()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat steps.REMOVEUsers.iShouldSeeTheResponseBodyShouldBeAnEmpty(REMOVEUsers.java:35)\n\tat ✽.I should see the response body should be an empty(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/REMOVEUsers.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see status code \"403\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/features/SWITCHUsers.feature");
formatter.feature({
  "name": "PatchUsers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that patch operation successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send Patch method with \"\u003cuserID\u003e\" userID , \"\u003cisActive\u003e\" active body",
  "keyword": "When "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userID",
        "isActive",
        "statusCode"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "true",
        "200"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "false",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that patch operation successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send Patch method with \"c4f6c088-f91b-494e-b7f0-a08f48df3180\" userID , \"true\" active body",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SWITHUsers.iSendPatchMethodWithUserIDActiveBody(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that patch operation successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send Patch method with \"c4f6c088-f91b-494e-b7f0-a08f48df3180\" userID , \"false\" active body",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SWITHUsers.iSendPatchMethodWithUserIDActiveBody(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that patch operation with invalid active body unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send Patch method with \"\u003cuserID\u003e\" userID , \"\u003cisActive\u003e\" active body",
  "keyword": "When "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userID",
        "isActive",
        "statusCode"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "invalid",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that patch operation with invalid active body unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send Patch method with \"c4f6c088-f91b-494e-b7f0-a08f48df3180\" userID , \"\" active body",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SWITHUsers.iSendPatchMethodWithUserIDActiveBody(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/SWITCHUsers.feature:15)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that patch operation with invalid active body unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send Patch method with \"c4f6c088-f91b-494e-b7f0-a08f48df3180\" userID , \"invalid\" active body",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SWITHUsers.iSendPatchMethodWithUserIDActiveBody(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/SWITCHUsers.feature:15)\n",
  "status": "failed"
});
formatter.uri("file:src/test/java/features/UPDATEUsers.feature");
formatter.feature({
  "name": "UpdateUsers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that the update operation with valid user credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send PUT method with \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" update \"\u003cuserID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userID",
        "firstname",
        "lastname",
        "statusCode"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "ja",
        "doe",
        "200"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "janejanejanejanejanejanejanejanejanejanejanejaneja",
        "doe",
        "200"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "do",
        "200"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that the update operation with valid user credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"ja\" and \"doe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that the update operation with valid user credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"janejanejanejanejanejanejanejanejanejanejanejaneja\" and \"doe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that the update operation with valid user credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"do\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that the update operation with valid user credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I send PUT method with \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" update \"\u003cuserID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userID",
        "firstname",
        "lastname",
        "statusCode"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "",
        "doe",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "j",
        "doe",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "123",
        "doe",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane?",
        "doe",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "janejanejanejanejanejanejanejanejanejanejanejanejan",
        "doe",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "d",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "123",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "d",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "doe?",
        "400"
      ]
    },
    {
      "cells": [
        "c4f6c088-f91b-494e-b7f0-a08f48df3180",
        "jane",
        "doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"\" and \"doe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"j\" and \"doe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"123\" and \"doe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane?\" and \"doe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"janejanejanejanejanejanejanejanejanejanejanejanejan\" and \"doe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"d\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"123\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"d\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"doe?\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the update operation with invalid user credentials unsuccessfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "My path is \"/users\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BaseStepDefs.myPathIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I created a user whose firstname is \"jane\" and  lastname is \"doe\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.UPDATEUsers.iCreatedAUserWhoseFirstnameIsAndLastnameIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send PUT method with \"jane\" and \"doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe\" update \"c4f6c088-f91b-494e-b7f0-a08f48df3180\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.UPDATEUsers.iSendPUTMethodWithAndUpdate(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the body has id as not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CREATEUsers.iShouldSeeTheBodyHasIdAsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BaseStepDefs.iShouldSeeStatusCode(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: \"400\"\n     but: was \"200\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat steps.BaseStepDefs.iShouldSeeStatusCode(BaseStepDefs.java:28)\n\tat ✽.I should see status code \"400\"(file:///Users/ecemyilmaz/Desktop/RestAssured_/src/test/java/features/UPDATEUsers.feature:21)\n",
  "status": "failed"
});
});