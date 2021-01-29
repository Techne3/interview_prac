import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Products";

function App() {
  // const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
  // const [userInfo, setUserInfo] = useState([]);
  // const [nextPageNumber, setNextPageNumber] = useState(1);
  // // const fetchNextUser = fetchNextUser.ref();

  // const fetchRandomData = async (pageNumber) => {
  //   return axios
  //     .get(`https://randomuser.me/api?=${pageNumber}`)
  //     .then(({ data }) => {
  //       console.log(data);
  //       // return JSON.stringify(data, null, 2);
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchNextUser();
  // }, []);

  // const getFullUserName = (userInfo) => {
  //   const {
  //     name: { first, last, title },
  //   } = userInfo;
  //   return `${first} ${last} ${title}`;
  // };

  // const fetchNextUser = () => {
  //   fetchRandomData().then((randomData) => {
  //     // check if your at last user and return if undefined
  //     if (randomData === undefined) return;
  //     const newUserInfo = [...userInfo, ...randomData.results];
  //     // console.log(newUserInfo);
  //     setUserInfo(newUserInfo);
  //     setNextPageNumber(randomData.info.page + 1);
  //   });

  // hit api and display data
  // https://randomuser.me/api

  // API parma used = ?page1
  /// load more users on button press using parma query

  return (
    <div>
      <Form />
      {/* {userInfo.map((userInfo, idx) => (
          <div key={idx}>
            <p>{() => getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.large} alt="user profile" />
          </div>
        ))}
        <button onClick={() => fetchNextUser()}> Add more users</button>
      </> */}
    </div>
  );
}

export default App;
