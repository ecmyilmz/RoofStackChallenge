package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
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
    public GETUsers() {

    }
    private static ResponseOptions<Response> response;

    @Given("^I perform GET operation for \"([^\"]*)\"$")
    public void iPerformGETOperationFor(String url) throws Throwable {
        RestAssuredExtension restAssuredExtension = new RestAssuredExtension(url, APIConstant.ApiMethods.GET);
        response = restAssuredExtension.Execute();
    }

    @Then("^I should see the username as \"([^\"]*)\"$")
    public void iShouldSeeTheUsernameAs(String username) throws Throwable {
        Users[] users = response.getBody().as(Users[].class);
        assertThat(Arrays.stream(users).findFirst().get().getUsername(), equalTo(username));

    }

    @Then("^I should see the user id as \"([^\"]*)\"$")
    public void iShouldSeeTheUserIdAs(String id) throws Throwable {
        Users[] users = response.getBody().as(Users[].class);
        assertThat(Arrays.stream(users).findFirst().get().getId(), equalTo(id));
    }


    @Then("^the status code should be \"([^\"]*)\"$")
    public void theStatusCodeShouldBe(String stsCode) throws Throwable {
        String statusCode = String.valueOf(response.getStatusCode());
        assertThat(statusCode,equalTo(stsCode));

    }
}
