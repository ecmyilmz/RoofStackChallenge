<h1 align="center"> RoofStacks Api Testing Challange
</h1>
<h2 align="center">
<img alt="logo" src="https://repository-images.githubusercontent.com/307019692/466a1700-3719-11eb-9b3d-6dd7ef884a64" />
</h2>

---

<h4 align="center">
  <a href="#information_source-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#seedling-minimal-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#beginner-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</h4>

## :information_source: About

In this project, I have tested given swagger API's the API Test. This API was already mocked so I didn't do any more effort into mocking the server. My first approach is checking the status code for all different requests. Then I check the response bodies' property.
You can see test link in the below on this section

For the tech stack, I used several different libraries and tools for discovering which are better and which work properly together. So I faced lots of compatible problems. You can follow that in different branches and see my solutions, As a result, All comments are welcome.


I made the above changes because I got  problems with generating test report. Every branch work for only test requirement.
Just only cucumber5(master) branch all requirements provided and test report generated.

https://documenter.getpostman.com/view/10044263/UVeAto3e#940477f8-bca0-4a9d-8aed-6bb4ca473afa

<h2 align="center">
<img alt="basicUml" src="https://github.com/ecmyilmz/RoofStackChallenge/blob/cucumber7/assets/BasicUmlDiagram.png?raw=true" />
</h2>


## :rocket: Technologies

The project was developed using the following technologies:

