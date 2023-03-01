import FindUs from "../components/FindUs"

const Home = () => {
    return(
        <main className="home-page">
            <section class="dp-div" id="welcome">
                WELCOME
            </section>
            <section class="dp-div" id="our-message">
                MESSAGE
            </section>
            <section class="dp-div" id="find-us">
                <FindUs/>
            </section>
            <section class="dp-div" id="about-us">
                ABOUT US
            </section>
            <section class="dp-div" id="our-events">
                EVENTS
            </section>
            {/* Footer here */}
        </main>
    )
}

export default Home