import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const TaskCard = () => {

    const styles = {
        card:{
            borderRadius: "20px",
            border: "5px",
            borderColor: "#F59D0B",
            margin: 20,
            title:{
                color: "#F59D0B"
            }
        },
        cardContent:{
            textAlign: "left"
        }
    };

    return (
        <Card style={styles.card}>
            <CardContent style={styles.cardContent}>
                <Typography style={styles.card.title} gutterBottom variant="h6" component="div">
                    <b>Crear plantilla para verificación de mails</b>
                </Typography>
                <Typography variant="body2">
                    Se debe crear un archivo html. Debe ser renderizado desde el endpoint /mailerlist/mailer.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Finalizar</Button>
            </CardActions>
        </Card>
    );
}