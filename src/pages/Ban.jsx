import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ConfirmDialog from "../Components/ConfirmDialog";

const Ban = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (query && users) {
      const results = users.filter((user) =>
        user.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results.slice(0, 3));
      setIsDropDownOpen(true);
    } else {
      setFilteredResults([]);
      setIsDropDownOpen(false);
    }
  }, [query, users]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (result) => {
    setQuery(result);
    setShowConfirm(true);
    setIsDropDownOpen(false);
  };

  const handleConfirm = (user) => {
    setShowConfirm(false);
    banUser();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const   banUser = async () => {
    const details = {
      email: query,
    };

    try {
      let token = sessionStorage.getItem("Token");
      const res = await fetch("https://lms-7czt.onrender.com/signup/new/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        method: "PATCH",
        body: JSON.stringify(details),
      });
      const data = await res.json();

      if (data.Message === "User Banned Successfully") {
        alert(data.Message);
        setQuery("");
        setShowConfirm(false);
        setIsDropDownOpen(false);
      } else {
        alert(data.Message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchUsers = async () => {
    // console.log("Fetching");
    try {
      let token = sessionStorage.getItem("Token");
      const res = await fetch(`https://lms-7czt.onrender.com/auth/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        method: "GET",
      });

      const data = await res.json();
      if (data.Message === "Users Retrieved Successfully") {
        let temp = data.Data;
        let temp1 = Object.entries(temp);
        let temp2 = temp1.map(([_, obj]) => obj.email);
        setUsers(temp2);
      } else {
        setUsers([]);
        return;
      }
    } catch (e) {
      console.log(e);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <HomeContainer>
      <Content>
        <SearchDiv>
          <SearchBar
            type="text"
            className="searching"
            placeholder="Searching..."
            value={query}
            onChange={handleInputChange}
            onFocus={() => query && setIsDropDownOpen(true)}
          />
        </SearchDiv>
        <DropContainer>
          {isDropDownOpen && filteredResults.length > 0 && (
            <DropdownList>
              {filteredResults.map((result, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleResultClick(result)}
                >
                  {result[0].toUpperCase() + result.slice(1)}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </DropContainer>
        {showConfirm && (
          <ConfirmDialog
            message={`Are you sure you want to ban user: ${query}?`}
            onConfirm={() => handleConfirm(query)}
            onCancel={handleCancel}
          />
        )}
      </Content>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 95%;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
`;

const SearchBar = styled.input`
  width: 40%;
  outline: none;
  box-shadow: 0 1px 0 1px lightgrey;
  background: #ebd7f7;

  &:focus {
    box-shadow: 0 0 0 1px rgb(213, 140, 255);
  }
`;

const SearchDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  background: #fff;
  width: 50%;
  height: 30vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background: #ebd7f7;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  margin: 5px;
  transition: background 0.2s ease;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  box-shadow: 0 0.1px 1px #f5f5f5;
  border-radius: 6px;
  font-weight: 400;

  &:hover {
    box-shadow: 0 0 0 1px rgb(67, 45, 79);
  }
`;

export default Ban;
