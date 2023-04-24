import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Sidebar/menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
const App = ({state, addPost, updateNewPostText}) => {

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
                            <Route path='/profile' element={<Profile data={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />}/>
                            <Route path='/dialogs' element={<Dialogs data={state.dialogsPage} />}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
