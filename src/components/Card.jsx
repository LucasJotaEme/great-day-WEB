import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./../config";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBTypography, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';

export const TaskCard = () => {

    const [isHover, setIsHover] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const styles = {
        card:{
            // borderRadius: "75px",
            marginTop: "28px",
            title:{
                // borderRadius: "200px",
                color: "white",
                backgroundColor: global.colors.secondary
            },
            button:{
                color: global.colors.primary,
                backgroundColor: global.colors.terciary,
                position: "absolute",
                bottom: 0,
                padding: 10,
                opacity: 0.9,
                transition: "5s",
                display: isHover ? "block" :  "none",
            },

        },
        cardContent:{
            textAlign: "center",
        }
    };

    return (
        <MDBCard className="animate__animated animate__zoomInDown" style={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MDBCardBody className="p-0">
                <MDBCardTitle style={styles.card.title} className="p-2 text-center"> Modificar los archivos svg a PNG</MDBCardTitle>
                <MDBTypography className='p-3' style={{color: "grey"}}>Al momento de enviar mails, las imágenes de extensión .svg no son procesadas.
                        Deben ser modificadas a extensión .png.
                </MDBTypography>
                <MDBContainer style={styles.card.button} className="text-center animate__animated animate__jello">
                    <MDBTypography tag="h6" color="success">Done <MDBIcon fas icon="check" /></MDBTypography>
                </MDBContainer>
            </MDBCardBody>
        </MDBCard>
    );
}