import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import "./MasterAndRelease.css";
import {IState } from "./reducers/allReducer";

const MasterRelease:React.FC = () =>
{
    const master = useSelector((state : IState) => state.master);
    const release = useSelector((state: IState) => state.release);
    function handleCopyMaster()
    {
        navigator.clipboard.writeText(master);
    }
    function handleCopyRelease()
    {
        navigator.clipboard.writeText(release);
    }
    return (
        <div>
            <label className="someMargin" htmlFor="master">PR to master</label>
                <input className="someMargin" id="master" type="text" value={master} disabled/>
            <button onClick={handleCopyMaster}>Copy</button> <br/>

                <label className="someMargin" htmlFor="release">PR to release</label>
                <input className="someMargin" id="release" type="text" value={release} disabled/>
            <button onClick={handleCopyRelease}>Copy</button> <br/>

        </div>
    );
}

export default MasterRelease;