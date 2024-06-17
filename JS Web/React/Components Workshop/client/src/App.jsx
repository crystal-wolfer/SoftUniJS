import "./styles.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import UserList from "./components/UserList.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="main">
        <UserList></UserList>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
