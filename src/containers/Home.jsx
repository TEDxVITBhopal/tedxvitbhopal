import './Home.css';
// screen components
import FindUs from "../components/home/FindUs"
import OurMessage from "../components/home/OurMessage"
import AboutUs from "../components/home/AboutUs"
import WelcomeScreen from '../components/home/Welcome';
import EventSection from '../components/home/EventSection';
import Footer from "./../components/Footer";

const Home = () => {
    return (
        <main className="home-page">
            <section className="dp-div" id="welcome">
                <WelcomeScreen />
            </section>
            <section className="dp-div" id="our-message">
                <OurMessage />
            </section>
            <section className="dp-div" id="find-us">
                <FindUs />
            </section>
            <section className="dp-div" id="about-us">
                <AboutUs />
            </section>
            <section className="dp-div" id="our-events">
                <EventSection />
            </section>
            <section className='dp-div' id="footer">
                <Footer />
            </section>
        </main>
    )
}

export default Home