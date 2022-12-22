import NewImg from '../../../../../../assets/news.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FrameNew({ image, info, title, shre, toGo }) {
  const [expanded, setexpanded] = useState(false);
  const navigate = useNavigate();
  const goToMainPage = (e) => {
    e.preventDefault();
    navigate(`/${toGo}`)
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={goToMainPage}>
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
              {info}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {shre ? (<Button size="small">Compartir</Button>) : null
          }
          <Button onClick={(e) => setexpanded(!expanded)} size="small">
            {expanded ? <>Cerrar</> : <>Ver más</>}
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Información Completa: </Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}
export default FrameNew;