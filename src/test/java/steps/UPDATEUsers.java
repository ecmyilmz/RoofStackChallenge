package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import utilities.APIConstant;

import java.util.HashMap;

public class UPDATEUsers {
    public BaseStepDefs baseStepDefs;
    public UPDATEUsers() {}
    public UPDATEUsers(BaseStepDefs baseStepDefs) {
        this.baseStepDefs = baseStepDefs;
    }

    @Given("I created a user whose firstname is {string} and  lastname is {string}")
    public void iCreatedAUserWhoseFirstnameIsAndLastnameIs(String firstname, String lastname) {

    }

    @When("I send PUT method with {string} and {string} update {string}")
    public void iSendPUTMethodWithAndUpdate(String firstname, String lastname, String userId) {
        // Set body for update
        HashMap<String, String> body = new HashMap<>();
        body.put("firstname", firstname);
        body.put("lastname", lastname);
        baseStepDefs.globRestAssuredExtension.setBody(body);
        baseStepDefs.globRestAssuredExtension.setMethod(APIConstant.ApiMethods.PUT);
        baseStepDefs.response = baseStepDefs.globRestAssuredExtension.setParamsAndExecute(userId);
    }
}
