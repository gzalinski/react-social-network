import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
    return (
        <div className="site">
            <div className="site__wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
