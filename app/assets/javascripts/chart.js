function renderCharts(repos) {

// BAR CHART
  var m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var reposCount =  m.map(function(month){
      return getRepoCount(month, repos);
  });

  function getRepoCount(month, repos) {
  return repos.filter(function(repo){
    date = new Date(repo.created_at);
    return (date.getMonth() +1) === month;
  }).length;
  }

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var margin = { left:50, right:50, top:40, bottom:0};

var y = d3.scaleLinear()
          .domain([0,100])
          .range([600,0]);
var x = d3.scalePoint()
          .domain(months)
          .range([120, 800])

var yAxis = d3.axisLeft(y);
var xAxis = d3.axisBottom(x);


var svg = d3.select(".d3Bar").append("svg").attr("height","700").attr("width","1000");

var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")")

  chartGroup.selectAll("rect")
    .data(reposCount)
    .enter().append("rect")
            .attr("height", function(d, i){ return d*8 ; })
            .attr("width", "50")
            .attr("fill", function(d) {
      					return "rgb(0, 0, " + (d*10) + ")";
      			   })
            .attr("x", function(d, i){ return (i*60)+60 ; })
            .attr("y", function(d, i){ return 600-(d*8); });

    svg.selectAll("text")
       .data(reposCount)
       .enter().append("text")
       .text(function(d) {
			   		return d;
			  })
        .attr("x", function(d, i) {
			   		return (i*60)+125;
			   })
			  .attr("y", function(d) {
          if(d>1) {
            return 620-(d*8);
          }
			   })
         .attr("font-family", "sans-serif")
			   .attr("font-size", "16px")
			   .attr("fill", "black");

  // chartGroup.append("g").attr("class", "axis y").call(yAxis);
  svg.append("g").attr("class", "axis x").attr("transform", "translate(0,650)").call(xAxis);


  // var ctx = document.getElementById("barChart");
//   var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//         datasets: [{
//             label: 'Repos Created',
//             data: reposCount,
//             backgroundColor: "#ca4444",
//             borderColor: "#fff",
//             borderWidth: 3,
//             fontSize: 30
//         }]
//     },
//     options: {
//       responsive: true,
//       title: 'REPOS',
//       tooltips: {
//         titleFontSize: 0,
//         bodyFontSize: 35,
//         callbacks: {
//           label: function(tooltipItems, data) {
//               return tooltipItems.yLabel + ' repos created in ' + tooltipItems.xLabel ;
//           }
//       }
//       },
//         scales: {
//           gridLines: {
//             lineWidth: 3
//           },
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true,
//                     fontSize: 30
//                 }
//               }],
//             xAxes: [{
//             ticks: {
//                 fontSize: 30,
//                 display: true
//               },
//             barPercentage: 1
//         }]
//       },
//       legend: {
//           position: 'top',
//           labels: {
//             padding: 15,
//             fontSize: 30
//           }
//       }
//     }
// });

//pieChart

var pie = document.getElementById("pieChart");
var reposLanguages = repoLanguages(repos);
var l = languageStats(reposLanguages);

var myPieChart = new Chart(pie, {
    type: 'doughnut',
    animation:{
        animateScale:true,
        duration: 50000,
        easing: 'easeInOutQuad'
    },
    data: {
        labels: ["Ruby", "HTML", "JavaScript", "CSS"],
        datasets: [{
          backgroundColor: [
            "#ca4444",
            "#492540",
            "#80d4f6",
            "#f6ea8c"
          ],
          borderColor: "#fff",
          borderWidth: 3,
          data: [
            l['Ruby'],
            l['HTML'],
            l['JavaScript'],
            l['CSS']
          ]
        }]
      },
  options: {
    cutoutPercentage: 40,
        tooltips: {
          titleFontSize: 35,
          bodyFontSize: 35,
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                return previousValue + currentValue;
              });
              var currentValue = dataset.data[tooltipItem.index];
              var precentage = Math.floor(((currentValue/total) * 100)+0.5);
              return precentage + "%";
            }
          }
        },
         responsive: true,
         legend: {
             padding: 15,
             position: 'top',
             labels: {
               fontSize: 30
             }
         },
         scale: {
           ticks: {
             beginAtZero: true
           },
           reverse: false
         }
     }
});


}