- [Java8](https://www.oracle.com/java/technologies/java8.html)
- [Rest-Assured](https://rest-assured.io/)
- [Cucumber](https://cucumber.dev/)
- [Allure-Report](https://github.com/allure-framework)
- [Junit](https://github.com/Junit)



## :seedling: Minimal Requirements

- [Java 8](https://nodejs.org/en/docs/)
- [Cucumber Plugin](https://cucumber.io/)

## :beginner: Getting Started

<b>Cloning the repository:</b>

- `$ git clone https://github.com/ecmyilmz/RoofStackChallenge`

<b>Download all dependencies</b>

- `mvn clean test`

(above command that only compatibly works in the master branch)

### :link: Test Cases
<p>Some test cases failed because the expected value and arrived value are not fit on the status code test.</p>
<b>Test Features</b>

<ul>
<li>Create Users Scenarios</li>
<br />
<b>1- Verify success scenarios with creating users with valid credentials</b>
<table style="width:300px">
<tr>
        <td>Description</td>
        <td>firstName</td>
        <td>lastName</td>
        <td>userName</td>
        <td>password</td>
        <td>statusCode</td>
    </tr>
    <tr>
        <td>User Credentials</td>
        <td>jane</td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>FirstName Min:2 character </td>
        <td>ja</td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>FirstName Max:2 character </td>
        <td>janejanejanejanejanejanejanejanejanejanejanejaneja</td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>LastName Min:2 character </td>
        <td>jane</td>
        <td>do</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>LastName Max:2 character </td>
        <td>jane</td>
        <td>doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>UserName Min:4 character</td>
        <td>jane</td>
        <td>doe</td>
        <td>doej</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>UserName Max:4 character</td>
        <td>jane</td>
        <td>doe</td>
        <td>doejjdoejjdo</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>UserName Alphanumeric</td>
        <td>jane</td>
        <td>doe</td>
        <td>doejj12</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>UserName Alphanumeric</td>
        <td>jane</td>
        <td>doe</td>
        <td>doejj?</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
    <tr>
        <td>UserName Alphanumeric</td>
        <td>jane</td>
        <td>doe</td>
        <td>12345</td>
        <td>123456Aa*</td>
        <td>200</td>
    </tr>
</table>



<b>2- Verify non-success scenarios when creating a user with an invalid user credentials</b>
<br/>
note:For this scenario, we expect 400 as an invalid character result, but the mock api also returns 200, so the scenario failed.
<br/>
<table">
<tr>
        <td>Description</td>
        <td>firstName</td>
        <td>lastName</td>
        <td>userName</td>
        <td>password</td>
        <td>statusCode</td>
    </tr>
    <tr>
        <td>FirstName is empty</td>
        <td></td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>FirstName Min:1 character </td>
        <td>j</td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>FirstName is number</td>
        <td>123</td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>FirstName special character</td>
        <td>jane?</td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>FirstName Min:51 character </td>
        <td>janejanejanejanejanejanejanejanejanejanejanejanejan</td>
        <td>doe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>LastName is empty</td>
        <td>jane</td>
        <td></td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>LastName Min:1 character </td>
        <td>jane</td>
        <td>d</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>LastName is number</td>
        <td>jane</td>
        <td>123</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>LastName special character</td>
        <td>jane</td>
        <td>doe?</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>LastName Min:51 character </td>
        <td>jane</td>
        <td>doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe</td>
        <td>doejj</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>UserName is empty</td>
        <td>jane</td>
        <td>doe</td>
        <td></td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>UserName Min:2 character </td>
        <td>jane</td>
        <td>doe</td>
        <td>doe</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
    <tr>
        <td>UserName Min:13 character </td>
        <td>jane</td>
        <td>doe</td>
        <td>doejjdoejjdoe</td>
        <td>123456Aa*</td>
        <td>400</td>
    </tr>
</table>

<li>Get Users Scenarios:</li>
<br/>
<b>1- Verify that status code with user list request</b>
<b>2- Verify the user credentials field with user list request</b>
<b>3- Verify that status code with user by id</b>
<b>4- Verify the user credentials field with user by id</b>

<li>Remove Users Scenarios:</li>
<br/>
1- Verify that delete operation with valid UserID successfully
2- Verify that delete operation with invalid userID unsuccessfully

<li>Patch Users Scenarios:</li>
<br/>

1- Verify that patch operation with valid active body successfully
2- Verify that patch operation with invalid active body unsuccessfully

<li>Update Users Scenarios:</li>
<br/>

<b>1- Verify that the update operation with valid user credentials successfully</b>
<table>
    <tr>
        <td>Description</td>
        <td>firstName</td>
        <td>lastName</td>
        <td>statusCode</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>User Credentials</td>
        <td>jane</td>
        <td>doe</td>
        <td>200</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>FirstName Min:2 character </td>
        <td>ja</td>
        <td>doe</td>
        <td>200</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>FirstName Max:2 character </td>
        <td>janejanejanejanejanejanejanejanejanejanejanejaneja</td>
        <td>doe</td>
        <td>200</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LastName Min:2 character </td>
        <td>jane</td>
        <td>do</td>
        <td>200</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LastName Max:2 character </td>
        <td>jane</td>
        <td>doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedo</td>
        <td>200</td>
        <td></td>
        <td></td>
    </tr>
</table>

<b>2- Verify that the update operation with invalid user credentials unsuccessfully</b>
<table style="width:200px">
    <tr>
        <td>Description</td>
        <td>firstName</td>
        <td>lastName</td>
        <td>statusCode</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>FirstName is empty</td>
        <td></td>
        <td>doe</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>FirstName Min:1 character </td>
        <td>j</td>
        <td>doe</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>FirstName is number</td>
        <td>123</td>
        <td>doe</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>FirstName special character</td>
        <td>jane?</td>
        <td>doe</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>FirstName Min:51 character </td>
        <td>janejanejanejanejanejanejanejanejanejanejanejanejan</td>
        <td>doe</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LastName is empty</td>
        <td>jane</td>
        <td></td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LastName Min:1 character </td>
        <td>jane</td>
        <td>d</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LastName is number</td>
        <td>jane</td>
        <td>123</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LastName special character</td>
        <td>jane</td>
        <td>doe?</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LastName Min:51 character </td>
        <td>jane</td>
        <td>doedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoedoe</td>
        <td>400</td>
        <td></td>
        <td></td>
    </tr>
</table>
</ul>

### :link: Test Reports

<b>Running Test Reports</b>
<p>You need to run TestRunner with Junit, It will provide all files into the target file and then Allure can serve provided files.</p>

- `run /test/java/runner/TestRunner`
- `cd target`
- `allure serve allure-results`


(above command that only compatibly works in the master branch)

<h2 align="center">
  <img alt="report" src="https://github.com/ecmyilmz/RoofStackChallenge/blob/cucumber7/assets/allure-results1.png?raw=true" />
</h2>

<h2 align="center">
  <img alt="report-gif" src="https://github.com/ecmyilmz/RoofStackChallenge/blob/cucumber7/assets/report.gif?raw=true" />
</h2>
