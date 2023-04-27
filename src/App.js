import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Sidebar/menu";
import Profile from "./components/Profile/Profile";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const App = (props) => {

    return (
            <div className="site__wrapper">
                <Header/>
                <main className="site__main">
                    <aside className="sidebar">
                        <Menu/>
                    </aside>
                    <div className="site__content">
                        <Routes>
                            <Route path='/profile' element={<Profile store={props.store} />}/>
                            <Route path='/dialogs' element={<DialogsContainer store={props.store}  />}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
    );
}

export default App;
