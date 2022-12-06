import { useReducer, useCallback } from 'react'; 

const reducerData = (state, action) => {
    const { type } = action;
  
    switch(type){
        case 'pending': 
            return { status: 'pending', data: null, error: null }
        case 'finish':
            return { status: 'finish', data: action.data, error: null }
        case 'error':
            return { status: 'error', data: null, error: action.error }
        default:
            return state
    }

}

const useData = (initialData) => {
    const [state, dispach] = useReducer(reducerData, initialData);

    const run = useCallback((promisse) => {
        if(!promisse){
            return
        }

        dispach({ type: 'pending' });

        promisse.then(res => {
            dispach({ type: 'finish', data: res.data });
        }).catch(error => {
            dispach({ type: 'error', error })
        })
    }, [])

    return [state, run]
}

export default useData