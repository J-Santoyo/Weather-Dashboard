// Value of the input
let city = $("#searchTerm").val();
// stored API key value
const apiKey = "95cac2e8ef031546180a8810b1453fa4";
let date = new Date();

$("#searchTerm").keypress(function(event){

    if (event.keyCode === 13) {
            event.preventDefault();
            $("#searchBtn").click();
    }
});