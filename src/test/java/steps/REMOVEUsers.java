package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import models.Users;
import utilities.APIConstant;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class REMOVEUsers {
    public BaseStepDefs baseStepDefs;

    public REMOVEUsers() {
    }
    public REMOVEUsers(BaseStepDefs baseStepDefs) {
        this.baseStepDefs = baseStepDefs;
    }

    @Given("^I created a user$")
    public void iCreatedAUser() {
        // Normally we need to generate a new user before DELETE request, but we don't need any action within current API
    }

    @When("^I send REMOVE method with \"([^\"]*)\" userID$")
    public void iSendREMOVEMethodWithUserID(String userId) throws Throwable {
        baseStepDefs.globRestAssuredExtension.setMethod(APIConstant.ApiMethods.DELETE);
        baseStepDefs.response = baseStepDefs.globRestAssuredExtension.setParamsAndExecute(userId);
    }

    @Then("^I should see the response body should be an empty$")
    public void iShouldSeeTheResponseBodyShouldBeAnEmpty() {
        Users user = baseStepDefs.response.getBody().as(Users.class);
        assertThat(user.getId(), equalTo(null));
    }
}
