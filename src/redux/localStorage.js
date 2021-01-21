export const loadState = () => {
  try {
    //checks if state exist in local storage
    const serializedState = localStorage.getItem('state');
    if (serializedState === null ) {
      return undefined;
    }
    //if exists, parse it and return it for the store
    return JSON.parse(serializedState);
  } catch (err) {
    //in case of error we return undefined to tell the store that there is no state saved and proceed with the API fetch
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    //transforms the state in a string and stores it in localstorage
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // log errors
  }
}