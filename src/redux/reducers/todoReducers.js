const initialData = {
    shops: [],
    data: [
        {
            id: 0,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 1",
            narxi: 5000
        },
        {
            id: 1,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 2",
            narxi: 5000
        },
        {
            id: 2,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 3",
            narxi: 5000
        },
        {
            id: 3,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 4",
            narxi: 5000
        },
        {
            id: 4,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 5",
            narxi: 5000
        },
        {
            id: 5,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 6",
            narxi: 5000
        },
        {
            id: 6,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 7",
            narxi: 5000
        },
        {
            id: 7,
            img: "./img/fish.png",
            count: null,
            add: false,
            nomi: "Happy coral 8",
            narxi: 5000
        }


    ],
    add: JSON.parse(localStorage.getItem('add')) || [],
    show: JSON.parse(localStorage.getItem('harid')) || {}
}
const todoReducers = (state = initialData, { payload, type }) => {
    switch (type) {
        case 'add':
            if (payload.add !== true) {
                localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? { ...payload, add: true } : val)))
                localStorage.setItem('add', JSON.stringify([state.show]))
            }
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || []
            }
        case 'plus':
            localStorage.setItem('add', JSON.stringify(state.add.map((val) => val.id === payload.id ? { ...payload, count: payload.count + 1 } : val)))
            return {
                ...state,
                add: JSON.parse(localStorage.getItem('add')) || []
            }
        case 'minus':
            if (payload.count > 0) {
                localStorage.setItem('add', JSON.stringify(state.add.map((val) => val.id === payload.id ? { ...payload, count: payload.count - 1 } : payload)))
            }
            return {
                ...state,
                add: JSON.parse(localStorage.getItem('add')) || []
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
        default: return state
    }
}
export default todoReducers