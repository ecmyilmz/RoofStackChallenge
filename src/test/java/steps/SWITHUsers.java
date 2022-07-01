package steps;

import io.cucumber.java.en.When;
import utilities.APIConstant;

import java.util.HashMap;

public class SWITHUsers {
    public BaseStepDefs baseStepDefs;
    public SWITHUsers() {}
    public SWITHUsers(BaseStepDefs baseStepDefs) {
        this.baseStepDefs = baseStepDefs;
    }

    @When("I send Patch method with {string} userID , {string} active body")
    public void iSendPatchMethodWithUserIDActiveBody(String userID, String active) {
        HashMap<String, String> body = new HashMap<>();
        body.put("isActive", active);
        baseStepDefs.globRestAssuredExtension.setBody(body);
        baseStepDefs.globRestAssuredExtension.setMethod(APIConstant.ApiMethods.PUT);
        baseStepDefs.response = baseStepDefs.globRestAssuredExtension.setParamsAndExecute(userID);
    }
}
