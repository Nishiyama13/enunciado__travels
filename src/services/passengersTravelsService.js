import * as passengersTavrelsRepository from "../repositories/passengersTavrelsRepository.js"
import httpStatus from "http-status"

/*async function getTravelsService(page, name){
  if(name === undefined && page === undefined){
    return await getPassengersTravels();
  } else if(name) {
    return await getTravelsByPassengerName(name)
  } else if(page) {
    return await getTravelsByPage(page)
  }
}
*/
async function getTravelsService(page, name){
    if(name || name===false) {
      return await getTravelsByPassengerName(name)
    }
     if(page || page ==='') {
      return await getTravelsByPage(page)
    }else return await getPassengersTravels();
    
  }

async function getPassengersTravels(){
  const {rows} =  await passengersTavrelsRepository.findPassagersTravels()
  if(rows.length > 100) return res.status(httpStatus.INTERNAL_SERVER_ERROR); 
  return rows
}

async function getTravelsByPassengerName(name){
 //   const numeroLetras = name.split('');
 //   if(numeroLetras.length === 0) throw httpStatus.BAD_REQUEST


  const passengerTravels = await passengersTavrelsRepository.findTravelsByName(name)
  if(passengerTravels.rows.length === 0) throw httpStatus.NOT_FOUND
  return passengerTravels.rows
}

async function getTravelsByPage(page){

  const pageNumber = parseInt(page);
  if(pageNumber <= 0 || isNaN(pageNumber)){
      throw new Error('Invalid page number')
  }
  const resultsByPage = await passengersTavrelsRepository.getPassagersTravelsByPage(page)
  if(resultsByPage.rows.length === 0) throw httpStatus.NOT_FOUND
  return resultsByPage.rows

    /*
  const resultsByPage = await passengersTavrelsRepository.getPassagersTravelsByPage(page)
  if(resultsByPage.rows.length === 0) throw httpStatus.NOT_FOUND
  return resultsByPage.rows
  */
}



export { getTravelsService }