import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { TaskCard } from './Card';
import "./../config";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBIcon} from 'mdb-react-ui-kit';

export const  Home = () => {

    return(
        <MDBContainer>
            <MDBRow>
                <MDBCol size='md'>
                    <MDBContainer style={styles.container} className='shadow-5 square border-top p-3'>
                        <MDBTypography tag="h6" style={styles.container.title} className="mb-5">
                            Progreso de jornada <MDBIcon fas icon="coffee" style={styles.container.icon} />
                        </MDBTypography>
                        <div className="progress" style={{height: "20px"}}>
                            <div className="progress-bar" role="progressbar" style={styles.progress} ariaValuenow="1" ariaValuemin="0" ariaValuemax="8">
                                5 de 8
                            </div>
                        </div>
                    </MDBContainer>
                    <MDBContainer style={styles.container} className='shadow-5 square border-top p-3 mt-2'>
                        <MDBTypography tag="h6" style={styles.container.title}>
                            Cronómetro  <MDBIcon fas icon="clock" style={styles.container.icon} />
                        </MDBTypography>
                        <MDBContainer className='p-4'>
                            <MDBTypography tag="div" style={styles.container.timer} className="display-1">
                                <MDBTypography tag="strong" style={styles.container.timer.text}>
                                    00:23:56
                                </MDBTypography>
                            </MDBTypography>
                        </MDBContainer>
                    </MDBContainer>
                </MDBCol>
                <MDBCol size='md'>
                    <MDBContainer style={styles.container} className='shadow-5 square border-top p-3'>
                        <MDBTypography data-mdb-spy="scroll" tag="h6" style={styles.container.title}>
                            Pendientes <MDBIcon fas icon="pause" style={styles.container.icon} />
                        </MDBTypography>
                        <MDBContainer className='pt-2 pb-3'>
                            <TaskCard></TaskCard>
                            <TaskCard></TaskCard>
                            <TaskCard></TaskCard>
                        </MDBContainer>
                    </MDBContainer>
                </MDBCol>
                <MDBCol size='md'>
                    <MDBContainer style={styles.container} className='shadow-5 square border-top p-3'>
                        <MDBTypography tag="h6" style={styles.container.title}>
                            Completadas <MDBIcon fas icon="clipboard-check" style={styles.container.icon} />
                        </MDBTypography>
                        <MDBContainer className='pt-2 pb-3'>
                            <TaskCard></TaskCard>
                        </MDBContainer>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const styles = {
    container:{
        borderRadius: "0px 0px 11px 10px",
        title:{
            color: global.colors.grey
        },
        icon:{
            minWidth: 30,
            padding: 7,
            textAlign: "center",
            backgroundColor: global.colors.primary,
            borderRadius: "0px 0px 200px 200px",
            float: "right",
            color: "white"
        },
        timer:{
            textAlign: "center",
            text:{
                color: global.colors.primary
            }
        }
    },
    progress:{
        width: "65%",
        backgroundColor: global.colors.primary
    },
    timer:{
        color: global.colors.secondary
    },
    taskTitle:{
        color: global.colors.terciary
    }
}