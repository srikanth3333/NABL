import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
} from 'devextreme-react/chart';

const dataSource = [{
  country: 'China',
  y014: 233866959,
  y1564: 1170914102,
  y65: 171774113,
}, {
  country: 'India',
  y014: 373419115,
  y1564: 882520945,
  y65: 76063757,
}, {
  country: 'United States',
  y014: 60554755,
  y1564: 213172625,
  y65: 54835293,
}, {
  country: 'Indonesia',
  y014: 65715705,
  y1564: 177014815,
  y65: 18053690,
}, {
  country: 'Brazil',
  y014: 45278034,
  y1564: 144391494,
  y65: 17190842,
}, {
  country: 'Russia',
  y014: 24465156,
  y1564: 96123777,
  y65: 20412243,
}];

const types = ['area', 'stackedarea', 'fullstackedarea'];

class AreaChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: types[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      type: e.value,
    });
  }

  render() {
    return (
      <div id="chart-demo">
        <Chart
          palette="Harmony Light"
          // title="Test Chart"
          dataSource={dataSource}
        >
          <CommonSeriesSettings
            argumentField="country"
            type={this.state.type}
          />
          <Series valueField="y1564" name="15-64 years"></Series>
          <Series valueField="y014" name="0-14 years"></Series>
          <Series valueField="y65" name="65 years and older"></Series>
          <Margin bottom={20} />
          <ArgumentAxis valueMarginsEnabled={false} />
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
          />
          <Export enabled={true} />
        </Chart>
      </div>
    );
  }
}

export default AreaChart;