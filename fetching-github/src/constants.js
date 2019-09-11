
const Fulldate =new Date()
Fulldate.setMonth(Fulldate.getMonth()-1)

let month=Fulldate.getMonth()+1
let day=Fulldate.getDate()

month <10 && (month=`0${month}`)
day<10 && (day=`0${day}`)
const date=`${Fulldate.getFullYear()}-${month}-${day}`


export const endpoint=`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=`