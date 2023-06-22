import * as passengersTavrelsRepository from "../repositories/passengersTavrelsRepository.js"
import httpStatus from "http-status"

async function getTravelsService(page, name){
  if(name === undefined && page === undefined){
    return await getPassengersTravels();
  } else if(name) {
    return await getTravelsByPassengerName(name)
  } else if(page) {
    return await getTravelsByPage(page)
  }
}
//return await

async function getPassengersTravels(){
  const {rows} =  await passengersTavrelsRepository.findPassagersTravels()
  if(rows.length > 100) return res.status(httpStatus.INTERNAL_SERVER_ERROR); 
  return rows
}

async function getTravelsByPassengerName(name){
  const passengerTravels = await passengersTavrelsRepository.findTravelsByName(name)
  if(passengerTravels.rows.length === 0) return send(httpStatus.NOT_FOUND) 
  return passengerTravels.rows
}

async function getTravelsByPage(page){
  const resultsByPage = await passengersTavrelsRepository.findTravelsByName(name)
  if(resultsByPage.rows.length === 0) return send(httpStatus.NOT_FOUND)
  return resultsByPage.rows
}

export { getTravelsService }