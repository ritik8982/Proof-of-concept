
import React from "react";
import "./App.css";
import History from "./History";
import MainComponent from "./MainComponent";
import MasterAndRelease from "./MasterAndRelease";

const App:React.FC = () =>
{
    return (
        
       <div className="App">
        <div>
        <p className="bottom-border">Vertical Containter</p>
        </div>
        <div >
            <MainComponent />
            <MasterAndRelease />
            <History/>
        </div>
    </div>
    );
}

export default App;