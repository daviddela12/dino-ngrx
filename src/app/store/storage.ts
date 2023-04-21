const getThisState = (stateName: string) => {
  try{
    const serializedState = localStorage.getItem(stateName);
    if(serializedState === null){ return undefined }
    return JSON.parse(serializedState);
  }catch(err){
    return undefined
  }
}

const getItem = (itemName: string) => {
  const items = getThisState(itemName)
  if (items === undefined) {
    return []
  } else {
    return items
  }
}
/**
const saveItem = (key: string, data: any) => {
  const serializedState = JSON.stringify(data);
  localStorage.setItem(key,serializedState);
}

const getItemByKey = (key: string) => {
  try{
    const serializedState = localStorage.getItem(key);
    if(serializedState === null){ return undefined }
    return JSON.parse(serializedState);
  }catch(err){
    return undefined
  }
}

const deleteItemByKey = (key: string) => localStorage.setItem(key,null)

const emptyLocalStorage = (reducerKeys: any) => {

  try{
    if(undefined != reducerKeys && reducerKeys.length > 0){
      reducerKeys.forEach((key: string) => {
        localStorage.setItem(key,null);
      })
    }
  }catch(err){
    console.log("ERROR===emptyLocalStorage==>>>");
  }
}
**/
const clearStorage = () => localStorage.clear();


export const storage = {
  getThisState,
  getItem,
/**  saveItem,
  getItemByKey,
  deleteItemByKey,
  emptyLocalStorage,**/
  clearStorage
}
