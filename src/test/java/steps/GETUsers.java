package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import models.Users;
import utilities.APIConstant;
import utilities.RestAssuredExtension;

import java.util.Arrays;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.MatcherAssert.assertThat;

public class GETUsers {
    public BaseStepDefs baseStepDefs;

    public GETUsers() {

    }

    public GETUsers(BaseStepDefs baseStepDefs) {
        this.baseStepDefs = baseStepDefs;
    }


    @Then("^I should see the username as \"([^\"]*)\"$")
    public void iShouldSeeTheUsernameAs(String username) throws Throwable {
        Users[] users = baseStepDefs.response.getBody().as(Users[].class);
        assertThat(Arrays.stream(users).findFirst().get().getUsername(), equalTo(username));

    }

    @Then("^I should see the user id as \"([^\"]*)\"$")
    public void iShouldSeeTheUserIdAs(String id) throws Throwable {
        Users[] users = baseStepDefs.response.getBody().as(Users[].class);
        assertThat(Arrays.stream(users).findFirst().get().getId(), equalTo(id));
    }


    @Then("^I should see \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" credentials$")
    public void iShouldSeeCredentials(String firstName, String lastName, String userName) throws Throwable {
        Users[] users = baseStepDefs.response.getBody().as(Users[].class);
        assertThat(Arrays.stream(users).findFirst().get().getFirstName(),equalTo(firstName));
        assertThat(Arrays.stream(users).findFirst().get().getLastName(),equalTo(lastName));
        assertThat(Arrays.stream(users).findFirst().get().getUsername(),equalTo(userName));
    }

    @When("^I send GET method with \"([^\"]*)\" user by ID$")
    public void iSendGETMethodWithUserByID(String userId) throws Throwable {
        baseStepDefs.globRestAssuredExtension.setMethod(APIConstant.ApiMethods.GET);
        baseStepDefs.response = baseStepDefs.globRestAssuredExtension.setParamsAndExecute(userId);
    }

    @Then("^I should see single record with \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" credentials$")
    public void iShouldSeeSingleRecordWithCredentials(String firstName, String lastName, String userName) throws Throwable {
        Users user = baseStepDefs.response.getBody().as(Users.class);
        assertThat(user.getFirstName(),equalTo(firstName));
        assertThat(user.getLastName(),equalTo(lastName));
        assertThat(user.getUsername(),equalTo(userName));
    }
}
