import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Profile(props) {
  return (
    <div>
      <MDBContainer className="container py-5 h-100 ">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="12">
            <MDBCard style={{ borderRadius: '30px' }}>
              <MDBCardBody className="text-center gradient-custom">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h3" > {props.user.name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  {props.user.occupation} <span className="mx-2">|</span> <a>mdbootstrap.com</a>
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">{props.user.age}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Idade</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{props.user.gender}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Genero</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{props.user.movies ? props.user.movies.length:0}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total de Ratings</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}