const initialState = {
    tasks: [
        {name: 'task 1', id: 111, description: 'do kanban', status: 'todo'},
        {name: 'task 2', id: 112, description: 'do list', status: 'progress'},
        {name: 'task 3', id: 113, description: 'do homework', status: 'progress'},
        {name: 'task 4', id: 114, description: 'do articles', status: 'review'},
        {name: 'task 5', id: 115, description: 'do list of profitable goods', status: 'done'},
    ],
    statuses: [
        'todo', 'progress', 'review', 'done',
    ],
    modals:
        {
            createModal: false,
            deleteModal: false,
        }
};

const kanban = (state = initialState, action) => {
    switch (action.type) {

        case 'MOVE_CARD':
            const updater = (action.payload.direction === 'left') ? -1 : 1;
            const newCards = state.tasks.map(el => {
                if (el.id === action.payload.taskId) {
                    return {...el, status: state.statuses[state.statuses.indexOf(el.status) + updater]}
                   } else {
                    return el
                }
                })
            return {
                ...state,
                tasks: newCards,
            };


        case 'DELETE_CARD':
            const newCards2 = state.tasks.filter(el => el.id !== action.payload);
            return {
                ...state,
                tasks: newCards2,
            };

        case 'CREATE_CARD':
            const newCards3 = [...state.tasks, {...action.payload}];
            return {
                ...state,
                tasks: newCards3,
            };

        case 'EDIT_CARD':
            const newCards4 = state.tasks.map(el => {
                if (el.id === action.payload.id) {
                    return {...action.payload}
                } else {
                    return el
                }
            })
            return {
                ...state,
                tasks: newCards4,
            };

        default:
            return state;
    }
};

export default kanban;