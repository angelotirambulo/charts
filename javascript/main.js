//adds spinner to ensure all page elelments have loaded

$(window).on('load', function() {
    $('.loading').css({'display':'none'});
});


// start of waypoint sticky for header

let $headerwrap = $('.headerwrap')
let $headerwrap2 = $('.headerwrap2')
let $showafter = $('.showafterthis')


$('.showafterthis').waypoint(function() {
    if ($(".headerwrap2").is(":hidden")) {
        $(".headerwrap2").slideDown(100);
    } else {
        $(".headerwrap2").slideUp(100);
    }
});
//end of waypoint sticky for header


// Start of Pie Chart JS

var ctx = document.getElementById("myChart");
Chart.defaults.global.tooltips.enabled = false;

var pieChartCanvas = $('#myChart');
var allBox = $(".box-container .box");

pieChartCanvas.mouseleave(hideAll)

function hideAll() {
    allBox.addClass("hide");
}

Chart.defaults.global.hover.onHover = function(x) {
    // console.log(x)
    var i = x[0]._index;

    var DA = $(".dicking-around-color");
    var MS = $(".makingshit-color");


    function showDA() {
        DA.removeClass("hide")
    };

    function hideDA() {
        allBox.addClass("hide")
    };

    if (i === 0) {
        showDA();
    } else {
        DA.addClass("hide")
    }

    function showMS() {
        MS.removeClass("hide");
    };
    if (i === 1) {
        showMS();
    } else {
        MS.addClass("hide")
    }



};

var data = {
    datasets: [{
        data: [95, 1],
        backgroundColor: [
            "#E986E6",
            "#000"
        ],
        borderColor: [
            'rgba(255,99,132,0)',
            'rgba(54, 162, 235, 0)'
        ],
        hover: []

    }]
};
var options = {


};



var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});


// Start of LineChart

var ctx = document.getElementById("myLineChart");

Chart.defaults.global.tooltips.enabled = false;

var data = {


    labels: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5],
    datasets: [{
        label: "A Regular Day",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(208,2,27,0)",
        borderColor: "rgba(208,2,27,0)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(208,2,27,0)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,0)",
        pointHoverBorderColor: "rgba(220,220,220,0)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, -2, 3, -8, 10, -1, 10, 8, -4, 2, -8, -9, 5, 10, 8, 8, 8, 8, 9, 10, 0, 0, 0, 0, 0],
        spanGaps: false,
    }]
};

var options = {

    labels: {
        display: false
    },



    // timeline



    legend: {
        display: false,
        position: 'bottom'
    },

    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: false

        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: false

        }],
    }




};

var myLineChart = new Chart(ctx, {

    type: 'line',
    data: data,
    options: options,


});


// End of LineChart

// start of reg-day
const content = $('.content');
const co_first = $('.v1');
const co_second = $('.v2');
const co_static = $('.content-static');

//  co_statict=new Waypoint.Sticky({

// element: $('.content-static')[0]

// })

// console.log(co_static)

// if($(co_static).length > 0) {
//  console.log('here')
//  console.log(Waypoint)
//     var sticky = new Waypoint.Sticky({
//         element: co_static[0]
//     });
// }

$(window).scroll(onScroll);
const co_static_top = co_static.offset().top;
let isStuck = false;
let sticky;

const og_height = $('.content-main.content-static').height() + 'px !important';
const style = document.createElement('style');
style.innerHTML = '.og_height { height: ' + og_height + '; }';
document.head.appendChild(style)

function onScroll(e) {
    const scrollPos = $(window).scrollTop();
    // console.clear()

    if (scrollPos > co_static_top && !isStuck) {
        isStuck = true;

        co_static.css('height', $(window).height() + 'px')

        sticky = new Waypoint.Sticky({
            element: co_static[0]
        });

        $('.container-main.reg-day .sticky-wrapper').addClass('og_height');

        // co_static.css({
        //  position: 'fixed',
        //  top: '0',
        //  left: '0',
        //  width: '100%',
        //  height: '100%',
        //  overflow: 'auto',
        //  zIndex: 2,
        // });
    } else if (scrollPos < co_static_top) {
        isStuck = false;
        co_static.css('height', 'initial');
        if (sticky) {
            sticky.destroy();
        }
    }
}

co_static.scroll(onStaticScroll);

function onStaticScroll() {
    if (isStuck === false) return;
    // console.clear();
    let height = 0;
    $(this).children().each((idx, el) => {
        height += $(el).outerHeight();
    }, 0)
    // console.log('here', $(this).scrollTop(), $(window).scrollTop(), height)
}

// End of reg day

function toRight() {
    //vanilla/plain JS faster
    const firstStackElememt = document.querySelector('.money.stack-active');

    if (firstStackElememt) {
        firstStackElememt.nextElementSibling.classList.add('stack-active');
        firstStackElememt.classList.remove('stack-active');
    }

/*** Works, but jQuery too slow in DOM manipulation and causes bugs ***/
    // $('.money.stack-active')
    //     .first().removeClass('stack-active')
    //     .next().addClass('stack-active');
}




function toLeft() {
    //vanilla/plain JS faster
    const allBoozeElements = document.querySelectorAll('.booze.stack-active');
    const lastBoozeElement = allBoozeElements[allBoozeElements.length -1];

    if (lastBoozeElement) {
        lastBoozeElement.previousElementSibling.classList.add('stack-active');
        lastBoozeElement.classList.remove('stack-active');
    }

/*** Works, but jQuery too slow in DOM manipulation and causes bugs ***/
    // $('.booze.stack-active')
    //     .last().removeClass('stack-active')
    //     .prev().addClass('stack-active');
    
}




function makeItRain() {
    $('.booze.stack-active').removeClass('stack-active');
    $('.money').addClass('stack-active');
}

function makeItDrain() {
    $('.money.stack-active').removeClass('stack-active');
    $('.booze').addClass('stack-active');
}

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0],
    step: 1,
    range: {
        'min': [0],
        'max': [30]
    }
});

const sliderMax = slider.noUiSlider.options.range.max[0];


var rangeSliderValueElement = document.getElementById('slider-range-value');


var curVal;
var newVal;

slider.noUiSlider.on('update', function(values, handle) {
    newVal = Number(values[handle]);

    if (curVal === undefined) {
        // console.log('undefined');
        curVal = 0;
    }


    if (curVal < newVal) {
        console.log('right-1', curVal, newVal);

        curVal = Number(values[handle]);
        console.log('right-2', curVal, newVal);
        toRight();
        if (curVal === sliderMax) {
            makeItDrain();
        }
    } else if (curVal > newVal) {
        console.log('left-1', curVal, newVal);
        curVal = Number(values[handle]);
        console.log('left-2', curVal, newVal);
        toLeft();
        if (curVal === 0) {
            makeItRain();
        } 
    }



});



//time line

(function() {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
 

})();
