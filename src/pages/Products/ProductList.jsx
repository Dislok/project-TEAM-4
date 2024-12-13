import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';
import { usePokemon } from '../../context/PokemonContext';



export const ProductList = () => {
  const { pokemon, loading } = usePokemon();

  if (loading) {
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>;
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Lista Pokemon
      </Typography>
      <Grid container spacing={3}>
        {pokemon.map((poke) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={poke.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={poke.sprites.front_default}
                alt={poke.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tipo: {poke.types.map(type => type.type.name).join(', ')}
                </Typography>
                <Link to={`/pokemon/${poke.id}`}>Ver Informacion</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};