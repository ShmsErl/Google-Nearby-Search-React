import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer style={{ backgroundColor: '#F7F2FB', color: 'black',  borderRight: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '3px solid rgba(0, 0, 0, 0.05)' }} className="p-4 mt-5 ">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto mb-2">
            <h6 className="text-uppercase font-weight-bold">Company Name</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: 'black', width: '60px', height: '2px' }}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum.</p>
          </div>

          <div className="col-md-2 mx-auto mb-2">
            <h6 className="text-uppercase font-weight-bold">Links</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: 'black', width: '60px', height: '2px' }}
            />
            <ul className="list-unstyled">
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  Home
                </a>
              </li>
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  About
                </a>
              </li>
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  Services
                </a>
              </li>
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mx-auto mb-2">
            <h6 className="text-uppercase font-weight-bold">Social Media</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: 'black', width: '60px', height: '2px' }}
            />
            <ul className="list-unstyled">
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  Facebook
                </a>
              </li>
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  Twitter
                </a>
              </li>
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  Instagram
                </a>
              </li>
              <li className="my-1">
                <a href="#" style={{ color: 'black' }}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mx-auto mb-2">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="mb-2 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: 'black', width: '60px', height: '2px' }}
            />
            <ul className="list-unstyled">
              <li className="my-1">
                <i className="fa fa-home mr-2"></i> 1234 Street Name, City, Country
              </li>
              <li className="my-1">
                <i className="fa fa-envelope mr-2"></i> info@example.com
              </li>
              <li className="my-1">
                <i className="fa fa-phone mr-2"></i> + 01 234 567 88
              </li>
              <li className="my-1">
                <i className="fa fa-print mr-2"></i> + 01 234 567 89
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-2" style={{ backgroundColor: '#F7F2FB', color: 'black', borderTop:'2px solid black' }}>
        © 2023 Copyright:
        <a href="#" style={{ color: 'black' }}>
          YourCompany.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
