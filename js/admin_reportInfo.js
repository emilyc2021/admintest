$(document).ready(function () {

    // 報表測試 chart.js
    const label = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: '月營業額(萬)',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                //TODO:抓DB資料改寫到這即可!!! 
                data: [0, 10, 5, 2, 10, 15, 17,],
            }]
        }
    });

});
