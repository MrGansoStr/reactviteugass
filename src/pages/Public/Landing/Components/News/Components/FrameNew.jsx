import NewImg from '../../../../../../assets/news.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function FrameNew({ image, message, title, shre }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {message}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {shre ? (<Button size="small">Compartir</Button>) : null
          }
          <Button size="small">Ver más</Button>
        </CardActions>
      </Card>
    </>
  )
}
export default FrameNew;