import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";

// Images
import aboutus from "../../components/images/home/aboutus1.png";
import Footer from "../../layouts/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="column-title">Tentang Kami</h3>
              <p>
                SMK MULTISTUDI HIGH SCHOOL sebuah institusi pendidikan vokasi
                yang didirikan pada tahun 2007 dengan fokus inovasi, prestasi
                dan akhlak mulia. Melalui inovasi, SMK MHS menerapkan dan meramu
                sistem pendidikan vokasi yang paling sesuai dengan kebutuhan
                dunia kerja saat ini yang menuntut siswa untuk proaktif dan
                menjadi pionir untuk perkembangan dirinya.
              </p>
              
              <p>
                SMK MULTISTUDI HIGH SCHOOL juga menitikberatkan proses
                pembelajaran pada pembentukan mental dan spiritual
                siswa-siswinya agar memiliki akhlak dan prilaku mulia. Dengan
                visi menjadi sekolah modern berkepribadian dan berwawasan global
                yang didukung oleh Sumber Daya Manusia serta infrastruktur yang
                lengkap, MHS siap melahirkan generasi yang handal dan mampu
                menyongsong masa depan yang lebih baik. Nomor persetujuan
                pendirian sekolah : 1111.1/422.9/DIKMEN/VI/2007 tanggal 14 Juni
                2007 Nomor Izin operasional sekolah : 231/422/DIKMEN/III/2008
                tanggal 6 Maret 2008
              </p>
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div id="page-slider" className="page-slider small-bg">
                <div className="item">
                  <div className="container">
                    <img
                      className="float-right mr-5"
                      src={aboutus}
                      alt="Contact Us"
                      style={{ width: "350px", height: "300px" }}
                    />
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

export default AboutUs;
