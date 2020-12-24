import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import Weather_Sample from './Weather_Sample.json'
import Weather_Naive_guide from './Weather_Naive_guide.json'
import Weather_Counterfactual from './Weather_Counterfactual.json'

const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
const brandDanger = getStyle('danger') || '#f86c6b'

const MainChartExample = attributes => {
  var max_val=0;
  var min_val=0;
  var labels_ar = [];
  let featured_val = attributes.style.featured;
  const defaultDatasets = (()=>{
    const data1 = []
    const data2 = []
    const data3 = []
    const min_mx_vl = []
    for(let i in Weather_Sample['Data']){
      labels_ar.push(Math.ceil(i));
      data1.push(Weather_Sample['Data'][i][featured_val])
    }
    
    for(let j in Weather_Naive_guide['Data']){
      data2.push(Weather_Naive_guide['Data'][j][featured_val])
    }
    for(let k in Weather_Counterfactual['Data']){
      data3.push(Weather_Counterfactual['Data'][k][featured_val])
    }
    min_mx_vl.push(Math.max.apply(Math, data1))
    min_mx_vl.push(Math.min.apply(Math, data1))
    min_mx_vl.push(Math.max.apply(Math, data2))
    min_mx_vl.push(Math.min.apply(Math, data2))
    min_mx_vl.push(Math.max.apply(Math, data3))
    min_mx_vl.push(Math.min.apply(Math, data3))
    max_val = Math.floor(Math.max.apply(Math, min_mx_vl))
    min_val = Math.floor(Math.min.apply(Math, min_mx_vl))
    return [
      {
        label: 'Sample',
        backgroundColor: 'transparent',
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      },
      {
        label: 'Naive_Guide',
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data2
      },
      {
        label: 'Counterfactual_Example',
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 2,
        data: data3
      }
    ]
  })()

  const defaultOptions = (()=>{
    return {
        maintainAspectRatio: true,
        legend: {
          display: true
        },
        scales: {
           xAxes: [{
             gridLines: {
               drawOnChartArea: true,
               display: true
             },
             scaleLabel: {
              display: true,
              labelString: 'Time'
            } 
           }],
          yAxes: [{
            ticks: {
              //beginAtZero: true,
              min: min_val,
              stepSize: 1,
              max: max_val+1
            },
            gridLines: {
              display: true
            },
            scaleLabel: {
              display: true,
              labelString: featured_val
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  )()
  // render
  return (
    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={labels_ar}
    />
  )
}


export default MainChartExample
