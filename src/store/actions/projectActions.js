export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to database
        console.log('Action Called');

        dispatch({ type: 'CREATE_PROJECT', project });
    }
}