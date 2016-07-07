import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if(Meteor.isClient) {

  Template.chartModule.helpers({
    createChart: function () {
      // Gather data:
      net_salary = Math.floor(Session.get("net_salary")/12)
      payout = Math.floor(Session.get("payout")/12)
      salary_loss = Math.floor(Session.get("salary_loss")/12)



      series_data = [net_salary, payout, {y: salary_loss, color: "red"}]

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
          xAxis: {
            categories: ['Dagens månedslønn', 'Månedslønn ved uførhet', 'Penger du taper hver måned']
          },
          yAxis: {
            title: {
              text: "Netto utbetalt månedslønn"
            }
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
