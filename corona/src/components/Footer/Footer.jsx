
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="indigo" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Covid-19 Tracker</h5>
            <p>
            Covid-19 Tracker is a small webapp made for the visualizations of the Global and Country wise cases of Corona Virus and India Specific cases of Corona virus.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/HappY-FaceS/SAVE-HUMANITY">Source Code</a>
              </li>
              <li className="list-unstyled">
                <a href="https://covid19.mathdro.id/api">Global API</a>
              </li>
              <li className="list-unstyled">
                <a href="https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json">State API</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/rishav-kumar-7b12701a1/">LinkedIn</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/rishav-kumar-7b12701a1/">Rishav Kumar</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;







