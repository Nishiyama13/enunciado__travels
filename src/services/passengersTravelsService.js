import * as passengersTavrelsRepository from "../repositories/passengersTavrelsRepository.js"

async function passengersTavrelsInfo(){
const {rows} =  await passengersTavrelsRepository.findPassagersTravels()
return rows 
}

export { passengersTavrelsInfo }