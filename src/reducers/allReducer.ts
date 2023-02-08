

export interface IState {
    branchList: string[],
    childStoryNumber: string,
    des: string,
    master: string,
    release: string,
    parentStoryNumber: string,
    type: string,
    description:string;
}
const Initialstate: IState = {
    branchList:[] as string[],
    childStoryNumber: '',
    des:'',
    master: '',
    release: '',
    parentStoryNumber: '',
    type:"bug",
    description:""
}



export const reducer = (state: IState = Initialstate,action:{type:string,payload?:any}) =>{
    switch(action.type)
    {
        case "childStoryNumber":return ({...state, childStoryNumber : action.payload});
        case "parentStoryNumber":return ({...state, parentStoryNumber : action.payload});
        case "description": return ({...state, description: action.payload}) ;
        case "master": return ({...state, master: action.payload});
        case "release": return ({...state, release: action.payload});
        case "selected": return ({...state, type: action.payload});
        case "branchList":  return ({...state, branchList: action.payload})
        
        default : return state;
    }
}



