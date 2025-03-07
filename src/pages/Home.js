import React from "react";
import NavBar from "../components/NavBar";
import { Banner } from "../components/banner";
import { Footer } from "../components/footer";

function Home () {
    
    return (
        <><div>
            <NavBar />
        </div>
        <div>
                <Banner />
            </div><div>
                <Footer/>
            </div></>

    )
}

export default Home;