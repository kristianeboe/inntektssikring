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
          name: "NAV/Folketrygd",
          y: payout,
          color: "#b0dfdb"
        }, {
          name: "Utbetaling fra <br><b>Storebrand</b>",
          y: insurance_payout,
          color: "#a8c432"
        }, {
          name: "Udekket tap",
          y: salary_loss,
          color: "#da291c"
        }]
        // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        var Highcharts = require('highcharts');
        // Create standard Highcharts chart with options:

        Highcharts.chart('pieChart', {
          chart: {
            height: 320,
            type: 'pie',
            margin: [20, 0, 0, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,

          },
          title: {
            text: "Figurens total tilsvarer din nåværende månedslønn",
            style: {
              fontWeight: "normal",
              fontFamily: "Open Sans,Arial,ArialMT,sans-serif",
              symbolHeight: 150,
              marginTop: 20
            }
          },
          tooltip: {
            pointFormat: '{point.percentage:.1f}%'
          },
          plotOptions: {
            pie: {
              size:'90%',
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br> {point.y:,.0f} kr',
                distance: -5,
                style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                  fontWeight: "normal",
                  textShadow: 0,
                }
              }
            }
          },
          series: [{
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
