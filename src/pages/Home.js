import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import ParticleHero from "../components/ParticleHero";
import { ThemeProvider } from "@mui/material";
import theme from "../components/theme";

function Home() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <div>
            <NavBar />
          </div>
          <div>
            <ParticleHero />
          </div>
          <div>
            <Footer />
          </div>
        </>
      </ThemeProvider>
    );
  }
  

export default Home;