import { useEffect, useState } from "react";
import style from "./App.module.css";
import CardContainer from "./components/CardContainer";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  let [users, setUsers] = useState(null);
  const API = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      let data = await fetch(API);
      let user = await data.json();
      setUsers(user);
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Feed />
      <h1>Lets Start UseEffect</h1>
      {users?.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
      <CardContainer />
      <Footer />
    </div>
  ); //JSX - Javascript and XML
}

export default App;
