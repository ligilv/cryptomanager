import {View, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import React, {useState} from 'react';
import DateBar from './dateBar';

const Graph = ({PointColor}) => {
  const [day, setDay] = useState('24h');
  const setSelectedDay = data => {
    setDay(data);
    setGraphData(Random());
  };
  const Random = () => {
    return [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ];
  };
  const [graphData, setGraphData] = useState(Random());

  return (
    <View>
      <DateBar selectFun={setSelectedDay} />

      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: graphData,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#424445',
          backgroundGradientFrom: '#424445',
          backgroundGradientTo: '#292828',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => PointColor||'red',
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: PointColor||'red',

          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Graph;
