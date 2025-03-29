import { get } from './apiRequestHelper'

function getUser(user){
    return get(`https://ch.tetr.io/api/users/${user}`)
}

function getUserSummaries(user){
    return get(`https://ch.tetr.io/api/users/${user}/summaries`)
}

export { getUser, getUserSummaries }