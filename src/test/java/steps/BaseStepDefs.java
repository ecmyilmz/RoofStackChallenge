package steps;

import cucumber.api.java.en.Given;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import utilities.RestAssuredExtension;

public class BaseStepDefs {
    public RestAssuredExtension globRestAssuredExtension;
    public static ResponseOptions<Response> response;

    @Given("^My path is \"([^\"]*)\"$")
    public void myPathIs(String url) throws Throwable {
        globRestAssuredExtension = new RestAssuredExtension(url);
    }
}
