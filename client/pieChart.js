import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

import './index.html';

if (Meteor.isClient) {

  Template.pieChartModule.helpers({
    createChart: function() {
      // Gather data:
      net_salary = Math.floor((Session.get("net_salary") / 12))
      payout = Math.floor((Session.get("payout") / 12))
      insurance_payout = Math.floor((Session.get("insurance_payout") * 0.95 / 12))
      salary_loss = Math.floor((Session.get("salary_loss") / 12))
      insurance_data = [{
          name: "NAV",
          y: payout,
          color: "#b0dfdb"
        }, {
          name: "Storebrand",
          y: insurance_payout,
          color: "#a8c432"
        }, {
          name: "Tap",
          y: salary_loss,
          color: "#da291c"
        }]
        // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        var Highcharts = require('highcharts');
        // Create standard Highcharts chart with options:

        Highcharts.chart('pieChart', {
          chart: {
            height: 300,
            type: 'pie'
          },
          title: {
            text: "Utbetalinger i måneden etter skatt"
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>:<br> {point.y} kr',
                style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
              }
            }
          },
          series: [{
            name: "Uførekalkulator",
            colorByPoint: true,
            showInLegend: false,
            data: insurance_data
          }],
          credits: {
            enabled: false
          },
        })
      })
    }
  })
}
