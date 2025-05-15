import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PetDetailPage } from './pages/PetDetailPage';
import { AddPetPage } from './pages/AddPetPage';
import { EditPetPage } from './pages/EditPetPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#ff6f00',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* ✅ Link must be inside Router */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#065f46',
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '1.5rem' }}>PetStore</h1>
          <Link
            to="/add"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#10b981',
              color: 'white',
              borderRadius: '0.375rem',
              textDecoration: 'none',
            }}
          >
            Add New Pet
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets/:id" element={<PetDetailPage />} />
          <Route path="/add" element={<AddPetPage />} />
          <Route path="/edit/:id" element={<EditPetPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
