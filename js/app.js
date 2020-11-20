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
   let el = document.getElementById("data");
   el.innerHTML = "";
   getData(type, function(data){
        data = data.results;

        data.forEach(function(item){
            Object.keys(item).forEach(function(key){
                console.log(key);
            })
            el.innerHTML += "<p>" + item.name + "</p>";
        });
   });
}




