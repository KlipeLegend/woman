const initialData = {
    shops: [],
    data: JSON.parse(localStorage.getItem('data')) || [],
    show: {}
}

const todoReducers = (state = initialData, payload, type) => {
    switch (type) {
        case 'add':
            localStorage.setItem('data', JSON.stringify([payload]))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data'))
            }
        case 'plus':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? { ...payload, count: payload.count + 1 } : val)))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data'))
            }
        case 'minus':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? { ...payload, count: payload.count - 1 } : payload)))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data'))
            }
        case 'show':
            return {
                ...state,
                show: payload
            }
        default: return state
    }
}

export default todoReducers