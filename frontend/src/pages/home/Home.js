import React, {useEffect, useState} from "react";
import HomeCategory from "../../layouts/CategoryHome";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import "../../components/css/landing-page.css";

// Import Data from Firebase
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { db } from "../../firebase-config";

// Import image
import containerImage1 from "../../components/images/home/landing-page-img.png";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()});
        });
        setBooks(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="banner-carousel banner-carousel-1 mb-0">
        <div className="banner-carousel-item home-slider-two">
          <div className="slider-content text-left">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-12">
                  <h3
                    className="slide-sub-title"
                    data-animation-in="slideInLeft"
                  >
                    WELCOME TO SYNERGY LIBRARY SMK MHS BATAM
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-carousel-item home-slider-three">
          <div className="slider-content text-right">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-12">
                  <h3 className="slide-sub-title" data-animation-in="fadeIn">
                    WELCOME TO SYNERGY LIBRARY SMK MHS BATAM
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="call-to-action-box no-padding">
        <div className="container">
          <div className="action-style-box">
            <div className="row align-items-center">
              <div className="col-md-8 text-center text-md-left">
                <div className="call-to-action-text">
                  <h3 className="action-title">
                    Hi-Tech | Personality | Global Mind
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCategory />
      {/* View Book List */}
      
      {/* End of View Book List */}

      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ts-intro">
                <div id="jumlah-buku" className="text-center" style={{borderWidth: "thick"}}>
                  <h3>Jumlah Buku</h3>
                  <h4 style={{ color: "#FEB83C"}}>{books.length}</h4>
                </div>
              </div>
              {/* Intro box end */}
              <div className="gap-20" />
              <iframe
                width={520}
                height={315}
                title="Multistudi High School"
                src="https://www.youtube.com/embed/BTRbdaRhWng"
                allowFullScreen
              ></iframe>
              {/* Content row 1 end */}
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h3 className="into-sub-title">Visi, Misi, dan Tujuan Kami</h3>
              <p>
                Lorem cillum adipisicing qui Lorem occaecat nostrud esse non
                officia consectetur quis.
              </p>
              <div
                className="accordion accordion-group"
                id="our-values-accordion"
              >
                <div className="card">
                  <div
                    className="card-header p-0 bg-transparent"
                    id="headingOne"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Visi SMK Multistudi High School
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#our-values-accordion"
                  >
                    <div className="card-body">
                      “Menjadi sekolah yang unggul di era digitalisasi,
                      berkepribadian sesuai Profil Pelajar Pancasila dan
                      berwawasan global.
                      <br />
                      (Hi Tech, Personality, Global Mind)” Visi ini dirancang
                      pada tahun 2021, sesuai dengan pembahasan di Rencana
                      Kegiatan Jangka Menengah, maka visi tersebut diharapkan
                      akan dapat dicapai secara menyeluruh pada tahun 2026.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header p-0 bg-transparent"
                    id="headingTwo"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Misi SMKS Multistudi High School
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#our-values-accordion"
                  >
                    <div className="card-body">
                      1. Melaksanakan sistem pengajaran yang berbasis digital
                      untuk membentuk tenaga-tenaga unggul yang profesional
                      berstandar nasional dan internasional sesuai kebutuhan
                      IDUKA.
                      <br />
                      2. Mengembangkan nilai dan norma serta budi pekerti di era
                      globalisasi dan digitalisasi dengan berpegang teguh pada
                      budaya bangsa melalui pelaksanaan proyek penguatan profil
                      pelajar Pancasila dan budaya kerja (P5BK).
                      <br />
                      3. Mengembangkan pola pikir peserta didik, pendidik dan
                      tenaga kependidikan yang mampu beradaptasi sesuai dengan
                      perkembangan zaman.
                      <br />
                      4. Menjalankan Pembelajaran berbasis Project Based
                      Learning.
                      <br />
                      5. Mendirikan Lembaga Sertifikasi Profesi P1 untuk
                      melaksanakan sertifikasi Program Keahlian secara mandiri.
                      <br />
                      6. Mendirikan kelas industri dan program Teaching Factory
                      bersama IDUKA.
                      <br />
                      7. Mewujudkan sarana dan prasarana pendukung yang sesuai
                      kebutuhan pembelajaran.
                      <br />
                      8. Menciptakan program kegiatan kewirausahaan
                      (entrepreneur) siswa unggul (entrepreneur) yang mampu
                      berkontribusi dalam peningkatan daya saing ekonomi kreatif
                      nasional.
                      <br />
                      9. Menciptakan hubungan yang harmonis dan saling
                      menguntungkan antara sekolah dan IDUKA.
                      <br />
                      10. Meningkatkan kemampuan SDM pendidik dan tenaga
                      kependidikan melalui program magang guru,
                      pelatihan/diklat, sertifikasi profesi dan kompetensi.
                      <br />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header p-0 bg-transparent"
                    id="headingThree"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Tujuan SMKS Multistudi High School
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#our-values-accordion"
                  >
                    <div className="card-body">
                      Adapun tujuan SMKS Multistudi High School adalah :
                      <br />
                      1. Mengembangkan pendidikan vokasi yang mampu bersaing
                      didunia kerja dan memiliki kompetensi kewirausahaan yang
                      unggul sesuai dengan Standar Kompetensi Lulusan yang
                      ditetapkan SMKS Multistudi High School.
                      <br />
                      2. Meningkatkan dan menguatkan kerjasama bersama IDUKA
                      melalui kegiatan kemitraan sebagai perwujudan link and
                      match secara berkelanjutan.
                      <br />
                      3. Terciptanya lingkungan sekolah yang tertib, bersih,
                      nyaman dan ramah sesuai dengan konsep sekolah green
                      school.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
