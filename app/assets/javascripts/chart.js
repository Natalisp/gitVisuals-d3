function renderCharts(repos) {

// BAR CHART
  var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var reposCount =  months.map(function(month){
      return getRepoCount(month, repos);
  });

  function getRepoCount(month, repos) {
  return repos.filter(function(repo){
    date = new Date(repo.created_at);
    return (date.getMonth() +1) === month;
  }).length;
  }

  nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()

    chart.x(function(d) { return d.label })
    chart.y(function(d) { return d.value })
    ;

    d3.select("#chart svg")
        .datum(myData(reposCount))
        .transition().duration(500).call(chart);

    nv.utils.windowResize(
            function() {
                chart.update();
            }
        );

    return chart;
});

function myData(repos) {

    return [
        {
            key: "repos",
            values:
            [
              {
                "label" : "January",
                "value" : repos[0]
              },
              {
                "label" : "February",
                "value" : repos[1]
              },
              {
                "label" : "March",
                "value" : repos[2]
              },
              {
                "label" : "April",
                "value" : repos[3]
              },
              {
                "label" : "May",
                "value" : repos[4]
              },
              {
                "label" : "June",
                "value" : repos[5]
              },
              {
                "label" : "July",
                "value" : repos[6]
              },
              {
                "label" : "August",
                "value" : repos[7]
              },
              {
                "label" : "September",
                "value" : repos[8]
              },
              {
                "label" : "October",
                "value" : repos[9]
              },
              {
                "label" : "November",
                "value" : repos[10]
              },
              {
                "label" : "December",
                "value" : repos[11]
              },
            ],
            color: "#0000ff"
        }
    ];
}


//   var ctx = document.getElementById("barChart");
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
//
// //pieChart
//
// var pie = document.getElementById("pieChart");
// var reposLanguages = repoLanguages(repos);
// var l = languageStats(reposLanguages);
//
// var myPieChart = new Chart(pie, {
//     type: 'doughnut',
//     animation:{
//         animateScale:true,
//         duration: 50000,
//         easing: 'easeInOutQuad'
//     },
//     data: {
//         labels: ["Ruby", "HTML", "JavaScript", "CSS"],
//         datasets: [{
//           backgroundColor: [
//             "#ca4444",
//             "#492540",
//             "#80d4f6",
//             "#f6ea8c"
//           ],
//           borderColor: "#fff",
//           borderWidth: 3,
//           data: [
//             l['Ruby'],
//             l['HTML'],
//             l['JavaScript'],
//             l['CSS']
//           ]
//         }]
//       },
//   options: {
//     cutoutPercentage: 40,
//         tooltips: {
//           titleFontSize: 35,
//           bodyFontSize: 35,
//           callbacks: {
//             label: function(tooltipItem, data) {
//               var dataset = data.datasets[tooltipItem.datasetIndex];
//               var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
//                 return previousValue + currentValue;
//               });
//               var currentValue = dataset.data[tooltipItem.index];
//               var precentage = Math.floor(((currentValue/total) * 100)+0.5);
//               return precentage + "%";
//             }
//           }
//         },
//          responsive: true,
//          legend: {
//              padding: 15,
//              position: 'top',
//              labels: {
//                fontSize: 30
//              }
//          },
//          scale: {
//            ticks: {
//              beginAtZero: true
//            },
//            reverse: false
//          }
//      }
// });


}
