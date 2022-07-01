package steps;



import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import utilities.APIConstant;
import utilities.RestAssuredExtension;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class BaseStepDefs {
    public RestAssuredExtension globRestAssuredExtension;
    public static ResponseOptions<Response> response;

    @Given("^My path is \"([^\"]*)\"$")
    public void myPathIs(String url) throws Throwable {
        globRestAssuredExtension = new RestAssuredExtension(url);
    }

    @Then("^I should see status code \"([^\"]*)\"$")
    public void iShouldSeeStatusCode(String stsCode) throws Throwable {
        String statusCode = String.valueOf(this.response.getStatusCode());
        assertThat(statusCode,equalTo(stsCode));
    }

    @When("^I send GET method$")
    public void iSendGETMethod() {
        globRestAssuredExtension.setMethod(APIConstant.ApiMethods.GET);
        response = globRestAssuredExtension.Execute();
    }
    @When("^I send POST method$")
    public void iSendPOSTMethod() {
        globRestAssuredExtension.setMethod(APIConstant.ApiMethods.POST);
        response = globRestAssuredExtension.Execute();
    }
}
