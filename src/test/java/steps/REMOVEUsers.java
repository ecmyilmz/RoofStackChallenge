package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import models.Users;
import utilities.APIConstant;
import utilities.RestAssuredExtension;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class REMOVEUsers {
    private static ResponseOptions<Response> response;

    @Given("^I Perform DELETE operation for \"([^\"]*)\" and i want delete \"([^\"]*)\" userId$")
    public void iPerformDELETEOperationForAndIWantDeleteUserId(String url, String userId) throws Throwable {
        //Perform delete operation
        RestAssuredExtension restAssuredExtension = new RestAssuredExtension(url+"/"+userId, APIConstant.ApiMethods.DELETE);
        response = restAssuredExtension.Execute();
    }

    @Then("^I should see the response body should be an empty$")
    public void iShouldSeeTheResponseBodyShouldBeAnEmpty() {
        Users user = response.getBody().as(Users.class);
        assertThat(user.getId(), equalTo(null));
    }
}
