import React, { useState, useEffect} from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://tamasha.onrender.com/me')
        .then((response) => {
          if (response.ok) {
            response.json().then((user) => {
              setUser(user);
            });
          } else {
            response.json().then( (json) => {
              if (json.errors !== undefined) {
                alert(json.errors);
              }
            });
          }
        })
      },[]);

    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }

export { UserContext, UserProvider };