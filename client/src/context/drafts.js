import React, { useState, useEffect} from "react";

const DraftContext = React.createContext();

function DraftProvider({ children }) {
    const [drafts, setDrafts] = useState([]);

    useEffect(() => {
        fetch('/drafts')
          .then((res) => res.json())
          .then((data) => setDrafts(data))
      }, [])

    return (
      <DraftContext.Provider value={{ drafts, setDrafts }}>
        {children}
      </DraftContext.Provider>
    );
  }

export { DraftContext, DraftProvider };