import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Sidebar/menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

    let dataPosts = [
        { id: 1, title: "title 1", description: "description 1"},
        { id: 2, title: "title 2", description: "description 2"},
        { id: 3, title: "title 3", description: "description 3"},
    ]

    const dataDialogs = [
        {"id": 1, "name": "Dimych"},
        {"id": 2, "name": "Andrey"},
        {"id": 3, "name": "Sveta"},
        {"id": 4, "name": "Sasha"},
        {"id": 5, "name": "Viktor"}
    ]

    const dataMessages = [
        {"id": 1, "text": "Hi!"},
        {"id": 2, "text": "How are you ?"},
        {"id": 3, "text": ":)"}
    ]

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
                            <Route path='/profile' element={<Profile posts={dataPosts}/>}/>
                            <Route path='/dialogs' element={<Dialogs dialogs={dataDialogs} messages={dataMessages}/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
