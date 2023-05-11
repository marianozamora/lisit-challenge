import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CardHeader, CardMedia, Avatar, IconButton, CardActions } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TheatersIcon from '@mui/icons-material/Theaters';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BoyIcon from '@mui/icons-material/Boy';

const useStyles = makeStyles(() => ({
    card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: '0 auto',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardContent: {
    flex: 1,
    },
}));

const getRandomColor = () => {
    const colors = [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'purple'];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

const convertDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toDateString();
};

const generateDescription = (data: any) => {
    const description = [];
    if (data.birth_year) {
        description.push(`Birth Year: ${data.birth_year}`);
    }
    if (data.model) {
        description.push(`Model: ${data.model}`);
    }
    if (data.classification) {
        description.push(`Classification: ${data.classification}`);
    }
}

export const CardPeople = ({ data }: any) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: getRandomColor() }} aria-label="recipe">
                        {data.name[0].toUpperCase()}
                </Avatar>
            }
            title={data.name}
            subheader={convertDate(data.created)}
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                    {generateDescription(data)}
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {
                    data.starships && data.starships.length > 0 && (
                        <IconButton
                        className='text-md'
                        aria-label="add to favorites">
                        <AirplanemodeActiveIcon />
                            <div className='text-lg' >
                            {data.starships.length}
                            </div>
                        </IconButton>
                    )
                }
                {
                    data.films && data.films.length > 0 && (
                        <IconButton
                        className='text-md'
                        aria-label="add to favorites">
                            <TheatersIcon />
                            <div className='text-lg' >
                            {data.films.length}
                            </div>
                        </IconButton>
                    )
                }
                {
                    data.vehicles && data.vehicles.length > 0 && (
                        <IconButton
                    className='text-md'
                    aria-label="add to favorites">
                    <DirectionsCarIcon />
                    <div className='text-lg' >
                        {data.vehicles.length}
                    </div>
                </IconButton>
                        )
                        
                }
                {
                    data.residents && data.residents.length > 0 && (
                        <IconButton
                    className='text-md'
                    aria-label="add to favorites">
                    <BoyIcon />
                    <div className='text-lg' >
                        {data.residents.length}
                    </div>
                </IconButton>
                        )
                        
                }
                
            </CardActions>
        </Card>
    )
}


const CardComponent = ({ data, type = 'people' }:any) => {
    const classes = useStyles();
    const regex = /(\d+)/ig;
    const id = data.url.match(regex)[0];
    console.log(id);

    return (
        <Link
            underline="none"
            href={`/${type}/${id}`}
        >
            <CardPeople data={data} />
        </Link>
);
};

{/* <Card className={`${classes.card} col-span-1 flex flex-col mx-auto`}>
                <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                    {data.name}
                </Typography>
                </CardContent>
            </Card> */}

export default CardComponent;

