function COLLECTDATA(input, method) {
  var id = input;
  var final = id.substr(id.lastIndexOf('/') + 1);
  var ticket = String(final);
  var USERNAME = "JIRA USERNAME";
  var PASSWORD = "JIRA PASSWORD";
  var JIRA_URL = "YOUR JIRA BASE URL";
  var API_URL = JIRA_URL+"/rest/api/2/issue/"+ ticket + method;
  var authHeader = 'Basic ' + Utilities.base64Encode(USERNAME + ':' + PASSWORD);
  var options = {
    headers: {Authorization: authHeader}
  };
  var response = UrlFetchApp.fetch(API_URL, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return (data);
}

function GETJIRASUMMARY(input) {
  var method = "?fields=summary";
  var data = COLLECTDATA(input, method);
  return (data["fields"]["summary"]);
}

function GETJIRAREPORTER(input) {
  var method = "?fields=reporter";
  var data = COLLECTDATA(input, method);
  return (data["fields"]["reporter"]["name"]);
}

function GETJIRAPR(input) {
  var method = "/comment";
  var data = COLLECTDATA(input, method);
  var link;
  var linkRegExp = /(https:\/\/github.com\/[a-z,0-9]*\/[a-z,0-9]*\/pull\/[a-z,0-9]*)/g;
  var count = 0;
  var raw = null;
  var stop = (data["total"]);
  count = stop-1
  var author = null;
  while (link == null && count <= stop) {
    raw = (data["comments"][count]["body"]);
    link = linkRegExp.exec(raw);
    if (link == null) {
      count--;
    }};   
  return (link[0]);
}

function GETJIRAPRAUTHOR(input) {
  var method = "/comment";
  var data = COLLECTDATA(input, method);
  var link;
  var linkRegExp = /(https:\/\/github.com\/[a-z,0-9]*\/[a-z,0-9]*\/pull\/[a-z,0-9]*)/g;
  var count = 0;
  var raw = null;
  var stop = (data["total"]);
  count = stop-1
  var author = null;
  while (link == null && count <= stop) {
    raw = (data["comments"][count]["body"]);
    author = (data["comments"][count]["author"]["name"]);
    link = linkRegExp.exec(raw);
    if (link == null) {
      count--;
    }};    
  return author;
}

