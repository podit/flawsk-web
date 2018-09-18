function dgraph() {
    var sd = document.getElementById("startdate").value;
    var ed = document.getElementById("enddate").value;
    var url = `http://flawsk-dev.eu-west-2.elasticbeanstalk.com/dates/${sd}/${ed}`
//    var url = `http://127.0.0.1:5000/dates/${sd}/${ed}`
    document.getElementById("out").innerHTML = url;
    var splot = c3.generate({
        bindto: '#out',
        data: {
            type: 'line',
            keys: {
                x: 'time',
                value:['low','open','close','high']
            },
            //x: 'time',
            xFormat: '%Y-%m-%d %H:%M:%S',
            url: url,
            mimeType: 'json'
        },
        axis: {
            x: {
                label: 'Date & Time',
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d %H:%M:%S'
                }
            }
        },
        point: {
            show: false
        },
        size: {
            height: 600
        },
        zoom: {
            enabled: true,
            rescale: true
        }
    });
}

var wplot = c3.generate({
    bindto: '#weekplot',
    data: {
        type: 'line',
        keys: {
            x: 'time',
            value:['close']
        },
        xFormat: '%Y-%m-%d %H:%M:%S',
        url: 'http://flawsk-dev.eu-west-2.elasticbeanstalk.com/jdatwavg',
//        url: 'http://127.0.0.1:5000/jdatwavg',
        mimeType: 'json'
    },
    axis: {
        x: {
            label: 'Date & Time',
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:%M:%S'
            }
        }
    },
    point: {
        show: false
    },
    size: {
        height: 600
    },
// Adds zoom capabilities to the chart
    zoom: {
        enabled: true,
        rescale: true
    }
});

var volplot = c3.generate({
    bindto: '#dayplot',
    data: {
        keys: {
            x: 'time',
            value:['vol']
        },
        xFormat: '%Y-%m-%d %H:%M:%S',
        url: 'http://flawsk-dev.eu-west-2.elasticbeanstalk.com/jdatvol',
//        url: 'http://127.0.0.1:5000/jdatvol',
        mimeType: 'json'
    },
    axis:{
        x: {
            type: 'timeseries',
            tick:{
                format: '%Y-%m-%d %H:%M:%S'
            }
        }
    },
    point: {
        show: false
    }
});

//=#-=#-=Displays weekly close average (depreciated)=#=-#=
var plot = c3.generate({
    bindto: '#plot',
    data: {
        type: 'line',
        keys: {
            x: 'time',
            value:['close']
        },
        xFormat: '%Y-%m-%d %H:%M:%S',
        url: 'http://flawsk-dev.eu-west-2.elasticbeanstalk.com/jdatwcavg',
//        url: 'http://127.0.0.1:5000/jdatwcavg',
        mimeType: 'json'
    },
    axis: {
        x: {
            label: 'Date & Time',
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:%M:%S'
            }
        }
    },
    point: {
        show: false
    },
    size: {
        height: 400
    }
});


var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['exp', 0, 1, 2, 4, 8, 16, 32, 64, 128]
        ]
    }
});

var chart3 = c3.generate({
    bindto: '#chart3',
    data: {
        xs: {
            data2: "data1"
        },
        columns: [
            ['data1', -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ],
            ['data2', 16,  8,  4,  2,  1, 0, 1, 2, 4, 8, 16]
        ]
    }
});
