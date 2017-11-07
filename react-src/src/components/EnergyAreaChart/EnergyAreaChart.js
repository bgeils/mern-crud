import React, { Component } from "react";
import { AreaChart } from "react-d3-basic";

class EnergyAreaChart extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      active: true
    };
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {

    var data = this.props.data;
    var chartSeries = [
        {
          field: "energy",
          name: "Energy Usage",
          color: "#ff7f0e",
          area: true,
          style: {
            strokeOpacity: 1,
            fillOpacity: 0.2
          }
        }
      ],
      x = function(d) {
        return d.start_time;
      },
      xScale = "time",
      y = function(d) {
        return +d;
      };

    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
        <AreaChart
          data={data}
          chartSeries={chartSeries}
          x={x}
          y={y}
          xScale={xScale}
        />
      </div>
    );
  }
}
export default EnergyAreaChart;
