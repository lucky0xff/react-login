import React, {
  Component
} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  // chart: {
  //   plotBackgroundColor: null,
  //   plotBorderWidth: null,
  //   plotShadow: false
  // },
  // title: {
  //   text: '图书出借量占比' // 标题
  // },
  // plotOptions: {
  //     pie: {
  //        allowPointSelect: true,
  //        cursor: 'pointer',
  //        dataLabels: {
  //           enabled: false           
  //        },
  //        showInLegend: true
  //     }
  //  },
  
  // series: [{ // 数据列
  //   type: 'pie',
  //     name: 'Browser share',
  //     data: [
  //        ['文学类',   45.0],
  //        ['艺术历史类',       26.8],
  //        {
  //           name: '数理科学和化学',
  //           y: 12.8,
  //           sliced: true,
  //           selected: true
  //        },
  //        ['经济类',    8.5],
  //        ['生物科学',     6.2],
  //        ['其它',   0.7]
  //     ]
  // }]
  chart: {
      type: 'bar' //指定图表的类型，默认是折线图（line）
    },
    title: {
      text: 'My Chart' // 标题
    },
    xAxis: {
      categories: ['苹果', '香蕉', '橙子'] // x 轴分类
    },
    yAxis: {
      title: {
        text: '吃水果个数' // y 轴标题
      }
    },
    series: [{ // 数据列
      name: '小明', // 数据列名
      data: [1, 0, 4] // 数据
    }, {
      name: '小红',
      data: [5, 7, 3]
    }]
}

class Highchart extends Component {

  render() {
    return ( 
      <div>
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </div>
    );
  }
}

export default Highchart;