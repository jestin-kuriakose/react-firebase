export const userColumns = [
  { field: "id", headerName: "ID", width: 230 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 230 },
  {
    field: "product",
    headerName: "Product",
    width: 320,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "sku",
    headerName: "SKU",
    width: 150,
  },

  {
    field: "cost",
    headerName: "Cost",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.stock >0 ? "Yes" : "No"}`}>
          {params.row.stock >0 ? "Yes" : "No"}
        </div>
      );
    },
  },
];
