import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

if(Meteor.isClient) {

  Template.chartModule.helpers({
    createChart: function () {
      // Gather data:
      net_salary = Math.floor(Session.get("net_salary")/12)
      payout = Math.floor(Session.get("payout")/12)
      salary_loss = Math.floor(Session.get("salary_loss")/12)



      series_data = [{y:net_salary, color: "#b0dfdb"}, {y:payout, color:"#b0dfdb"}, {y: salary_loss, color: "#da291c"}]

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        var Highcharts = require('highcharts');
        // Create standard Highcharts chart with options:

        Highcharts.chart('chart', {

          series: [{
            showInLegend: false,
            type: 'column',
            data: series_data
          }],
          title: {
            text: "Netto utbetalt i måneden"
          },
          xAxis: {
            categories: ['Lønn', 'Trygd', 'Tap'],
            labels: {
                style: {
                    //color: 'red',
                    fontSize:'15px'
                }
            }
          },
          yAxis: {
            title: {
              text: ""
            }
          },
          chart: {
            height: 300
          },
          plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                }
            }
        }
        })
      })
    }
  })
}
