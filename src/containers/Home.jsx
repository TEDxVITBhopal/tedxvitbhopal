import FindUs from "../components/FindUs"

import OurMessage from "../components/OurMessage"

import AboutUs from "../components/AboutUs"

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
                EVENTS
            </section>
            {/* Footer here */}
        </main>
    )
}

export default Home