function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function getAt() {
  return ScriptApp.getOAuthToken();
}