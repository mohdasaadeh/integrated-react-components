import React from "react";

export const AutoSelectDatesPanel: React.FC = () => {
  const currentDate = new Date();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    return `${month} ${day}, '${Number(year.toString().slice(-2))}`;
  };

  const formatDateWithoutYear = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });

    return `${month} ${day}`;
  };

  const getLastDayInLastMonth = () => {
    return new Date(
      new Date(Date.UTC(currentYear, currentMonth, 1)).getTime() -
        24 * 3600 * 1000
    ).getDate();
  };

  const getLastDateInLastMonth = () => {
    return new Date(
      Date.UTC(
        currentMonth === 0 ? currentYear - 1 : currentYear,
        currentMonth === 0 ? 11 : currentMonth - 1,
        getLastDayInLastMonth()
      )
    );
  };

  const getAutoSelectDates = () => {
    return [
      {
        label: "Last 30 days",
        dates: [new Date(Date.now() - 30 * 24 * 3600 * 1000), currentDate],
      },
      {
        label: "This month",
        dates: [new Date(Date.UTC(currentYear, currentMonth, 1)), currentDate],
      },
      {
        label: "Last month",
        dates: [
          new Date(
            Date.UTC(
              currentMonth === 0 ? currentYear - 1 : currentYear,
              currentMonth === 0 ? 11 : currentMonth - 1,
              1
            )
          ),
          getLastDateInLastMonth(),
        ],
      },
      {
        label: "Last 3 months",
        dates: [
          new Date(
            Date.UTC(
              currentMonth < 3 ? currentYear - 1 : currentYear,
              currentMonth < 3 ? 11 + (currentMonth - 2) : currentMonth - 3,
              1
            )
          ),
          getLastDateInLastMonth(),
        ],
      },
      {
        label: "Last 6 months",
        dates: [
          new Date(
            Date.UTC(
              currentMonth < 6 ? currentYear - 1 : currentYear,
              currentMonth < 6 ? 11 + (currentMonth - 5) : currentMonth - 6,
              1
            )
          ),
          getLastDateInLastMonth(),
        ],
      },
      {
        label: "This year",
        dates: [new Date(Date.UTC(currentYear, 0, 1)), currentDate],
      },
      {
        label: "Last year",
        dates: [
          new Date(Date.UTC(currentYear - 1, 0, 1)),
          new Date(Date.UTC(currentYear - 1, 11, 31)),
        ],
      },
    ];
  };

  const getAutoSelectDatesTexts = () => {
    const intervals = getAutoSelectDates().map((interval) => interval.dates);

    return [
      `${formatDateWithoutYear(intervals[0][0])} - ${formatDateWithoutYear(
        intervals[0][1]
      )}`,
      `${formatDateWithoutYear(intervals[1][0])} - ${formatDateWithoutYear(
        intervals[1][1]
      )}`,
      `${formatDateWithoutYear(intervals[2][0])} - ${formatDateWithoutYear(
        intervals[2][1]
      )}`,
      `${formatDateWithoutYear(intervals[3][0])} - ${formatDateWithoutYear(
        intervals[3][1]
      )}`,
      `${formatDateWithoutYear(intervals[4][0])} - ${formatDateWithoutYear(
        intervals[4][1]
      )}`,
      `${formatDateWithoutYear(intervals[5][0])} - ${formatDateWithoutYear(
        intervals[5][1]
      )}`,
      `${formatDate(intervals[6][0])} - ${formatDate(intervals[6][1])}`,
    ];
  };

  const renderAutoSelectDates = () => {
    return getAutoSelectDates().map((interval, index) => {
      const { label, dates } = interval;

      return (
        <React.Fragment key={interval.label + "-" + index}>
          <li className="my-2 pb-2 pl-4 cursor-pointer border-b-2 border-[#f0f0f0]">
            <span className="text-[#000000AA] text-base">{label}</span>{" "}
            <span className="text-[#00000040]">
              {getAutoSelectDatesTexts()[index]}
            </span>
          </li>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="h-[329px] w-[280px] border-r-2 border-[#f0f0f0] overflow-auto">
      <ul>{renderAutoSelectDates()}</ul>
    </div>
  );
};
