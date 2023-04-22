const getItem = (stateName: string) => {
  try {
    const serializedState = localStorage.getItem(stateName);
    if(serializedState === null){ return [] }
    return JSON.parse(serializedState);
  } catch(err) {
    return []
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
  getItem,
/**  saveItem,
  getItemByKey,
  deleteItemByKey,
  emptyLocalStorage,**/
  clearStorage
}
