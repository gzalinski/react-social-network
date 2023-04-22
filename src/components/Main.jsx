import Sidebar from "./Sidebar";
import Content from "./Content";

const Main = () => {
    return (
        <main className="site-main">
            <div className="container">
                <Sidebar />
                <Content />
            </div>
        </main>
    );
}

export default Main;