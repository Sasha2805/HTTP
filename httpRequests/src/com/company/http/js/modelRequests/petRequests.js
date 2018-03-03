function petJSON(id, categoryId, categoryName, name, photoURL, status){
    var json = "{\n" +
            "  \"id\": " + id + ",\n" +
            "  \"category\": {\n" +
            "    \"id\": " + categoryId + ",\n" +
            "    \"name\": " + "\"" + categoryName + "\"" + "\n" +
            "  },\n" +
            "  \"name\": " + "\"" + name + "\"" + ",\n" +
            "  \"photoUrls\": [\n" +
            "   " + "\"" + photoURL + "\"" + "\n" +
            "  ],\n" +
            "  \"tags\": [\n" +
            "    {\n" +
            "      \"id\": 0,\n" +
            "      \"name\": \"string\"\n" +
            "    }\n" +
            "  ],\n" +
            "  \"status\": " + "\"" + status + "\"" + "\n" +
            "}";
    return json;
}

function getPetJSON(idField_id, idField_categoryId, idField_categoryName, idField_name, idField_photoURL, idField_status) {
    var id = document.getElementById(idField_id).value;
    var categoryId = document.getElementById(idField_categoryId).value;
    var categoryName = document.getElementById(idField_categoryName).value;
    var name = document.getElementById(idField_name).value;
    var photoURL = document.getElementById(idField_photoURL).value;
    var status = document.getElementById(idField_status).value;
    var json = petJSON(id, categoryId, categoryName, name, photoURL, status);
    return json;
}

function addPet(){
    var petJSON = getPetJSON("addPet_petId", "addPet_petName", "addPet_categoryId", "addPet_categoryName", "addPet_photoURL", "addPet_status");
    var xmlhttp = getXmlHttp();
    xmlhttp.open('POST', 'http://petstore.swagger.io/v2/pet', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/xml');
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(petJSON);
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponse(xmlhttp, "addPet_result");
    };
}

function updatePet(){
    var petJSON = getPetJSON("updatePet_petId", "updatePet_petName", "updatePet_categoryId", "updatePet_categoryName", "updatePet_photoURL", "updatePet_status");
    var xmlhttp = getXmlHttp();
    xmlhttp.open('PUT', 'http://petstore.swagger.io/v2/pet', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(petJSON);
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponse(xmlhttp, "updatePet_result");
    };
}

function getPetByStatus(){
    var status = document.getElementById('petByStatus_status').value;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'http://petstore.swagger.io/v2/pet/findByStatus?status=' + status, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponse(xmlhttp, "petByStatus_result");
    };
}

function getPetById(){
    var id = document.getElementById('petById_petId').value;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'http://petstore.swagger.io/v2/pet/' + id, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponse(xmlhttp, "petById_result");
    };
}

function deletePetById(){
    var id = document.getElementById('deletePet_petId').value;
    var xmlhttp = getXmlHttp();
    xmlhttp.open('DELETE', 'http://petstore.swagger.io/v2/pet/' + id, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponseByTitle(xmlhttp, "deletePet_result", "Pet deleted");
    };
}

function uploadImage(){
    var id = document.getElementById('uploadImage_petId').value;
    var selectedFile = document.getElementById('uploadImage_img').files[0];
    var xmlhttp = getXmlHttp();
    xmlhttp.open('POST', 'http://petstore.swagger.io/v2/pet/' + id +'/uploadImage', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.setRequestHeader('Content-Type', 'multipart/form-data');
    xmlhttp.send(selectedFile);
    xmlhttp.onreadystatechange = function() {
        setXmlHttpResponseByTitle(xmlhttp, "uploadImage_result");
    };
}