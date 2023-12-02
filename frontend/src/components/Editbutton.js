import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';


export default function Editbutton(props) {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{props.u.name}</MDBTypography>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{props.u.age}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">age</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{props.u.gender}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Genero</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{props.u.occupation}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Ocuppation</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Movies</MDBCardText>
                </div>
                <MDBRow>
                {props.u && props.u.movies.map((movie) => {
              return(
               <div className="col-lg-12">
                <MDBCol className="mb-2">
                <MDBCardText className="mb-1 h5"> Rating {movie.rating}</MDBCardText>
                <MDBCardText className="mb-1 h5"> movie ID {movie.movieid}</MDBCardText>
                <MDBCardText className="mb-1 h5"> Transaction ID {movie.transactionId ? movie.transactionId: ""}</MDBCardText>
                  </MDBCol>
               {console.log(movie)}
                </div>
                )
            })}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}