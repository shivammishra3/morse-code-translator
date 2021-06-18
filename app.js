var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/morse.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("OOPS!!  Something went wrong OR requests per hour exceeded.")
    alert("Please try after some time.")
}

function clickHandler() {
    var inputText = txtInput.value;

    // calling server
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)