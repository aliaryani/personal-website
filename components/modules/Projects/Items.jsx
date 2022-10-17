import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Items({item}) {
  return (
    <a href={item?.path} target="_blank" rel="noreferrer">
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={item?.image}
          alt={item?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}
