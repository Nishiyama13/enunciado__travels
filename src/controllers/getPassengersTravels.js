import httpStatus from "http-status";
import * as passengersTravelsService from "../services/passengersTravelsService.js"

async function getPassengersTravels(req, res) {
  const page = req.query.page
  const name = req.query.name
  try {
    const result = await passengersTravelsService.getTravelsService(page, name)
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    if(error.message === 'Invalid page number'){
      res.sendStatus(httpStatus.BAD_REQUEST);
    }
    res.sendStatus(error);    
  }
}

export { getPassengersTravels }