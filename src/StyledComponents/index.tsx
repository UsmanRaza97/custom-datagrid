import styled from "styled-components";

export const DataGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    margin-bottom: 2rem;

    th,
    td {
      padding: 0.5rem;
      border: 1px solid #ccc;
    }

    th {
      background-color: #f2f2f2;
    }
  }

  @media (max-width: 767px) {
    table {
      display: none;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  li {
    width: 90%;
    margin: 0.4rem auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 0.7rem;

    h3 {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageNumber = styled.div`
  background-color: #ddd;
  padding: 8px;
  margin-right: 8px;
  cursor: pointer;
  margin-left: 8px;
  &:hover {
    background-color: #ccc;
  }
`;

export const Select = styled.select`
  background-color: #ddd;
  padding: 10px;
  margin-right: 8px;
  cursor: pointer;
`;
