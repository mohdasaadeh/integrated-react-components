import React from "react";
import Chart from "react-apexcharts";

interface AreaChartProps {
  dateType: "Years" | "Months" | "Days";
  startingDate: Date;
  endDate: Date;
}

export const AreaChart: React.FC<AreaChartProps> = ({
  dateType,
  startingDate,
  endDate,
}) => {
  const handleDateInterval = () => {
    const startingDateUtc = Date.UTC(
      startingDate.getFullYear(),
      startingDate.getMonth(),
      startingDate.getDate()
    );
    const endDateUtc = Date.UTC(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );
    const dates = [];

    switch (dateType) {
      case "Years":
        const msPerYear = 1000 * 60 * 60 * 24 * 30 * 365;
        const yearsDiff = Math.floor(
          (endDateUtc - startingDateUtc) / msPerYear
        );

        for (
          let i = startingDate.getFullYear();
          i <= startingDate.getFullYear() + yearsDiff;
          i++
        ) {
          dates.push(i);
        }
        break;
      case "Months":
        const msPerMonth = 1000 * 60 * 60 * 24 * 30;
        const monthsDiff = Math.floor(
          (endDateUtc - startingDateUtc) / msPerMonth
        );

        for (
          let i = startingDate.getMonth() + 1;
          i <= startingDate.getMonth() + 1 + monthsDiff;
          i++
        ) {
          dates.push(i);
        }
        break;
      case "Days":
        const msPerDay = 1000 * 60 * 60 * 24;
        const daysDiff = Math.floor((endDateUtc - startingDateUtc) / msPerDay);

        for (
          let i = startingDate.getDate();
          i <= endDate.getDate() + daysDiff;
          i++
        ) {
          dates.push(i);
        }
        break;
      default:
        break;
    }

    return dates;
  };

  const chart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: handleDateInterval(),
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 70],
      },
    ],
  };

  return (
    <div className="">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chart.options}
            series={chart.series}
            type="area"
            height="650"
          />
        </div>
      </div>
    </div>
  );
};
