import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Sidebar/menu";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="site">
            <div className="site__wrapper">
                <Header/>
                <main className="site__main">
                    <aside className="sidebar">
                        <Menu/>
                    </aside>

                    <Profile/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
