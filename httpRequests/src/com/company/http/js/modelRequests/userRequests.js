function userJSON(id, username, firstName, lastName, email, password, phone, userStatus){
    var json = "{\n" +
                "  \"id\": " + id + ",\n" +
                "  \"username\": " + "\"" + username + "\"" + ",\n" +
                "  \"firstName\": " + "\"" + firstName + "\"" + ",\n" +
                "  \"lastName\": " + "\"" + lastName + "\"" + ",\n" +
                "  \"email\": "	 + "\"" + email + "\"" + ",\n" +
                "  \"password\": " + "\"" + password + "\"" + ",\n" +
                "  \"phone\": " + "\"" + phone + "\"" + ",\n" +
                "  \"userStatus\": " + userStatus + "\n" +
                "}";
    return json;
}

function getUserJSON(idField_id, idField_username, idField_firstName, idField_lastName, idField_email, idField_password, idField_phone, idField_userStatus){
    var id = document.getElementById(idField_id).value;
    var userName = document.getElementById(idField_username).value;
    var firstName = document.getElementById(idField_firstName).value;
    var lastName = document.getElementById(idField_lastName).value;
    var email = document.getElementById(idField_email).value;
    var password = document.getElementById(idField_password).value;
    var phone = document.getElementById(idField_phone).value;
    var userStatus = document.getElementById(idField_userStatus).value;
    var json = userJSON(id, userName, firstName, lastName, email, password, phone, userStatus);
    return json;
}

function addUser(){
    var userJSON = getUserJSON("addUser_userId", "addUser_userName", "addUser_firstName", "addUser_lastName", "addUser_email",
                            "addUser_password", "addUser_phone", "addUser_userStatus");
    var xmlhttp = getXmlHttp();
    xmlhttp.open('POST', 'http://petstore.swagger.io/v2/user', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(userJSON);
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponseByTitle(xmlhttp, "addUser_result", "User added");
    };
}

function login(){
    var userName = document.getElementById("login_userName").value;
    var password = document.getElementById("login_password").value;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'http://petstore.swagger.io/v2/user/login?username=' + userName +'&password=' + password, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/xml');
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponse(xmlhttp, "login_result");
    };
}

function logout() {
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'http://petstore.swagger.io/v2/user/logout', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/xml');
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponseByTitle(xmlhttp, "logout_result", "logout successful");
    };
}

function getByUserName(){
    var userName = document.getElementById("getByUserName_userName").value;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'http://petstore.swagger.io/v2/user/' + userName, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/xml');
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponse(xmlhttp, "getByUserName_result");
    };
}

function updateUser(){
    var userJSON = getUserJSON("updateUser_userId", "updateUser_userName", "updateUser_firstName", "updateUser_lastName", "updateUser_email",
                                "updateUser_password", "updateUser_phone", "updateUser_userStatus");
    var userName = document.getElementById("updateUser_userName").value;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('PUT', 'http://petstore.swagger.io/v2/user/' + userName, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(userJSON);
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponseByTitle(xmlhttp, "updateUser_result", "User updated");
    };
}

function deleteUser(){
    var userName = document.getElementById("deleteUser_username").value;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('DELETE', 'http://petstore.swagger.io/v2/user/' + userName, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponseByTitle(xmlhttp, "deleteUser_result", "User deleted");
    };
}