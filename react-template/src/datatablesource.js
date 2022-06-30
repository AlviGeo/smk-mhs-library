export const userColumns = [
  { field: "id", headerName: "ID", width: 200 },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 230,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.img} alt="avatar" />
  //         {params.row.username}
  //       </div>
  //     );
  //   },
  // },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "username",
    headerName: "Username",
    width: 300,
  },
];

export const bookColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Judul",
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
    field: "book_total",
    headerName: "Jumlah",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.book_total}`}>
          {params.row.book_total}
        </div>
      );
    },
  },
];

export const categoryColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "category_name",
    headerName: "Nama Kategori",
    width: 230,
  },
]

export const historyColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "book_title",
    headerName: "Judul",
    width: 230,
  },
  {
    field: "username",
    headerName: "Nama Siswa",
    width: 150,
  },
  {
    field: "book_total",
    headerName: "Jumlah Buku",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.book_total}`}>
          {params.row.book_total}
        </div>
      );
    },
  },
  {
    field: "approved",
    headerName: "Status Approval",
    width: 160,
  },
];

export const dashboardColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "book_title",
    headerName: "Judul",
    width: 170,
    editable: true,
  },
  {
    field: "username",
    headerName: "Nama Siswa",
    width: 200,
    editable: true,
  },
  {
    field: "book_status",
    headerName: "Status Buku",
    width: 200,
    editable: true,
  },
  {
    field: "timeStamp",
    headerName: "Lama Peminjaman",
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
