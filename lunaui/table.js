export const table = {
  "table.table": {
    "--bg-table": "255, 255, 255",
    "background-color": "rgba(var(--bg-table), 1)",
    "border-radius": "10px",
  },
  "table.table thead tr th": {
    "border-bottom": "1px solid rgb(229 231 235)",
    padding: "10px",
    color: "gray",
    "font-weight": "500",
    "font-size": "14px",
  },
  "table.table tbody tr th, table.table tbody tr td": {
    "border-bottom": "1px solid rgb(229 231 235)",
    padding: "10px",
  },
  "table.table tbody tr:last-child td, table.table tbody tr:last-child th": {
    "border-bottom": "none",
  },
  "table.table.table-hovered tbody tr:hover": {
    background: "#e2e8f4",
    transition: "background 0.3s",
  },
  "table.table.table-zebra tbody tr:nth-child(even)": {
    background: "#f0f6ff",
  },
};
