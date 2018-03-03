    function getXmlHttp() {
        var xmlhttp;
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp = false;
            }
        }

        if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
            xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
    }

    function setXmlHttpResponse(xmlhttp, elementId) {
        if (xmlhttp.status != 200) {
            document.getElementById(elementId).innerHTML = xmlhttp.status + ': ' + xmlhttp.statusText;
        } else {
            document.getElementById(elementId).innerHTML = xmlhttp.responseText;
        }
    };

    function setXmlHttpResponseByTitle(xmlhttp, elementId, responseText) {
        if (xmlhttp.status != 200) {
            document.getElementById(elementId).innerHTML = xmlhttp.status + ': ' + xmlhttp.statusText;
        } else {
            document.getElementById(elementId).innerHTML = responseText;
        }
    };