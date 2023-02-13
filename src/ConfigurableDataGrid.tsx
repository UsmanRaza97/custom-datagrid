import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, List, Pagination, PageNumber } from "./StyledComponents";
import paginate from "./components/Paginate";

interface Column {
  label: string;
  key: string;
  dataType: string;
}

interface IProps {
  columns: Column[];
  api: string;
  titleColumnKey?: string;
  subtitleColumnKey?: string;
}

const ConfigurableDataGrid = ({
  api,
  titleColumnKey,
  subtitleColumnKey,
  columns
}: IProps) => {
  const [data, setData] = useState<{ [key: string]: any; id: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(api);
      setData(response.data.data);
      setIsLoading(false);
    };

    fetchData();
  }, [api]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const titleColumn = titleColumnKey || columns[0].key;
  const subtitleColumn = subtitleColumnKey || columns[1].key;

  const paginatedData = paginate(data, currentPage, dataPerPage);
  const numberOfPages = Math.ceil(data.length / 10);

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderList = () => (
    <List>
      {paginatedData.map((row) => (
        <li key={row.id}>
          <h3>
            {columns.find((col) => col.key === titleColumnKey)?.label}:{" "}
            {row[titleColumn]}
          </h3>

          <p>
            {columns.find((col) => col.key === subtitleColumnKey)?.label}:{" "}
            {row[subtitleColumn]}
          </p>
        </li>
      ))}
    </List>
  );

  return (
    <>
      <DataGrid>
        {renderTable()}
        {renderList()}
      </DataGrid>
      <Pagination>
        <PageNumber
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </PageNumber>
        <PageNumber
          onClick={() =>
            currentPage !== 1 ? setCurrentPage((prev) => prev - 1) : {}
          }
          disabled={currentPage === 1}
        >
          &lt;
        </PageNumber>
        <select
          value={currentPage}
          onChange={(e) => setCurrentPage(Number(e.target.value))}
        >
          {[...Array(numberOfPages).keys()].map((page) => (
            <option key={page + 1} value={page + 1}>
              {page + 1}
            </option>
          ))}
        </select>
        <PageNumber
          onClick={() =>
            currentPage !== numberOfPages
              ? setCurrentPage((prev) => prev + 1)
              : {}
          }
          disabled={currentPage === numberOfPages}
        >
          &gt;
        </PageNumber>
        <PageNumber
          onClick={() => setCurrentPage(numberOfPages)}
          disabled={currentPage === numberOfPages}
        >
          &gt;&gt;
        </PageNumber>
      </Pagination>
    </>
  );
};

export default ConfigurableDataGrid;
