import { Link } from "react-router-dom";
import "./chartBox.scss";
import { LineChart, Line, Tooltip,  ResponsiveContainer } from 'recharts';

type Props = {
  color: string
  icon: string
  title: string
  number: string | number
  dataKey: string
  percentage: number
  chartData: object[]
}


const ChartBox = (props: Props) => {
  return <div className="chartBox">
    <div className="boxInfo">
      <div className="title">
        <img src={props.icon} alt="" />
        <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color: props.color}}>View all</Link>
      
    </div>
    <div className="chartInfo">
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <LineChart  data={props.chartData}>
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke={props.color}
              strokeWidth={2}
              dot={false}
            />
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              position={{x: 20, y:60}}
            />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="texts">
        <span className="percentage" style={{color: props.percentage<0? "tomato":"limegreen"}}>{props.percentage}%</span>
        <span className="duration">last month</span>
      </div>
    </div>
  </div>;
};

export default ChartBox;
