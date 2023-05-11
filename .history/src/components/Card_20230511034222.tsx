import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme) => ({
card: {
display: 'flex',
flexDirection: 'column',
maxWidth: 400,
margin: '0 auto',
//marginTop: theme?.spacing(2),
backgroundColor: '#FFF',
//borderRadius: theme?.spacing(1),
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
},
cardContent: {
flex: 1,
},
}));

const CardComponent = ({ data}:any) => {
    const classes = useStyles();
    const regex = /(\d+)/ig;
    const id = data.url.match(regex)[0];

    return (
        <Link
            href={`/people/${id}`}
        >
            <Card className={`${classes.card} col-span-1 flex flex-col mx-auto`}>
                <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Height: {data.height} cm
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Mass: {data.mass} kg
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Hair Color: {data.hair_color}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Skin Color: {data.skin_color}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Eye Color: {data.eye_color}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Birth Year: {data.birth_year}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Gender: {data.gender}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Homeworld: <Link href={data.homeworld}>{data.homeworld}</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Films: {data.films.map((film, index) => (
                    <Link key={index} href={film}>{film}</Link>
                    ))}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Vehicles: {data.vehicles.map((vehicle, index) => (
                    <Link key={index} href={vehicle}>{vehicle}</Link>
                    ))}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Starships: {data.starships.map((starship, index) => (
                    <Link key={index} href={starship}>{starship}</Link>
                    ))}
                </Typography>
                </CardContent>
            </Card>
        </Link>
);
};

export default CardComponent;
