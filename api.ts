import axios from  "axios"

/**
 * 获取幼儿园信息 
 * 1:幼儿园
 * 2:托儿所
 * 3: 早教中心
 */
// export const getKindergarten = (code:number,type:number)=>{
//   return new Promise((resolve,reject)=>{
//     return resolve
//   })
//   return axios.get(
//     `https://xqemis.age06.com/age06.gardens/api/gardens/organizationgardenlist/${code}/-1/0/${type}/0/4000/`
//   )
// }

export function dynamicFn(code:number,type:number){
  return ()=>getKindergarten(code, type)
}

export const getKindergarten = (code:number,type:number)=>{
  return axios.get(
    `https://xqemis.age06.com/age06.gardens/api/gardens/organizationgardenlist/${code}/-1/0/${type}/0/4000/`
  )
}

// /**
//  * 获取托儿所信息
//  */
// export const getNursery =(code:number)=>{
//   return axios.get(
//     `https://xqemis.age06.com/age06.gardens/api/gardens/organizationgardenlist/${code}/-1/0/2/0/4000/`
//   )
// }

// /**
//  * 获取早教中心信息
//  */
// export const getEarlylearning= (code:number)=>{
//   return axios.get(
//     `https://xqemis.age06.com/age06.gardens/api/gardens/organizationgardenlist/${code}/-1/0/3/0/4000/`
//   )
// }