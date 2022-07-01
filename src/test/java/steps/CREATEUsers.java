package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import models.Users;


import java.util.HashMap;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class CREATEUsers {
   public BaseStepDefs baseStepDefs;

    public CREATEUsers() {}
    public CREATEUsers(BaseStepDefs baseStepDefs) {
        this.baseStepDefs = baseStepDefs;
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


    @Then("^I should see the body has id as not empty$")
    public void iShouldSeeTheBodyHasIdAsNotEmpty() {
       // baseStepDefs.response.getBody().jsonPath().get("userId")
        Users user = baseStepDefs.response.getBody().as(Users.class);
        user.setId(baseStepDefs.response.getBody().jsonPath().get("userId"));
        assertThat(user.getId(), is(notNullValue()));
    }


}
