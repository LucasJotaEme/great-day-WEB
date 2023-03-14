import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { TaskCard } from './Card';

export const  Home = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 70
    }));

    return(
        <div style={{marginTop: 50}}>
            <Grid container spacing={3}>
                {/* ### Temporizador y horas faltantes ### */}
                <Grid xs={4}>
                    <Item>
                        <h3>Jornada: 4/8</h3>
                    </Item>

                    <Item style={{marginTop: 20}}>
                        <h1 style={{color: "#1B9EE7"}}>43 minutos faltantes</h1>
                    </Item>
                </Grid>
                {/* ### Tareas pendientes y completadas ### */}
                <Grid xs={8}>
                    <Grid container spacing={1} style={{padding: 0}}>
                        <Grid xs={6}>
                            <Item>
                                <h2>Tareas pendientes</h2>
                                <TaskCard></TaskCard>
                            </Item>
                        </Grid>
                        <Grid xs={6}>
                            <Item>
                            <h2>Tareas completadas</h2>
                            </Item>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}