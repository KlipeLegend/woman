const initialData = {
    shops: [],
    local: [
        {
            id: 0,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 1",
            narxi: 5000
        },
        {
            id: 1,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 2",
            narxi: 5000
        },
        {
            id: 2,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 3",
            narxi: 5000
        },
        {
            id: 3,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 4",
            narxi: 5000
        },
        {
            id: 4,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 5",
            narxi: 5000
        },
        {
            id: 5,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 6",
            narxi: 5000
        },
        {
            id: 6,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 7",
            narxi: 5000
        },
        {
            id: 7,
            img: "./img/fish.png",
            count: 1,
            add: false,
            nomi: "Happy coral 8",
            narxi: 5000
        }


    ],
    data: JSON.parse(localStorage.getItem('add')) || [],
    add: JSON.parse(localStorage.getItem('add')) || [],
    show: JSON.parse(localStorage.getItem('harid')) || {}
}
const todoReducers = (state = initialData, { payload, type }) => {
    switch (type) {
        case 'add':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === state.show.id ? { ...state.show, add: true } : val)))
            localStorage.setItem('add', JSON.stringify(state.data.filter((val) => { return val.add === true })))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || []
            }
        case 'plus':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === state.show.id ? { ...state.show, count: state.show.count + 1 } : val)))
            localStorage.setItem('harid', JSON.stringify({ ...state.show, count: state.show.count + 1 }))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                show: JSON.parse(localStorage.getItem('harid')) || []
            }
        case 'minus':
            if (state.show.count > 0) {
                localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === state.show.id ? { ...state.show, count: state.show.count + 1 } : val)))
                localStorage.setItem('harid', JSON.stringify({ ...state.show, count: state.show.count - 1 }))
            }
            return {
                ...state,
                show: JSON.parse(localStorage.getItem('harid')) || [],
                data: JSON.parse(localStorage.getItem('data')) || []
            }
        case 'show':
            localStorage.setItem('harid', JSON.stringify({ ...payload, add: true }))
            return {
                ...state,
                show: JSON.parse(localStorage.getItem('harid'))
            }
        case 'save':
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || []
            }
        case 'clear':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.count > 0 ? { ...val, add: false, count: 1 } : val)))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')),
                add: [],
            }
        default: return state
    }
}
export default todoReducers