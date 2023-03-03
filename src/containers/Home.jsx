import FindUs from "../components/home/FindUs"

import OurMessage from "../components/home/OurMessage"

import AboutUs from "../components/home/AboutUs"

import Speaker from "../components/event/Speaker"

const Home = () => {
    return(
        <main className="home-page">
            <section className="dp-div" id="welcome">
                WELCOME
            </section>
            <section className="dp-div" id="our-message">
                <OurMessage/>
            </section>
            <section className="dp-div" id="find-us">
                <FindUs/>
            </section>
            <section className="dp-div" id="about-us">
                <AboutUs/>
            </section>
            <section className="dp-div" id="our-events">
                <Speaker/>
            </section>
            {/* Footer here */}
        </main>
    )
}

export default Home