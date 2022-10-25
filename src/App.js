import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect} from "react";
function App() {
  const response = [
    {
      id: 1,
      username: "Leanne Graham",
      name: "Leanne Graham",
      email: "sincere@april.biz",
      phone: "1-770-736-8031",
      website: "http://hildgard.org",
    },
    {
      id: 2,
      username: "Ervin Howell",
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      phone: "010-424-4214",
      website: "http://anastasia.net",
    },
    {
      id: 3,
      username: "Clementine Bauch",
      name: "Clementine Bauch",
      email: "Nathan@yasania.net",
      phone: "1-463-123-4447",
      website: "http://ramiro.info",
    },
    {
      id: 4,
      username: "Patricia Lebsack",
      name: "Patricia Lebsack",
      email: "Jualana.OCorner@Kory.org",
      phone: "493-170-9623",
      website: "http://Kale.biz",
    },
    {
      id: 5,
      username: "Chalsey Datrich",
      name: "Chalsey Datrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(025)954-1289",
      website: "http://demarco.info",
    },
    {
      id: 6,
      username: "Mrs. Dennis Schulist",
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478",
      website: "http://ola.ord",
    },
    {
      id: 7,
      username: "Kurtis Weissnat",
      name: "Kurtis Weissnat",
      email: "Telly-Hoeger@billy.biz",
      phone: "210.067-6132",
      website: "http://elvis.io",
    },
    {
      id: 8,
      username: "Nicholas Runoifsdottir V",
      name: "Nicholas Runoifsdottir V",
      email: "Sherwood@rosamond.me",
      phone: "586.493.6943",
      website: "http://jacynthe.com",
    },
    {
      id: 9,
      username: "Glenna Reichert",
      name: "Glenna Reichert",
      email: "Chaim_McDermot@dana.io",
      phone: "(755)976-6794",
      website: "http://conrad.com",
    },
    {
      id: 10,
      username: "Clemintina DuBuque",
      name: "Clemintina DuBuque",
      email: "Rey.Padberg@Karina.biz",
      phone: "024-648-3804",
      website: "http://amborse.net",
    },
  ];
  const [data, setData] = useState(response);
  const [dataUpdated, setDataUpdated] = useState(false);
  useEffect(() => {
    localStorage.setItem("fakeUserData", JSON.stringify(response));
  }, []);

  useEffect(() => {
    if (dataUpdated) {
      let data = localStorage.getItem("fakeUserData");
      let ary = JSON.parse(data);
      setData(ary);
      setDataUpdated(false);
    }
  }, [dataUpdated]);
  return (
    <div className="App">
      {dataUpdated ? (
        <p>Loading...</p>
      ) : (
        <Home data={data} setData={setData} setDataUpdated={setDataUpdated} />
      )}
    </div>
  );
}

export default App;
