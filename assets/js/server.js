var SquareConnect = require('square-connect');
// var config = require('./config')[app.get('env')];
require('dotenv').config();
var defaultClient = SquareConnect.ApiClient.instance;
 
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "TEST_KEY";
 
var api = new SquareConnect.LocationsApi();
 
api.listLocations().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});