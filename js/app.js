const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {

    var xhr = new XMLHttpRequest();
    var data;
    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    function setData (jsonData) {
        data = jsonData;
        console.log(data);
    }


    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); 
        }
    };
};

function writeToDocument(type) {
    getData(type, function(data){
        document.getElementById("data").innerHTML = data;
    });
}




