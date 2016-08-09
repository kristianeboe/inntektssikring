Template.dynamicChart.helpers({
  dynamicChart() {
    var Highcharts = require('highcharts');
    $(function() {

      net_salary = Math.floor((Session.get("net_salary") / 12))
      payout = Math.floor((Session.get("payout") / 12))
      insurance_payout = Math.floor((Session.get("insurance_payout") * 0.95 / 12))
      salary_loss = Math.floor((Session.get("salary_loss") / 12))

      new_monthly_salary = (net_salary - salary_loss).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

      insurance_data = [{
        name: "NAV/Folketrygd",
        y: payout,
        color: "#b0dfdb"
      }, {
        name: "Utbetaling fra <br><b>Storebrand</b>",
        y: insurance_payout,
        color: "#a8c432"
      }, {
        name: "Tapt<br><b>inntekt</b>",
        y: salary_loss,
        color: "#da291c"
      }]

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'dynamicChart',
          height: 300,
          type: 'pie',
          margin: [20, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0,
        },
        title: {
          text: "",
          style: {
            fontWeight: "normal",
            fontFamily: "Open Sans,Arial,ArialMT,sans-serif",
            fontSize: "14px"
          }
        },
        tooltip: {
          pointFormat: '{point.percentage:.1f}%'
        },
        plotOptions: {
          pie: {
            size: '80%',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br> {point.y:,.0f} kr',
              distance: -3,
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                fontWeight: "normal",
                textShadow: 0,
              }
            }
          }
        },

        //series: [{
        //    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        //}],
        series: [{
          colorByPoint: true,
          showInLegend: false,
          data: insurance_data
        }],
        credits: {
          enabled: false
        },
      });

      // The button action
      updateChart = function() {
        net_salary = Math.floor((Session.get("net_salary") / 12))
        payout = Math.floor((Session.get("payout") / 12))
        insurance_payout = Math.floor((Session.get("insurance_payout") * 0.95 / 12))
        salary_loss = Math.floor((Session.get("salary_loss") / 12))

        new_monthly_salary = (net_salary - salary_loss).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

        insurance_data = [{
          name: "NAV/Folketrygd",
          y: payout,
          color: "#b0dfdb"
        }, {
          name: "Utbetaling fra <br><b>Storebrand</b>",
          y: insurance_payout,
          color: "#a8c432"
        }, {
          name: "Tapt<br><b>inntekt</b>",
          y: salary_loss,
          color: "#da291c"
        }]
        chart.series[0].setData(insurance_data);
      };
    });
  }
})

updateChart = function() {
}
