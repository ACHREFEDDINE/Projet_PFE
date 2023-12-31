import React, { Component } from "react";
import Datamap from "datamaps/dist/datamaps.tun";
import d3 from "d3";
import TunisiaJson from "./Tunisia.topo.json";

class ChoroplethMap extends Component {
  componentDidMount() {
    // Datamaps expect data in format:
    // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
    //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
    let dataset = {};

    // We need to colorize every country based on "numberOfWhatever"
    // colors should be uniq for every value.
    // For this purpose we create palette(using min/max this.props.data-value)
    let onlyValues = this.props.data.map(function (obj) {
      return obj[1];
    });
    let minValue = Math.min.apply(null, onlyValues),
      maxValue = Math.max.apply(null, onlyValues);

    // create color palette function
    // color can be whatever you wish
    let paletteScale = d3.scale
      .linear()
      .domain([minValue, maxValue])
      .range(["#EFEFFF", "#02386F"]); // blue color

    // fill dataset in appropriate format
    this.props.data.forEach(function (item) {
      //
      // item example value ["USA", 70]
      let iso = item[0],
        value = item[1];
      dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
    });

    let map = new Datamap({
      element: document.getElementById("cloropleth_map"),
      scope: "tunisia",
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: "#444",
        highlightBorderWidth: 1,
        borderWidth: 0.5,
        dataJson: TunisiaJson,
        popupTemplate: function (geo, data) {
          // don't show tooltip if country don't present in dataset
          if (!data) {
            return;
          }
          // tooltip content
          return [
            '<div className="hoverinfo">',
            "<strong>",
            geo.properties.name,
            "</strong>",
            "<br>Count: <strong>",
            data.numberOfThings,
            "</strong>",
            "</div>",
          ].join("");
        },
      },
      fills: {
        HIGH: "#afafaf",
        LOW: "#123456",
        MEDIUM: "blue",
        UNKNOWN: "rgb(0,0,0)",
        defaultFill: "#eee",
      },
      data: dataset,
      setProjection: function (element) {
        var projection = d3.geo
          .mercator()
          .center([20, 35]) // always in [East Latitude, North Longitude]
          .scale(2000)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geo.path().projection(projection);
        return { path: path, projection: projection };
      },
    });
  }
  render() {
    return (
      <div
        id="cloropleth_map"
        style={{
          width: "500%",
          height: "600%",
        }}
      ></div>
    );
  }
}

export default ChoroplethMap;
