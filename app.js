
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text="+text;
}

function errorHandler(error) {
    console.log("error Occured",error);
    alert("Something Wrong With server! Try again after Some Time");
}

btnTranslate.addEventListener("click",clickHandler);

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText)).then(response => 
        response.json())
        .then(json => { 
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}; 