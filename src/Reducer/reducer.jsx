export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_OPTION':
            return state.map(option =>
                option.id === action.id
                    ? { ...option, status: !option.status }
                    : option
            );
        default:
            return state;
    }
};


export const initialOptions = [
    { id: 1, type: 'checkbox', title: 'Uppercase', status: true },
    { id: 2, type: 'checkbox', title: 'Lowercase', status: true },
    { id: 3, type: 'checkbox', title: 'Numbers', status: true },
    { id: 4, type: 'checkbox', title: 'Symbols', status: false }
];