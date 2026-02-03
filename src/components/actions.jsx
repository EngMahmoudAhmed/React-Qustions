import {dataRecived, dataFailed, Start} from './actionsTypes'

export const datarecived = (value)=>({
    type:dataRecived,
    payload:value,
})

export const datafailed = (value)=>({
    type:dataFailed,
    payload:value,
})

export const start = (value)=>({
    type:Start,
    payload:value,
})