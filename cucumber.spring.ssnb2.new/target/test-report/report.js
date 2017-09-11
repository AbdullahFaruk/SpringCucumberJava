$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HeatclinicLogin.feature");
formatter.feature({
  "id": "broadleaf-commerce-login-functionality",
  "description": "",
  "name": "Broadleaf Commerce Login Functionality",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 155519068,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "As a not validated user",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Browse to the application",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "Broadlief home page should show",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "HeatclinicSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 242599619,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicSteps.browse_to_the_app()"
});
formatter.result({
  "duration": 11933536734,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicSteps.broadlief_home_page_should_show()"
});
formatter.result({
  "duration": 13332909,
  "status": "passed"
});
formatter.scenario({
  "id": "broadleaf-commerce-login-functionality;3.-valid-user-valid-password",
  "tags": [
    {
      "name": "@debug",
      "line": 24
    }
  ],
  "description": "",
  "name": "3. Valid user valid password",
  "keyword": "Scenario",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "User click login button",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "Enter \"iivaan@Gmail.com\" as emaill address",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "Enter \"ameera\" as password",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "Click login",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "Invalid email or password message not display",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "Welcome message shows",
  "keyword": "And ",
  "line": 31
});
formatter.match({
  "location": "HeatclinicSteps.user_click_login_button()"
});
formatter.result({
  "duration": 12407323417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iivaan@Gmail.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 107850718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ameera",
      "offset": 7
    }
  ],
  "location": "HeatclinicSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 74088466,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicSteps.click_login()"
});
formatter.result({
  "duration": 3637823382,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 64886180,
  "status": "passed"
});
});