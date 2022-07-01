package steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import models.Users;
import utilities.APIConstant;
import utilities.RestAssuredExtension;

import java.util.HashMap;
import java.util.List;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class CREATEUsers {
   public BaseStepDefs baseStepDefs;

   public CREATEUsers() {}

    public CREATEUsers(BaseStepDefs baseStepDefs) {
        this.baseStepDefs = baseStepDefs;
    }

    @Given("^I Perform POST operation for \"([^\"]*)\" adding new user with body$")
    public void iPerformPOSTOperationForAddingNewUserWithBody(String url, DataTable table) throws Throwable {
        List<List<String>> data = table.raw();
        //Set body
        HashMap<String, String> body = new HashMap<>();
        body.put(data.get(0).get(0), data.get(1).get(0));
        body.put(data.get(0).get(1), data.get(1).get(1));
        body.put(data.get(0).get(2), data.get(1).get(2));
        RestAssuredExtension restAssuredExtension = new RestAssuredExtension(url, APIConstant.ApiMethods.POST);
        baseStepDefs.response = restAssuredExtension.ExecuteWithBody(body);
    }


    @Then("^I should see the body has id as \"([^\"]*)\"$")
    public void iShouldSeeTheBodyHasIdAs(String id) throws Throwable {
         Users user = baseStepDefs.response.getBody().as(Users.class);
         assertThat(baseStepDefs.response.getBody().jsonPath().get("userId"), equalTo(id));
    }

    @Given("^I request create with \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void iRequestCreateWith(String firstname, String lastName, String username, String password) throws Throwable {
        //Set body !Convert pojo
        HashMap<String, String> body = new HashMap<>();
        body.put("firstname", firstname);
        body.put("lastName", lastName);
        body.put("username", username);
        body.put("password", password);
        baseStepDefs.globRestAssuredExtension.setBody(body);
    }

    @When("^I send POST method$")
    public void iSendPOSTMethod() {
    }

    @Then("^I should see the body has id as not empty$")
    public void iShouldSeeTheBodyHasIdAsNotEmpty() {
       // baseStepDefs.response.getBody().jsonPath().get("userId")
        Users user = baseStepDefs.response.getBody().as(Users.class);
        user.setId(baseStepDefs.response.getBody().jsonPath().get("userId"));
        assertThat(user.getId(), is(notNullValue()));
    }


}
