import React from "react";

const SideNavbar = () => {
  return (
    <div className="col-lg-4 order-1 order-lg-0">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Cari Buku.."
          aria-label="Search"
        />
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div className="sidebar sidebar-left">
        <div className="widget">
          <h3 className="widget-title mt-4">Kategori</h3>
          <ul className="arrow nav nav-tabs">
            <li>
              <a href="/#">Semua</a>
            </li>
            <li>
              <a href="/#">Keuangan</a>
            </li>
            <li>
              <a href="/#">Agama</a>
            </li>
            <li>
              <a href="/#">Teknologi</a>
            </li>
            <li>
              <a href="/#">Bahasa</a>
            </li>
          </ul>
        </div>
        {/* Categories end */}
        
      </div>
      {/* Sidebar end */}
    </div>
  );
};

export default SideNavbar;
