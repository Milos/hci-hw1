var step  = 400;
var max   = 2400;
var start = 400;
var doughnutData = [
				{
					value: 29,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Fat"
				},
				{
					value: 44,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Protein"
				},
				{
					value: 119,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Carbohydrates"
				},
				// {
				// 	value: 1400,
				// 	color: "#949FB1",
				// 	highlight: "#A8B3C5",
				// 	label: "Water"
				// },
				{
					value: 4,
					color: "#4D5360",
					highlight: "#616774",
					label: "Sugar"
				}

			];

		



		// var randomScalingFactor = function(){ return Math.round(Math.random()*2400)};
		var lineChartData = {
			labels : ["18/2/2015","19/2/2015","20/2/2015","21/2/2015","22/2/2015","23/2/2015","24/2/2015"],
			datasets : [
				// {
				// 	label: "Moje Kalorije",
				// 	fillColor : "rgba(220,220,220,0.2)",
				// 	strokeColor : "rgba(220,220,220,1)",
				// 	pointColor : "rgba(220,220,220,1)",
				// 	pointStrokeColor : "#fff",
				// 	pointHighlightFill : "#fff",
				// 	pointHighlightStroke : "rgba(220,220,220,1)",
				// 	data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]					
				// },
				{
					label: "Moje Kalorije",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
				data : [1210,900,780,600,1300,1200,1400]
				}
			]

		}

			


	window.onload = function(){
		var ctx1 = document.getElementById("chart-area").getContext("2d");
				window.myDoughnut = new Chart(ctx1).Doughnut(doughnutData, {responsive : false});
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: false,
			scaleOverride: true,
			scaleSteps: Math.ceil((max-start)/step),
			scaleStepWidth: step,
			scaleStartValue: start
		});
	}
