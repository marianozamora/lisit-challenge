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

export const CardPeople = ({ data }: any) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
                </Avatar>
            }
            title={data.name}
            subheader="September 14, 2016"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
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

