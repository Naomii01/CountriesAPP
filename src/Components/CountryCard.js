import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import { jsx } from '@emotion/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CountryCard(props) {
  return (
    <Card sx={{ maxWidth: 345, width: 200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.flagUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.capital} | {props.population}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}