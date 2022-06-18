export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
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
    headerName: "Age",
    width: 100,
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

export const bookColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "book",
    headerName: "Book",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="book" />
          {params.row.book_title}
        </div>
      );
    },
  },
  {
    field: "book_author",
    headerName: "Author",
    width: 160,
  },
  {
    field: "book_description",
    headerName: "Description",
    width: 150,
  },
  {
    field: "book_status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.book_status}`}>
          {params.row.book_status}
        </div>
      );
    },
  },
]