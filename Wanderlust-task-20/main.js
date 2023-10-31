// Foursquare API Info
const clientId = "PU3IY1PZEOOANTPSHKNMS5HFSMEGEQ1IAVJYGYM4YVZP3NGD";
const clientSecret = "0V21IXU0EETE3SZJGGCP4T4R13NUTBJ0LMI5WQY45IMDPEKY";
const url = "https://api.foursquare.com/v2/venues/explore?near=";

// OpenWeather Info
const openWeatherKey = '1d1d71f663a3122b4d588d0ccd959717';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const limit = 10;
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=${limit}&client_id=${clientId}&client_secret=${clientSecret}&v=20211212`;

    const response = await fetch(urlToFetch);
    if (response.ok) {
        const jsonResponse = await response.json();
        let venues = jsonResponse["response"].groups[0].items;
        venues = venues.map((item) => item.venue);
        return venues;
    }
    return false;
};

const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;

    const response = await fetch(urlToFetch);
    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    return false;
};

// Render functions
const renderVenues = (venues) => {
    const indxs = [];
    $venueDivs.forEach(($venue) => {
        let rndIndx = Math.floor(Math.random() * limit);
        while (indxs.includes(rndIndx)) {
            rndIndx = Math.floor(Math.random() * limit);
        }
        indxs.push(rndIndx);

        const venue = venues[rndIndx];
        const venueIcon = venue.categories[0].icon;
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        const venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city || $input.val()}</h2>`);
};

const renderForecast = (day) => {
    const weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
};

const executeSearch = async e => {
    e.preventDefault();
    if ($input.val().trim() !== "") {
        beforeSubmit();
        const [weather, venues] = await Promise.all([getForecast(), getVenues()]);
        if (weather && venues) {
            afterSubmit();
            $container.css("visibility", "visible");
            renderForecast(weather)
            renderVenues(venues)
        }
        else {
            afterSubmit();
            $container.css("visibility", "hidden");
            alert('No information found!');
        }
    } else {
        alert("Please type in a city first!");
    }
};

const beforeSubmit = () => {
    $('#button').attr('disabled', true);
    $venueDivs.forEach((venue) => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "hidden");
    $('.status').text('Loading...')
};

const afterSubmit = () => {
    $('#button').attr('disabled', false);
    $('.status').text('')
    $venueDivs.forEach((venue) => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
};

$submit.click(executeSearch);

$(document).on("click", "#degC", function (e) {
    switchTemp(e);
    $(this).addClass('selected');
    $('#degF').removeClass('selected');
});

$(document).on("click", "#degF", function (e) {
    switchTemp(e);
    $(this).addClass('selected');
    $('#degC').removeClass('selected');
});

const switchTemp = e => {
    const value = e.target.getAttribute('data-value') + ' ';
    $('#temp').text(value);
};
