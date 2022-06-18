import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import DatatableBooks from "../../components/datatable/DatatableBooks"
import DatatableApproval from "../../components/datatable/DatatableApproval";

const getDatatable = () => {
  const route = window.location.pathname;
  switch (route) {
    case "/users":
      return <Datatable />;
    case "/books":
      return <DatatableBooks />;
    case "/booksapproval":
      return <DatatableApproval />;
  }
};

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {getDatatable()}
      </div>
    </div>
  )
}

export default List