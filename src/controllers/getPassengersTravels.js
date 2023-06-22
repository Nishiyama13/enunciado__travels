import * as passengersTravelsService from "../services/passengersTravelsService.js"

async function getPassengersTravels(req, res) {
  try {
    const result = await passengersTravelsService.passengersTavrelsInfo()
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);    
  }
}

export { getPassengersTravels }