import FindUs from "../components/FindUs"

const Home = () => {
    return(
        <main className="home-page">
            <section className="dp-div" id="welcome">
                WELCOME
            </section>
            <section className="dp-div" id="our-message">
                MESSAGE
            </section>
            <section className="dp-div" id="find-us">
                <FindUs/>
            </section>
            <section className="dp-div" id="about-us">
                ABOUT US
            </section>
            <section className="dp-div" id="our-events">
                EVENTS
            </section>
            {/* Footer here */}
        </main>
    )
}

export default Home