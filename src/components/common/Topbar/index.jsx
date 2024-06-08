import React, { useEffect, useState } from "react";
import BMPSlogo from "../../../assets/bmps-logo-png.png";
import user from "../../../assets/user.png";
import SearchUsers from "../SearchUsers";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineQuestionCircle,
  AiFillEnvironment,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsBriefcase } from "react-icons/bs";
import { getAllUsers } from "../../../api/FirestoreAPI";
import ProfilePopup from "../ProfilePopup";
import { Tooltip } from "@mui/material";
import "./index.scss";

export default function Topbar({ currentUser }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const openUser = (user) => {
    console.log(user);
    navigate("/profile", {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };

  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredUsers(searched);
    } else {
      setFilteredUsers(users);
    }
  };

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 1000);

    return () => clearTimeout(debounced);
  }, [searchInput]);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);
  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}

      <img className="bmps_logo" src={BMPSlogo} alt="BMPS" />
      {isSearch ? (
        <SearchUsers
          setIsSearch={setIsSearch}
          setSearchInput={setSearchInput}
        />
      ) : (
        <div className="react-icons">
          <Tooltip title="search users">
            <div>
              <AiOutlineSearch
                size={30}
                className="react-icon"
                onClick={() => setIsSearch(true)}
              />
            </div>
          </Tooltip>
          <Tooltip title="Home">
            <div>
              <AiOutlineHome
                size={30}
                className="react-icon"
                onClick={() => goToRoute("/home")}
              />
            </div>
          </Tooltip>
          <Tooltip title="Follow">
            <div>
              <AiOutlineUserSwitch
                size={30}
                className="react-icon"
                onClick={() => goToRoute("/connections")}
              />
            </div>
          </Tooltip>
          {/* <BsBriefcase size={30} className="react-icon" />
          <AiOutlineMessage size={30} className="react-icon" />
          <AiOutlineBell size={30} className="react-icon" /> */}
          <Tooltip title="About Us">
            <div>
              <AiOutlineQuestionCircle
                size={30}
                className="react-icon"
                onClick={() => goToRoute("/aboutUs")}
              />
            </div>
          </Tooltip>
          <Tooltip title="Maps">
            <div>
              <AiFillEnvironment
                size={30}
                className="react-icon"
                onClick={() => goToRoute("/map")}
              />
            </div>
          </Tooltip>
        </div>
      )}
      <img
        className="user-logo"
        src={currentUser?.imageLink}
        alt="user"
        onClick={displayPopup}
      />

      {searchInput.length === 0 ? (
        <></>
      ) : (
        <div className="search-results">
          {filteredUsers.length === 0 ? (
            <div className="search-inner">No Results Found..</div>
          ) : (
            filteredUsers.map((user) => (
              <div className="search-inner" onClick={() => openUser(user)}>
                <img src={user.imageLink} />
                <p className="name">{user.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
