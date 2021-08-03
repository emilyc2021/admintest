$(document).ready(function () {

    // 報表測試 chart.js
    // 月營收狀況折線圖
    const label = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var ctx1 = document.getElementById('myChart1');
    var myChart1 = new Chart(ctx1, {
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
    // 熱門餐點圓餅圖
    const label2 = ['A餐', 'B餐', 'C餐', 'D餐', 'E餐'];
    var ctx2 = document.getElementById('myChart2');
    var myChart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: label2,
            datasets: [{
                label: '熱門餐點',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    // 'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    // 'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    // 'rgb(201, 203, 207)'
                ],
                borderWidth: 1,
                //TODO:抓DB資料改寫到這即可!!! 
                data: [75, 50, 35, 20, 10],
                hoverOffset: 4
            }]
        }
    });

});
