import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CardHeader, Avatar, IconButton, CardActions } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TheatersIcon from '@mui/icons-material/Theaters';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BoyIcon from '@mui/icons-material/Boy';
import { convertDate, generateDescription, getRandomColor } from '../utils/functions';

export const CardElement = ({ data }: any) => {
    return (
        <Card >
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
    const regex = /(\d+)/ig;
    const id = data.url.match(regex)[0];
    return (
        <Link
            underline="none"
            href={`/${type}/${id}`}
        >
            <CardElement data={data} />
        </Link>
);
};

export default CardComponent;

