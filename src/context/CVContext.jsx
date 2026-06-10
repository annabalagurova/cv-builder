import { createContext, useContext, useReducer } from "react";

const CVContext = createContext(null);

const initialState = {
    personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        position: ''
    },
    experience: [
        {
            id: 1,
            company: '',
            role: '',
            years: ''
        }
    ],
    education: [
        {
            id: 1,
            institute: '',
            degree: '',
            year: ''
        }
    ],
    theme: 'classic'
};

function cvReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_PERSONAL': {
            return {
                ...state,
                personalInfo: {
                    ...state.personalInfo,
                    [action.payload.field]: action.payload.value
                }
            };
        }
        case 'ADD_EXPERIENCE': {
            return {
                ...state,
                experience: [
                    ...state.expirience,
                    {
                        id: Date.now(),
                        company: '',
                        role: '',
                        years: ''
                    }
                ]
            };
        }
        case 'UPDATE_EXPERIENCE': {
            // действие должно содержать id записи и поля для обновления
            return {
                ...state,
                experience: state.expirience.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            [action.payload.field]: action.payload.value
                        };
                    }
                    return item;
                })
            };
        }
        case 'ADD_EDUCATION': {
            return {
                ...state,
                education: [
                    ...state.education,
                    {
                        id: Date.now(),
                        institute: '',
                        degree: '',
                        year: ''
                    }
                ]
            };
        }
        case 'UPDATE_EDUCATION': {
            return {
                ...state,
                education: state.education.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            [action.payload.field]: action.payload.value
                        };
                    }
                    return item;
                })
            };
        }
        case 'SET_THEME': {
            return {
                ...state,
                theme: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export function CVProvider({ children }) {
    const [state, dispatch] = useReducer(cvReducer, initialState);
    const value = { state, dispatch };
    return (
        <CVContext.Provider value={value}>
            {children}
        </CVContext.Provider> 
    );
}

export function useCV() {
    return useContext(CVContext);
};