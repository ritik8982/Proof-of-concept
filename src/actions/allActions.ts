//ACTION CREATOR 1
export const setType = (str:string) =>{
    return {
        type:"selected",
        payload:str
    } 
} 

export const setParentStoryNumber = (str:string) =>{
    return {
        type:"parentStoryNumber",
        payload:str
    } 
}

export const setChildStoryNumber = (str:string) =>{
    return {
        type:"childStoryNumber",
        payload:str
    } 
}

export const setDescription = (str:string) =>{
    return {
        type:"description",
        payload:str
    } 
}

export const setMaster = (str:string)=>{
    return {
        type:"master",
        payload:str
    } 
}

export const setRelease = (str:string) =>{
    return {
        type:"release",
        payload:str
    } 
}
export const setBranch = (newBranchList:string[]) =>{
    return {
        type:"branchList",
        payload:newBranchList
    } 
}