import { dataRecived, dataFailed, Start, dataLoading, answer, Next } from './actionsTypes'

export const datarecived = (value) => ({
    type: dataRecived,
    payload: value,
})

export const datafailed = (value) => ({
    type: dataFailed,
    payload: value,
})

export const start = (value) => ({
    type: Start,
    payload: value,
})

export const dataloading = (value) => ({
    type: dataLoading,
    payload: value,
})

export const newAnswer = (value) => ({
    type: answer,
    payload: value
})

export const nextQuestion = () => ({
    type: Next,
})