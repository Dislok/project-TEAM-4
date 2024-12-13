import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, Button, CircularProgress } from '@mui/material';
import { usePokemon } from '../../context/PokemonContext';

export const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemon, loading } = usePokemon();

  if (loading) {
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>;
  }

  const pokemonDetail = pokemon.find(p => p.id === parseInt(id));

  if (!pokemonDetail) {
    return <Typography>Pokémon no encontrado</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={pokemonDetail.sprites.front_default}
          alt={pokemonDetail.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}
          </Typography>
          <Typography variant="body1">Altura: {pokemonDetail.height}</Typography>
          <Typography variant="body1">Peso: {pokemonDetail.weight}</Typography>
          <Typography variant="body1">
            Tipo: {pokemonDetail.types.map(type => type.type.name).join(', ')}
          </Typography>
          <Typography variant="body1">
            Habilidades: {pokemonDetail.abilities.map(ability => ability.ability.name).join(', ')}
          </Typography>
          <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2 }}>
            Volver a la lista
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};