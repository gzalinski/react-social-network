import Menu from "./navs/menu";
import Profile from "./Profile";

const Main = () => {
    return (
        <main className="site__main">
            <aside className="sidebar">
                <Menu/>
            </aside>

            <Profile/>
        </main>
    );
}

export default Main;