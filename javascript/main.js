var ctx = document.getElementById("myChart");
var data = {
    
   
    datasets: [
        {
            data: [ 99,1],
            backgroundColor: [
                
                "#000",
                "#000"
            ],
           
        }]
};
var options = {

};



var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
});


var ctx = document.getElementById("myLineChart");

var data = {
    labels: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5],
    datasets: [
        {
            label: "A Regular Day",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(208,2,27,0.4)",
            borderColor: "rgba(208,2,27,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(208,2,27,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, -2, 3, -8, 10, -1, 10,8,-4 ,2,-8,-9,5,10,8,8,8,8,9,10,0,0,0,0,0],
            spanGaps: false,
        }
    ]
};

var options = {

  labels: {
        display: false
    },
 legend: {
        display: false
    },

scales: {
    xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
    yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
    }
};

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options:options
   
});