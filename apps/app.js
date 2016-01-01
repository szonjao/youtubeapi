$(document).ready(function(){
	$("#query").click(function(){
		/*alert("test");*/
		var searchTerm = $("#search-term").val();
		submitValuation(searchTerm);
	});
	$("#search-term").on("keydown", function(e) {
		if (e.which === 13) {
			//alert("testEnter");
			var searchTerm = $("#search-term").val();
			submitValuation(searchTerm);
		}
	});
	$("#search-term").focus(
    function(){
        $(this).val('');
    });
});

function submitValuation(searchTerm){ 

	var params = {
		part: 'snippet',
		key: 'AIzaSyBfrl_C3GHJ06fDmZoOs31hFwco0VMYexs',
		q: searchTerm
	}

	var url = 'https://www.googleapis.com/youtube/v3/search'
	$.getJSON(url, params, function(data){ 
		displayResults(data.items);
		console.log(data);
	});
}


function displayResults(results){
	console.log(results);
	$.each(results, function(index, value){
		$("#search-results").html(" ");
		$("#search-term").blur();
		$("#search-results").append(value.snippet.title + '</br>' );
		$("#search-results").append('<img src="' + value.snippet.thumbnails.default.url + '"></br>');
		$("#search-results").append('<a target="_blank" href="https://www.youtube.com/watch?v=' + value.id.videoId + '">Click here!</a></br>');
		// $("#search-results").append(value.Title + ' ' + value.Year + '</br>' );
	});
}