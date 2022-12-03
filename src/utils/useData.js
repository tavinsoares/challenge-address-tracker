import { useReducer, useCallback, useEffect } from 'react'; 

const reducerData = (state, action) => {
    const { type } = action;
  
    switch(type){
        case 'pending': 
            return { status: 'pending', data: action.data, error: null }
        case 'finish':
            return { status: 'finish', data: action.data, error: null }
        case 'error':
            return { status: 'error', data: null, error: action.error }
        default:
            return state
    }

}

const useData = (initialData, propStorage) => {
    const [state, dispach] = useReducer(reducerData, initialData, (initial) => {
        const valueStorage = JSON.parse(window.localStorage.getItem(propStorage))

        return valueStorage || initial
    });

    useEffect(() => {
        window.localStorage.setItem(propStorage, JSON.stringify(state));
    }, [state, propStorage])

    const run = useCallback((promisse) => {
        if(!promisse){
            return
        }

        dispach({ type: 'pending', data: initialData.data });

        promisse.then(res => {
            dispach({ type: 'finish', data: res.data });
        }).catch(error => {
            dispach({ type: 'error', error })
        })
    }, [initialData.data])

    return [state, run]
}

export default useData