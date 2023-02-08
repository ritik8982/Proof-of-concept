import React, { ChangeEvent } from "react";
import { useSelector, useDispatch  } from "react-redux";

import { setRelease,setMaster,setParentStoryNumber,setChildStoryNumber,setType,setDescription } from "./actions/allActions";

import "./MainComponent.css";
import { IState } from "./reducers/allReducer.js";

 

const App:React.FC = () => 
{
    const dispatch = useDispatch();

    console.log(dispatch);

    const selectedItem = useSelector((state: IState) => state.type);
    const description = useSelector((state : IState) => state.description);
    const parentStoryNumber = useSelector((state: IState)=> state.parentStoryNumber);
    const childStoryNumber = useSelector((state: IState)=> state.childStoryNumber);

    function handleSubmit(event:React.FormEvent<HTMLFormElement>):void
    {
        event.preventDefault();

        let des = ((description.trim()).split(" ")).join("_");
        const master = childStoryNumber.length === 0 ? `${selectedItem}/SIERA_master_${parentStoryNumber}_${des}` : `${selectedItem}/SIERA_master_${parentStoryNumber}_and_${childStoryNumber}_${des}`;

        const release = childStoryNumber.length === 0 ? `${selectedItem}/SIERA_release_${parentStoryNumber}_${des}`: `${selectedItem}/SIERA_release_${parentStoryNumber}_and_${childStoryNumber}_${des}`;

        dispatch(setMaster(master));
        dispatch(setRelease(release));
        
    }

   const handleParentStoryNumber = (event: React.ChangeEvent<HTMLInputElement>):void =>
   {
        dispatch(setParentStoryNumber(event.target.value))
   }

   function handleChildStoryNumber(event: React.ChangeEvent<HTMLInputElement>):void
   {
    dispatch(setChildStoryNumber(event.target.value));
   }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>):void =>
    {
         dispatch(setType(event.target.value));
    }
    function handleDescription(event: React.ChangeEvent<HTMLInputElement>):void
    {
        dispatch(setDescription(event.target.value));
    }
    
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskType">Task Type</label>
                <select id="taskType" value={selectedItem} onChange={handleChange}>
                    <option value="bug">bug</option>
                    <option value="story">story</option>
                    <option value="hotfix">hotfix</option>
                 </select>

                <label htmlFor="parentStoryNumber" className="someMargin">Parent story number</label>
                <input name="parentStoryNumber" className="someMargin" id="parentStoryNumber" type="number" value={parentStoryNumber} onChange={handleParentStoryNumber} required/>

                <label htmlFor="childStoryNumber" className="someMargin">Child story number</label>
                <input name="childStoryNumber" className="someMargin" id="childStoryNumber" type="number" value={childStoryNumber} onChange={handleChildStoryNumber} /> <br/>

                <label className="someMargin" htmlFor="description">Description</label>
                <input name="description" className="someMargin"  id="description" type="text" value={description} onChange={handleDescription} required/> <br/>
                <button>Get Branches</button>
            </form>
        </div>
    
    );
}

export default App;