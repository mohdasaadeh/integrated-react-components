import React from "react";

interface TableProps {
  columnHeaders: string[];
  rows: { header: string; data: string[] }[];
}

export const Table: React.FC<TableProps> = ({ columnHeaders, rows }) => {
  const renderColumnHeaders = () => {
    return columnHeaders.map((columnHeader, index) => {
      return (
        <th
          key={columnHeader + "-" + index}
          scope="col"
          className="bg-[#fcfcff] h-[30px] text-gray-500"
        >
          {columnHeader}
        </th>
      );
    });
  };

  const renderRows = () => {
    return rows.map((row, rowIndex) => {
      const { header, data } = row;

      const rowData = data.map((item, itemIndex) => {
        return (
          <td key={item + "-" + itemIndex} className="bg-white cursor-pointer">
            {item}
          </td>
        );
      });

      return (
        <tr key={header + "-" + rowIndex} className="border-b-[1px]">
          <th
            scope="col"
            className="bg-white border-b-[1px] fixed flex justify-start items-center shadow-element"
          >
            {header}
          </th>
          <td className="bg-white "></td>
          {rowData}
        </tr>
      );
    });
  };

  return (
    <div className="flex justify-start items-center">
      <div className="w-[500px] relative overflow-scroll no-scrollbar">
        <table className="w-[500px] table-fixed">
          <thead>
            <tr className="border-y-[2px]">
              <th
                scope="col"
                className="bg-[#fcfcff] h-[30px] text-gray-500 border-b-[2px] fixed flex justify-start items-center shadow-element-header"
              >
                BREAKOUT
              </th>
              <th className="h-[30px]"></th>
              {renderColumnHeaders()}
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  );
};
