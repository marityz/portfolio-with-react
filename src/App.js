import './App.css';
import Header from './components/Header/Header'
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import  data from "../src/data/data";
import textAbout from "../src/data/textAbout";

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <About text = {textAbout}/>
            <Works works = {data}/>
            <Footer/>

            </>
    );
}

export default App;
