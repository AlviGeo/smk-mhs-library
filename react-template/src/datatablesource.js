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
    field: "book_code",
    headerName: "Nomor Panggil",
    width: 130,
  },
  {
    field: "date_published",
    headerName: "Tanggal Publikasi",
    width: 150,
  },
  {
    field: "book_total",
    headerName: "Jumlah Tersedia",
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
    field: "user_name",
    headerName: "Nama Siswa",
    width: 200,
  },
  {
    field: "approved",
    headerName: "Status Approval",
    width: 200,
  },
];

export const dashboardColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "book_title",
    headerName: "Judul Buku",
    width: 170,
    editable: true,
  },
  {
    field: "user_name",
    headerName: "Nama Siswa",
    width: 200,
    editable: true,
  },
  {
    field: "timeStamp",
    headerName: "Kapan Pinjam",
    width: 200,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
