import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const SearchResults = ({ results }) => {
  return (
    <Box sx={{ mt: 4 }}>
      {results.map((result, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" component="h2">
            {result.title}
          </Typography>
          <Typography variant="body1">
            {result.description}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default SearchResults;