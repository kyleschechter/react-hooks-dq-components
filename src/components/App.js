import React from "react";
import TopMenu from "./TopMenu";
import MainContent from "./MainContent"
import SideMenu from "./SideMenu"

function App() {
  return <div className="app-container">
    <SideMenu />
    <body>
      <TopMenu />
      <MainContent />
    </body>
  </div>;
}

export default App;
