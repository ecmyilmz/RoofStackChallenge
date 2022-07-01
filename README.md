<h1 align="center"> RoofStacks Api Testing Challange
</h1>
<h2 align="center">

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

For the tech stack, I used several different libraries and tools for discovering which are better and which work properly together. You can follow that in different branches.
main => cucumber 1 (very first version)
cucumber 7 => cucumber 7 and latest dependencies
cucumber 5 => cucumber 7

I made the above changes because I got a problem with test reporting. Every branch work for only test running.
Only cucumber5(master) branch all requirements provided.

https://documenter.getpostman.com/view/10044263/UVeAto3e#940477f8-bca0-4a9d-8aed-6bb4ca473afa
## :rocket: Technologies

The project was developed using the following technologies:

- [Java8](https://www.oracle.com/java/technologies/java8.html)
- [Rest-Assured](https://rest-assured.io/)
- [Cucumber](https://cucumber.dev/)


## :seedling: Minimal Requirements

- [Java 8](https://nodejs.org/en/docs/)
- [Cucumber Plugin] (https://cucumber.io/)

## :beginner: Getting Started

<b>Cloning the repository:</b>

- `$ git clone https://github.com/ecmyilmz/RoofStackChallenge`

<b>Download the all dependences</b>

Please run (it's work for only master branch)
- `mvn clean test`


### :link: Test Cases
<p>Some test cases failed because the expected value and arrived value are not fit on the status code test./p>
<b>Test Features</b>

<ul>
<li>Create Users</li>
<li>Get User(s)</li>
<li>Remove User(s)</li>
<li>Switch User(s)</li>
<li>Update User(s)</li>
</ul>

### :link: Test Reports