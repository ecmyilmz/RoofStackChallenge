package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import models.Users;
import utilities.APIConstant;
import utilities.RestAssuredExtension;

import java.util.HashMap;
import java.util.List;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class CREATEUsers {
    private static ResponseOptions<Response> response;

    @Given("^I Perform POST operation for \"([^\"]*)\" adding new user with body$")
    public void iPerformPOSTOperationForAddingNewUserWithBody(String url, DataTable table) throws Throwable {
        List<List<String>> data = table.raw();

        //Set body
        HashMap<String, String> body = new HashMap<>();
        body.put(data.get(0).get(0), data.get(1).get(0));
        body.put(data.get(0).get(1), data.get(1).get(1));
        body.put(data.get(0).get(2), data.get(1).get(2));

        RestAssuredExtension restAssuredExtension = new RestAssuredExtension(url, APIConstant.ApiMethods.POST);
        response = restAssuredExtension.ExecuteWithBody(body);
    }


    @Then("^I should see the body has id as \"([^\"]*)\"$")
    public void iShouldSeeTheBodyHasIdAs(String id) throws Throwable {
         Users user = response.getBody().as(Users.class);
         assertThat(response.getBody().jsonPath().get("userId"), equalTo(id));
    }

}
