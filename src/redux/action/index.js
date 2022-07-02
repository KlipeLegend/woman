export const Add = () => {
    return {
        type: 'add'
    }
}

export const Plus = (data) => {
    return {
        type: 'plus',
        payload: data
    }
}

export const Minus = (data) => {
    return {
        type: 'minus',
        payload: data
    }
}

export const Show = (data) => {
    return {
        type: 'show',
        payload: data
    }
}

export const Save = () => {
    return {
        type: 'save'
    }
}

export const Clear = () => {
    return {
        type: 'clear'
    }
}

export const Del = (data) => {
    return {
        type: 'del',
        payload: data
    }
}
export const Mminus = (data) => {
    return {
        type: 'Miniminus',
        payload: data
    }
}
export const Mplus = (data) => {
    return {
        type: 'Miniplus',
        payload: data
    }
}

export const Open = (data) => {
    return {
        type: 'open',
        payload: data
    }
}