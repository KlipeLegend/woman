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
    data: JSON.parse(localStorage.getItem('data')) || [],
    add: JSON.parse(localStorage.getItem('add')) || [],
    show: JSON.parse(localStorage.getItem('harid')) || {}
}
const todoReducers = (state = initialData, { payload, type }) => {
    switch (type) {
        case 'add':
            // localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === state.show.id ? { ...state.show, add: true } : val)))
            localStorage.setItem('add', JSON.stringify(state.data.filter((val) => { return val.add === true })))
            return {
                ...state,
                // data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || []
            }
        case 'buy':
            localStorage.setItem('add', JSON.stringify())
            return {
                ...state,
                add: JSON.parse(localStorage.getItem('add')) || []

            }
        case 'del':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? { ...payload, add: false, count: 1 } : val)))
            localStorage.setItem('add', JSON.stringify(state.add.filter((val) => val.id !== payload.id)))
            console.log(1);
            if (state.show.id !== payload.id) {
                localStorage.setItem('harid', JSON.stringify({}))
            }
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || [],
                show: JSON.parse(localStorage.getItem('harid')) || {}
            }
        case 'plus':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === state.show.id ? { ...state.show, count: state.show.count + 1 } : val)))
            localStorage.setItem('add', JSON.stringify(state.add.map((val) => val.id === state.show.id ? { ...state.show, count: state.show.count + 1 } : val)))
            localStorage.setItem('harid', JSON.stringify({ ...state.show, count: state.show.count + 1 }))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || [],
                show: JSON.parse(localStorage.getItem('harid')) || []
            }
        case 'minus':
            if (state.show.count > 0) {
                localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === state.show.id ? { ...state.show, count: state.show.count - 1 } : val)))
                localStorage.setItem('add', JSON.stringify(state.add.map((val) => val.id === state.show.id ? { ...state.show, count: state.show.count - 1 } : val)))
                localStorage.setItem('harid', JSON.stringify({ ...state.show, count: state.show.count - 1 }))
            }
            return {
                ...state,
                show: JSON.parse(localStorage.getItem('harid')) || [],
                add: JSON.parse(localStorage.getItem('add')) || [],
                data: JSON.parse(localStorage.getItem('data')) || []
            }
        case 'Miniminus':
            console.log(state.show);
            if (payload.count > 0) {
                localStorage.setItem('harid', JSON.stringify(state.show === payload ? { ...payload, count: payload.count - 1 } : state.show))
                localStorage.setItem('add', JSON.stringify(state.add.map((val) => val.id === payload.id ? { ...payload, count: payload.count - 1 } : val)))
                localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? { ...payload, count: payload.count - 1 } : val)))
            }
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || [],
                show: JSON.parse(localStorage.getItem('harid')) || []
            }
        case 'Miniplus':
            localStorage.setItem('harid', JSON.stringify(state.show.nomi === payload.nomi ? { ...payload, count: payload.count + 1 } : state.show))
            localStorage.setItem('add', JSON.stringify(state.add.map((val) => val.id === payload.id ? { ...payload, count: payload.count + 1 } : val)))
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? { ...payload, count: payload.count + 1 } : val)))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || [],
                show: JSON.parse(localStorage.getItem('harid')) || []
            }
        case 'show':
            localStorage.setItem('harid', JSON.stringify({ ...payload, add: true }))
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === payload.id ? { ...payload, add: true } : val)))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                show: JSON.parse(localStorage.getItem('harid')) || []
            }
        case 'save':
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || []
            }
        case 'clear':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.count > 0 ? { ...val, add: false, count: 1 } : val)))
            localStorage.setItem('add', JSON.stringify([]))
            localStorage.removeItem('harid')
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data')) || [],
                add: JSON.parse(localStorage.getItem('add')) || [],
                show: JSON.parse(localStorage.getItem('harid')) || {},
            }
        case 'open':
            console.log(2);
            if (payload.id === state.show.id) {
                localStorage.setItem('harid', JSON.stringify({}))
            } else {
                    localStorage.setItem('harid', JSON.stringify(payload))
            }
            return { ...state, show: JSON.parse(localStorage.getItem('harid')) }
        default: return state
    }
}
export default todoReducers