var api = 'http://api.icndb.com/jokes/random';
var intents = 'https://twitter.com/intent/tweet?text=';

function httpConcat(tweet) {
    var pluses = tweet.split(' ').join('+');
    return pluses;
}



$(document).ready(function () {
    $.getJSON(api, function (json) {
        $('#quote').html("<h3>" + json.value.joke + "</h3>");
        $('#tweetButton').attr('href', function () {
            return $(this).attr('href') + httpConcat(json.value.joke);
        });
    });


    $('#quoteButton').click(function () {
        $.getJSON(api, function (json) {
            $('#quote').html("<h3>" + json.value.joke + "</h3>");
            // Needed to call twice to clear the attribute of
            // the last quote before appending a new one
            // Probably a better way of doing this but ¯\_(ツ)_/¯
            $('#tweetButton').attr('href', intents);
            $('#tweetButton').attr('href', function () {
                return $(this).attr('href') + httpConcat(json.value.joke);
            });
        });
    });

    var colors = ["#256EFF", "#46237A", "#3DDC97", "#FCFCFC", "#FF495C"];
    var rand = Math.floor(Math.random * colors.length);
    $('body').important("background-color", "red");

});
