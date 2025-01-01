import React from "react";
import "./line-graph.css";

export function LineGraph() {
  // Sample data points
  const dataPoints = [
    { x: 0, y: 900 },
    { x: 1, y: 300 },
    { x: 2, y: 500 },
    { x: 3, y: 480 },
    { x: 4, y: 200 },
    { x: 5, y: 100 },
    { x: 6, y: 700 },
    { x: 7, y: 300 },
    { x: 8, y: 500 },
    { x: 9, y: 900 },
  ];

  // Calculate viewBox dimensions
  const width = 1000;
  const height = 400;
  const padding = 40;

  // Scale data points to fit the SVG
  const xScale = (width - 2 * padding) / 9;
  const yScale = (height - 2 * padding) / 1000;

  // Generate the path for the line
  const pathData = dataPoints
    .map((point, i) => {
      const x = padding + point.x * xScale;
      const y = height - padding - point.y * yScale;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  // Generate grid lines
  const gridLinesY = Array.from({ length: 5 }, (_, i) => {
    const y = padding + (i * (height - 2 * padding)) / 4;
    return (
      <line
        key={`gridY${i}`}
        x1={padding}
        y1={y}
        x2={width - padding}
        y2={y}
        className="grid-line"
      />
    );
  });

  const gridLinesX = Array.from({ length: 10 }, (_, i) => {
    const x = padding + (i * (width - 2 * padding)) / 9;
    return (
      <line
        key={`gridX${i}`}
        x1={x}
        y1={padding}
        x2={x}
        y2={height - padding}
        className="grid-line"
      />
    );
  });

  // Generate y-axis labels
  const yLabels = Array.from({ length: 5 }, (_, i) => {
    const value = 1000 - i * 250;
    const y = padding + (i * (height - 2 * padding)) / 4;
    return (
      <text
        key={`labelY${i}`}
        x={padding - 10}
        y={y}
        className="axis-label"
        textAnchor="end"
        dominantBaseline="middle"
      >
        {value}
      </text>
    );
  });

  // Generate x-axis labels
  const xLabels = Array.from({ length: 10 }, (_, i) => {
    const x = padding + (i * (width - 2 * padding)) / 9;
    return (
      <text
        key={`labelX${i}`}
        x={x}
        y={height - padding + 20}
        className="axis-label"
        textAnchor="middle"
      >
        {i}
      </text>
    );
  });

  return (
    <div className="graph-container ">
      <svg viewBox={`0 0 ${width} ${height}`}>
        {/* Grid lines */}
        {gridLinesY}
        {gridLinesX}

        {/* Axis labels */}
        {yLabels}
        {xLabels}

        {/* Line path */}
        <path d={pathData} className="line-path" />

        {/* Data points */}
        {dataPoints.map((point, i) => (
          <circle
            key={i}
            cx={padding + point.x * xScale}
            cy={height - padding - point.y * yScale}
            r="4"
            className="data-point"
          />
        ))}
      </svg>
    </div>
  );
}

export default LineGraph;
