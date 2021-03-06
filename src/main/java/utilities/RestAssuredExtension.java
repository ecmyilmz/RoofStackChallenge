package utilities;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;

import java.util.Map;

public class RestAssuredExtension {

    private RequestSpecBuilder builder = new RequestSpecBuilder();
    private String method;
    private String url;

    /**
     * RestAssuredExtension constructor to pass the initial settings for the the following method
     * @param uri
     * @param method
     */
    public RestAssuredExtension(String uri, String method) {
        //Formulate the API url
        this.url = "https://3e3d2990-3fca-4144-8b26-1538cf135a09.mock.pstmn.io" + uri;
        this.method = method;
    }

    public RestAssuredExtension(String uri) {
        //Formulate the API url
        this.url = "https://3e3d2990-3fca-4144-8b26-1538cf135a09.mock.pstmn.io" + uri;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    /**
     * ExecuteAPI to execute the API for GET/POST/DELETE/PUT
     * @return ResponseOptions<Response>
     */
    private ResponseOptions<Response> ExecuteAPI() {
        RequestSpecification requestSpecification = builder.build();
        RequestSpecification request = RestAssured.given();
        request.contentType(ContentType.JSON);
        request.spec(requestSpecification);

        if(this.method.equalsIgnoreCase(APIConstant.ApiMethods.POST))
            return request.post(this.url);
        else if(this.method.equalsIgnoreCase(APIConstant.ApiMethods.DELETE))
            return request.delete(this.url);
        else if(this.method.equalsIgnoreCase(APIConstant.ApiMethods.GET))
            return request.get(this.url);
        else if(this.method.equalsIgnoreCase(APIConstant.ApiMethods.PUT))
            return request.put(this.url);
        else if(this.method.equalsIgnoreCase(APIConstant.ApiMethods.PATCH))
            return request.patch(this.url);

        return null;
    }
    /**
     * setBody Setting request Body
     * @param body
     * @return
     */
    public void setBody(Map<String, String> body) {
        builder.setBody(body);
    }

    /**
     * Execute
     * @param
     * @return
     */
    public ResponseOptions<Response> Execute() {
        return ExecuteAPI();
    }

    /**
     * Execute with UserId
     * @param  userId
     * @return
     */
    public ResponseOptions<Response> setParamsAndExecute(String userId) {
        this.url = this.url +'/'+userId;
        return ExecuteAPI();
    }

}