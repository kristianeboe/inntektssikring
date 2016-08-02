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
      insurance_payout = Math.floor((Session.get("insurance_payout")*0.95 / 12))
      salary_loss = Math.floor((Session.get("salary_loss") / 12))
      insurance_data = [{
          name: "NAV",
          y: payout,
          color: "#e6d1b8"
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
          xAxis: {
            categories: ['Dagens<br>lønn', 'Nav+<br>Storebrand', 'Tapt<br>inntekt'],
            labels: {
              style: {
                fontSize: '15px',
                //width: '20px'
              }
            }
          },
          yAxis: {
            min: 0,
            labels: {
              enabled: false
            },
            title: {
              text: ""
            },
          },
          plotOptions: {
            column: {
              stacking: 'normal',
              dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                  textShadow: 'none'
                }
              }
            }
          },
          series: [{
            showInLegend: true,
            name: "Utbetaling av Storebrand",
            color: "#a8c432",
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
