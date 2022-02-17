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

$("#searchBtn").on("click", function() {

    $('#forecastH5').addClass('show');

    // value of input from user
    city = $("#searchTerm").val();

    // Clear the input box
    $("#searchTerm").val("");

    // URL call to API
    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function (response){

        console.log(response)

        console.log(response.name)
        console.log(response.weather[0].icon)

        let tempF = (response.main.temp - 273.15) * 1.80 + 32;
        console.log
    })
})