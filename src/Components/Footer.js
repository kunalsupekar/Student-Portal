import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faEnvelope,
  faPhone,
  faPrint,faUser
} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href=" " className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href=" " className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href=" " className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href=" " className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href=" " className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href=" " className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section className="py-3">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Nidhi Bank</h6>
              <p>
                Nidhi Bank offers a wide range of loans to meet your diverse
                needs. Whether the need is for a house, child's education, our
                unique and need-specific loans will enable you to convert your
                dreams into realities.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
              <p>
                <a href=" " className="text-reset">
                  Overview
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  History
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Offices & Branches
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Awards
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Human Resources
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Overview
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  News Room
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Calculators</h6>
              <p>
                <Link to="/calci" className="text-reset">
                  Calculator
                </Link>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Car Loan EMI
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Fixed Deposit
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Home Loan
                </a>
              </p>
              <p>
                <a href=" " className="text-reset">
                  Business Loan
                </a>
              </p>
              <p>
                
                <a href=" " className="text-reset">
                  Loan Balance Transfer Calculator
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3 text-secondary" />
                Alandi, Pune-414403
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3 text-secondary" />
                Nidhibank@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3 text-secondary" />
                +91 7517592324
              </p>
              <p>
                <FontAwesomeIcon icon={faPrint} className="me-3 text-secondary" />
                +91 87676 55747
              </p>
              <p>
                <FontAwesomeIcon icon={faUser} className="me-3 text-secondary" />
                Kunal Supekar
              
                
              </p>
                <p>Abhishek Bhosale</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: '#000',color:'white' }}
      >
        © 2023 Academicnexa.com
      </div>
    </footer>
  );
}