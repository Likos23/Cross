import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./Routes";
import Navbar from "./Components.tsx/Navbar";
import Footer from "./Components.tsx/Footer";


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
      
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>esta app usa el modo de pantalla oscuro</main>
      <Box height="100vh" display="flex" flexDirection="column">
        
        <Router>
          <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
           </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;