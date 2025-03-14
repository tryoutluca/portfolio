import React from "react";
import NavBar from "../components/NavBar";
import { Banner } from "../components/banner";
import Footer from "../components/footer";
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
            <Banner />
          </div>
          <div>
            <Footer />
          </div>
        </>
      </ThemeProvider>
    );
  }
  

export default Home;