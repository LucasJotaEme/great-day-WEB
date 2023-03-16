import React from 'react';
import './../config';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import Logo from "./../assets/completeLogo.png"

export const ResponsiveNavBar = () => {
  return (
    <>
      <MDBNavbar style={styles.navBar}>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='40'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

const styles = {
  navBar:{
    backgroundColor: global.colors.terciary
  }
}