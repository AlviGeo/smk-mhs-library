import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer bg-overlay">
        <div className="footer-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 footer-widget footer-about">
                <h4 style={{ color: "#C22F29" }}>MULTISTUDI HIGH SCHOOL</h4>
                <p>
                  SMK Multistudi High School adalah sebuah institusi pendidikan
                  vokasi yang didirikan pada tahun 2007 dengan fokus inovasi,
                  prestasi dan akhlak mulia.Melalui inovasi, SMK MHS menerapkan
                  dan meramu sistem pendidikan vokasi yang paling sesuai dengan
                  kebutuhan dunia kerja saat ini yang menuntut siswa untuk
                  proaktif dan menjadi pionir untuk perkembangan dirinya.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a
                        href="https://wa.me/message/VZUJ34AED3LEF1"
                        aria-label="Email"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/SMK-MULTISTUDI-HIGH-SCHOOL-BATAM-725746664149136/"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/smk_multistudi_batam/"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCftjInE04jsLOo3PO-mtsYg"
                        aria-label="Email"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/SMK_MHS_BATAM?lang=en"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="http://humasmhs@multistudi.sch.id/"
                        aria-label="Email"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-envelope" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer social end */}
              </div>
              {/* Col end */}
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                <h3 className="widget-title">Website Sekolah</h3>
                <ul className="list-arrow">
                  <li>
                    <a href="https://multistudi.sch.id/" target="_blank" rel="noreferrer">Official Web</a>
                  </li>
                </ul>
              </div>
              {/* Col end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        {/* Footer main end */}
        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="copyright-info text-center">
                  <span>
                    Copyright © SMK Multistudi High School | Yayasan Manunggal
                    Citra Saya. All Rights Reserved
                  </span>
                </div>
              </div>
              <div
                id="back-to-top"
                data-spy="affix"
                data-offset-top={10}
                className="back-to-top position-fixed"
              >
                <button className="btn btn-primary" title="Back to Top">
                  <i className="fa fa-angle-double-up" />
                </button>
              </div>
            </div>
            {/* Container end */}
          </div>
          {/* Copyright end */}
        </div>
      </footer>
      {/* Footer end */}
    </div>
  );
};

export default Footer;
