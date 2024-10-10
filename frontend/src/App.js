import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import SearchResults from './components/searchResults/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([
    { title: 'Result 1', description: 'Description for result 1' },
    { title: 'Result 2', description: 'Description for result 2' },
    { title: 'Result 3', description: 'Description for result 3' },
  ]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    // You can add your search logic here
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Good question - good answer!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search..."
              sx={{ mr: 2 }}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
        <SearchResults results={results} />
      </Box>
    </Container>
  );
}

export default App;