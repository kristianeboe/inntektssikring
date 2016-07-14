import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

import './index.html';

if (Meteor.isClient) {

  Template.chartModule.helpers({
    createChart: function() {
      // Gather data:
      net_salary = Math.floor((Session.get("net_salary") / 12))
      payout = Math.floor((Session.get("payout") / 12))
      insurance_payout = Math.floor((Session.get("insurance_payout") / 12))
      console.log(insurance_payout);
      salary_loss = Math.floor((Session.get("salary_loss") / 12))

      base_data = [{
        y: net_salary,
        color: "#e6d1b8"
      }, {
        y: payout,
        color: "#b0dfdb"
      }, {
        y: salary_loss,
        color: "#da291c"
      }]

      insurance_data = [{
        y: 0,
        color: "#e6d1b8"
      }, {
        y: insurance_payout,
        color: "#a8c432"
      }, {
        y: 0,
        color: "#da291c"
      }]
      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        var Highcharts = require('highcharts');
        // Create standard Highcharts chart with options:

        Highcharts.chart('chart', {
          chart: {
            height: 300,
            type: 'column'
          },
          title: {
            text: "Netto utbetalt i måneden"
          },
          xAxis: {
            categories: ['Lønn', 'Folketrygd +<br>Storebrand', 'Tap'],
            labels: {
              rotation: -45,
              style: {
                fontSize: '15px',
                //width: '20px'
              }
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: ""
            },
          },
          plotOptions: {
            column: {
              stacking: 'normal',
              dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                style: {
                  textShadow: 'none'
                }
              }
            }
          },
          series: [{
            showInLegend: false,
            data: insurance_data
          }, {
            showInLegend: false,
            data: base_data
          }]
        })
      })
    }
  })
}
