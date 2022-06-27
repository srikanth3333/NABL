import React from 'react';

import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Export,
} from 'devextreme-react/pie-chart';

const populationByRegions = [{
  region: 'Asia',
  val: 4119626293,
}, {
  region: 'Africa',
  val: 1012956064,
}, {
  region: 'Northern America',
  val: 344124520,
}, {
  region: 'Latin America and the Caribbean',
  val: 590946440,
}, {
  region: 'Europe',
  val: 727082222,
}, {
  region: 'Oceania',
  val: 35104756,
}];

class BarChart extends React.Component {
  render() {
    return (
      <PieChart
        id="pie"
        type="doughnut"
        // title="Recruiter Progress"
        palette="Soft Pastel"
        dataSource={populationByRegions}
      >
        <Series argumentField="region">
          <Label visible={true} format="millions">
            <Connector visible={true} />
          </Label>
        </Series>
        {/* <Export enabled={true} /> */}
        <Legend
          margin={0}
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
        />
      </PieChart>
    );
  }

  
}

export default BarChart;