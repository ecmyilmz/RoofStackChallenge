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

    @When("I send PUT method with {string} and {string} update")
    public void iSendPUTMethodWithAndUpdate(String firstname, String lastname) {
        // Set body for update
        String userId = "c4f6c088-f91b-494e-b7f0-a08f48df3180";
        HashMap<String, String> body = new HashMap<>();
        body.put("firstname", firstname);
        body.put("lastname", lastname);
        baseStepDefs.globRestAssuredExtension.setBody(body);
        baseStepDefs.globRestAssuredExtension.setMethod(APIConstant.ApiMethods.PUT);
        baseStepDefs.response = baseStepDefs.globRestAssuredExtension.setParamsAndExecute(userId);
    }
}
