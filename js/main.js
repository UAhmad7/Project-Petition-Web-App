// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");

var data = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
	datasets: [
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,0.8)",
			highlightFill: "rgba(151,187,205,0.75)",
			highlightStroke: "rgba(151,187,205,1)",
			data: [235474, 108835, 105530, 72952, 65173, 62033, 25640, 16868, 15955, 14700]
		}
	]
};

var myBarChart = new Chart(ctx).Bar(data);

// Legend
// Axis values
// Different colors

// Each bar will be link to another page
// - Signature accumulation over time
// - Link to page on the government website
// - Start/End dates