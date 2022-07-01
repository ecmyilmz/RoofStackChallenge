package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features",
                 glue = "steps",
                 plugin = {"pretty",
                         "io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm",
                         "html:target/HtmlReports",
                         "json:target/cucumber-reports/json-reports/CucumberTestReport.json",
                         "rerun:target/cucumber-reports/rerun-reports/rerun.txt"}
                 //tags = "@Smoke"
                 )
public class TestRunner {

}