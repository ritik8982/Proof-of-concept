
import "./History.css";
import { useSelector, useDispatch  } from "react-redux";
import { setParentStoryNumber,setChildStoryNumber,setDescription,setMaster,setRelease,setBranch } from "./actions/allActions";
import { IState } from "./reducers/allReducer";
import React, { FormEvent } from "react";

const History:React.FC = () => 
{
    const dispatch = useDispatch();
    const branchList = useSelector((state:IState ) => state.branchList);
    const master = useSelector((state:IState ) => state.master);
    const release = useSelector((state:IState ) => state.release);
    function finalSubmit(e: FormEvent) 
    {
        dispatch(setParentStoryNumber(""))
        dispatch(setChildStoryNumber(""));
        dispatch(setDescription(""));
        dispatch(setMaster(""));
        dispatch(setRelease(""));

        if(master.length === 0)
        return;

        let newBranchList = [...branchList,master,release];
        // let updatedArray = [];
        // for(let i=0; i<newBranchList.length; i++)
        // {
        //     if(i>newBranchList.length-3)
        //     updatedArray.push(<div className="maxWidth">{i+1}. {newBranchList[i]}</div>);
        //     else
        //     updatedArray.push(<div className="maxWidth"> {newBranchList[i]}</div>);

        // }
        dispatch(setBranch(newBranchList))
    }

    return (
        <div>
             <button onClick={finalSubmit}> Submit</button><br/>
                <div className="leftAlign">
                    <p className="onlyMargin">history</p>
                    <div className="border">
                            {branchList.length>0 && branchList.map((branch,index) => <div > {index+1}. {branch} <br/></div>)}  
                   </div> 
                </div>
        </div>
    );
}

export default History;