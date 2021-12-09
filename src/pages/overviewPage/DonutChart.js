import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
} from "@syncfusion/ej2-react-charts";

const DonutChart = () => {
  let data1 = [
    { x: "Chua lam 24 100%", y: 12, text: "100%" },
    { x: "Dang lam", y: 8, text: "8%" },
    { x: "Cho danh gia", y: 15, text: "15%" },
    { x: "Hoan thanh", y: 11, text: "11%" },
    { x: "Khac", y: 18, text: "18%" },
  ];

  return (
    <div className="control-pane">
      <div className="control-section">
        <AccumulationChartComponent
        height="70% "
          background="#CCFFE5"
          id="pie-chart"
          legendSettings={{
            visible: true,
            position: "Right",
            textStyle: {fontSize:1000},
            shapeWidth:15,
            shapeHeight:15
          }}
          enableSmartLabels={true}
          tooltip={{ enable: true }}
        subTitle = "khoa"
        >
          <Inject
            services={[AccumulationLegend, PieSeries, AccumulationDataLabel]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Project"
              dataSource={data1}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode={true}
              explodeOffset="10%"
              explodeIndex={3}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "300px",
                  color: "#ffffff",
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default DonutChart;
