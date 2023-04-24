import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Sidebar/menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className="site__wrapper">
                <Header/>
                <main className="site__main">
                    <aside className="sidebar">
                        <Menu/>
                    </aside>
                    <div className="site__content">
                        <Routes>
                            <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                            <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
