    function storeJSON(id, petId, quantity, snipDate, status, complete) {
        var json = "{\n" +
                    "  \"id\": " + id + ",\n" +
                    "  \"petId\": " + petId + ",\n" +
                    "  \"quantity\": " + quantity + ",\n" +
                    "  \"snipDate\": " + "\"" + snipDate + "\"" + ",\n" +
                    "  \"status\": " + "\"" + status + "\"" + ",\n" +
                    "  \"complete\": " + complete + "\n" +
                    "}";
        return json;
    }

    function getInventoryByStatus() {
        var xmlhttp = getXmlHttp();
        xmlhttp.open('GET', 'http://petstore.swagger.io/v2/store/inventory', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {
            setXmlHttpResponse(xmlhttp, "returnInvertory_result");
        };
    }

    function placeAnOrder() {
        var id = document.getElementById("placeAnOrder_id").value;
        var petId = document.getElementById("placeAnOrder_petId").value;
        var quantity = document.getElementById("placeAnOrder_quantity").value;
        var snipDate = document.getElementById("placeAnOrder_snipDate").value;
        var status = document.getElementById("placeAnOrder_status").value;
        var complete = document.getElementById("placeCompleteOrder_status").value;
        var json = storeJSON(id, petId, quantity, snipDate, status, complete);
        var xmlhttp = getXmlHttp();
        xmlhttp.open('POST', 'http://petstore.swagger.io/v2/store/order', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
        xmlhttp.send(json);
        xmlhttp.onreadystatechange = function() {
            setXmlHttpResponse(xmlhttp, "placeAnOrder_result");
        };
    }

    function getOrderById() {
        var id = document.getElementById("findPurchase_orderId").value;
        var xmlhttp = getXmlHttp();
        xmlhttp.open('GET', 'http://petstore.swagger.io/v2/store/order/' + id, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/xml');
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {
            setXmlHttpResponse(xmlhttp, "findPurchase_result");
        };
    }

    function deleteOrderById() {
        var id = document.getElementById("deletePurchase_orderId").value;
        var xmlhttp = getXmlHttp();
        xmlhttp.open('DELETE', 'http://petstore.swagger.io/v2/store/order/' + id, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/xml');
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {
            setXmlHttpResponseByTitle(xmlhttp, "deletePurchase_result", "Order deleted");
        };
    }