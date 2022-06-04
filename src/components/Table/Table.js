import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import moment from "moment";

import "./Table.css";

function Table() {
  const product = useSelector((state) => state.products[0]);

  const formattedData = product?.sales.map((sale) => {
    const {
      weekEnding,
      retailSales,
      wholesaleSales,
      unitsSold,
      retailerMargin,
    } = sale;

    const formattedWeekEnding = moment(weekEnding).format("MM-DD-YY");
    const dollarFormat = Intl.NumberFormat("en-US");
    const formattedRetailSale = "$" + dollarFormat.format(retailSales);
    const formattedWholesaleSales = "$" + dollarFormat.format(wholesaleSales);
    const formattedRetailerMargin = "$" + dollarFormat.format(retailerMargin);

    return {
      weekEnding: formattedWeekEnding,
      retailSales: formattedRetailSale,
      wholesaleSales: formattedWholesaleSales,
      retailerMargin: formattedRetailerMargin,
      unitsSold,
    };
  });
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => formattedData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div
      className="table-container"
      style={{
        maxHeight: 600,
        overflowY: "scroll",
        padding: 0,
      }}
    >
      {product && (
        <table {...getTableProps} style={{ maxHeight: 400 }}>
          <thead>
            {headerGroups.map((headerGroup) => {
              return (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <th style={{display: 'flex', alignItems:"flex-end"}}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted && !column.isSortedDesc ? (
                            <MdKeyboardArrowUp />
                          ) : (
                            <MdKeyboardArrowDown />
                          )}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
