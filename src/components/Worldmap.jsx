import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { useEffect, useState } from "react";
import { colorScale, countries, countryToIso } from "../assets/Countries";
import { getAllUsers } from "../api/FirestoreAPI";
import { users } from "../api/CountiresCount";
function WorldMap() {
  const [allUsers, setAllUsers] = useState([]);
  var [count, setCount] = useState({});
  console.log(users);
  //   useEffect(() => {
  //     getAllUsers(setAllUsers);
  //     //console.log(allUsers);
  //     allUsers.forEach((value, index) => {
  //       if (value.country) {
  //         console.log(value.country);
  //         setCount((prevCount) => ({
  //           ...prevCount,
  //           [countryToIso[value.country]]:
  //             (prevCount[countryToIso[value.country]] || 0) + 1,
  //         }));
  //       }
  //     });
  //   }, []);
  //   console.log(count);

  //   setCount(countryCount);
  //   console.log(getCount);
  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     getAllUsers(setUsers);
  //   }, []);
  //   console.log(users);
  return (
    <div style={{ margin: "auto", width: "700px", height: "600px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#282c34"
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: users,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${users[code] || 0}
                    </p>
                    </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
