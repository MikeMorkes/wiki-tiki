// slide in animations
$(document).ready(function() {
  $(".wiki2").addClass("animated slideInUp");
  $(".jumbotron").addClass("animated slideInDown");

});

//submit button stuff
$('#submit').click(function(evt) {

  evt.preventDefault();

  // clear out any pre-existing content in case the user didn't hit the reset button first  
  document.getElementById("wiki2").style.display = "none";

  document.getElementById("results-row").innerHTML = '<div class="col-md-12"><div class="row" id="row1"><!-- results dropped here --></div><div class="row" id="row2"><!-- results dropped here --></div><div class="row" id="row3"><!-- results dropped here --></div></div>';

  //grab text from form
  var submissionText = document.getElementById('submission').value;

  if (submissionText === "") {
    document.getElementById("results-row").innerHTML = '<div class="col-md-12"><div class="row" id="row1"><h2 id="articleHead">Do not anger the Great Tiki by forgetting to type your query, mortal!</h2></div><div class="row" id="row2"><!-- results dropped here --></div><div class="row" id="row3"><!-- results dropped here --></div></div>';

    document.getElementById("wiki-form").reset();
  }

  //grab json data
  $.getJSON("https://en.wikipedia.org/w/api.php/?action=opensearch&search=" + submissionText + "&limit=9&namespace=0&format=json&callback=?", function(result) {
      if (result[1][0] === undefined && submissionText !== "") {
        document.getElementById("results-row").innerHTML = '<div class="col-md-12"><div class="row" id="row1"><h2 id="articleHead">Your pathetic query produced no results!</h2></div><div class="row" id="row2"><!-- results dropped here --></div><div class="row" id="row3"><!-- results dropped here --></div></div>';
      }

      //loop to grab data for results for first row
      for (a = 0; a <= 2; a++) {
        if (result[1][a] === undefined) { //hide the div if we run out of results
          $("#row1").append('<div class="col-md-4"></div>');
        } else if (result[2][a] === "") { //add placeholder text if summary is empty
          $("#row1").append('<div class="col-md-4"> <h2 id="articleHead">' + result[1][a] + '</h2> <p id="articleSummary1">No summary available.</p> <p id="articleLink1"><a class="btn btn-warning" href="' + result[3][a] + '" role="button">View Article</a></p> </div>');
        } else {
          $("#row1").append('<div class="col-md-4"> <h2 id="articleHead">' + result[1][a] + '</h2> <p id="articleSummary1">' + result[2][a] + '</p> <p id="articleLink1"><a class="btn btn-warning" href="' + result[3][a] + '" role="button">View Article</a></p> </div>');
        }
      }

      //loop to grab data for results for second row
      for (b = 3; b <= 5; b++) {
        if (result[1][b] === undefined) { //hide the div if we run out of results
          $("#row2").append('<div class="col-md-4"></div>');
        } else if (result[2][b] === "") { //add placeholder text if summary is empty
          $("#row2").append('<div class="col-md-4"> <h2 id="articleHead">' + result[1][b] + '</h2> <p id="articleSummary1">No summary available.</p> <p id="articleLink1"><a class="btn btn-warning" href="' + result[3][b] + '" role="button">View Article</a></p> </div>');
        } else {
          $("#row2").append('<div class="col-md-4"> <h2 id="articleHead">' + result[1][b] + '</h2> <p id="articleSummary1">' + result[2][b] + '</p> <p id="articleLink1"><a class="btn btn-warning" href="' + result[3][b] + '" role="button">View Article</a></p> </div>');
        }
      }

      //loop to grab data for results for third row
      for (c = 6; c <= 8; c++) {
        if (result[1][c] === undefined) { //hide the div if we run out of results
          $("#row3").append('<div class="col-md-4"></div>');
        } else if (result[2][c] === "") { //add placeholder text if summary is empty
          $("#row3").append('<div class="col-md-4"> <h2 id="articleHead">' + result[1][c] + '</h2> <p id="articleSummary1">No summary available.</p> <p id="articleLink1"><a class="btn btn-warning" href="' + result[3][c] + '" role="button">View Article</a></p> </div>');
        } else {
          $("#row3").append('<div class="col-md-4"> <h2 id="articleHead">' + result[1][c] + '</h2> <p id="articleSummary1">' + result[2][c] + '</p> <p id="articleLink1"><a class="btn btn-warning" href="' + result[3][c] + '" role="button">View Article</a></p> </div>');
        }
      }
    }) //end JSON stuff

  //display results block
  document.getElementById("wiki2").style.display = "block";

});

//clear button stuff
$('#clear').click(function(evt) {

  evt.preventDefault();

  document.getElementById("wiki2").style.display = "none";

  document.getElementById("results-row").innerHTML = '<div class="col-md-12"><div class="row" id="row1"><!-- results dropped here --></div><div class="row" id="row2"><!-- results dropped here --></div><div class="row" id="row3"><!-- results dropped here --></div></div>';

  document.getElementById("wiki-form").reset();

})