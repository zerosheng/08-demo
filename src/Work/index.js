import React from 'react';
import echarts from 'echarts'
class Work extends React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
       title: {
         text: '我的实例',
         textStyle:{
           color:'red'
         },
         left:'center',
        },
       tooltip: {},
       xAxis: {
        data: ["1","2","3","4","5","6"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
     }]
   })
  }
  render(){
    return(
      <div id='main' style={{width: '100%',height:'auto'}}>

      </div>
    )
  }
}

export default Work;
