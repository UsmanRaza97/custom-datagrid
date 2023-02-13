import React from "react";
import ConfigurableDataGrid from "./ConfigurableDataGrid";

const columns = [
  { label: "Name", key: "name", dataType: "string" },
  { label: "Date", key: "date", dataType: "date" },
  { label: "Category", key: "category", dataType: "string" },
  { label: "Amount", key: "amount", dataType: "number" },
  { label: "Created At", key: "created_at", dataType: "date" }
];

const App = () => (
  <div className="app">
    <ConfigurableDataGrid
      columns={columns}
      api="https://us-central1-fir-apps-services.cloudfunctions.net/transactions"
      titleColumnKey="name"
      subtitleColumnKey="category"
    />
  </div>
);

export default App;
