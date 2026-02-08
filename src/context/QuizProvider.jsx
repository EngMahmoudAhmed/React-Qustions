import { useReducer } from 'react'
import QuizContext from './QuizContext'
import reducer from '../components/reducer'
import { initialState } from '../components/initialState'

function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <QuizContext.Provider value={{ ...state, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider;