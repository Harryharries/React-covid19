import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';
import style from './Cards.module.css'
const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}})=> {
    if(!confirmed){
        return "loading...."
    }
    return (
        <div className = {style.container}>
            <Grid container spacing={3} justify= "center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                             start={0}
                             end = {confirmed.value}
                             duration = {2.5}
                             separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

            <Grid container spacing={3} justify= "center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of revoeries of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

            <Grid container spacing={3} justify= "center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            deaths
                        </Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards