function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function getAt() {
  return ScriptApp.getOAuthToken();
}

function getStorageQuota() {
  var drive = DriveApp;
  var storage = drive.getStorageLimit();
  var used = drive.getStorageUsed();
  var quota = storage - used;
  return {
    limit: storage,
    used: used,
    remaining: quota
  };
}

function testAPI() {
  return { status: 'ok', timestamp: new Date().getTime() };
}