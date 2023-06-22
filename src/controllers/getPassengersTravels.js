import * as passengersTravelsService from "../services/passengersTravelsService.js"

async function getPassengersTravels(req, res) {
  const page = req.query.page
  const name = req.query.name
  try {
    const result = await passengersTravelsService.getTravelsService(page, name)
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);    
  }
}

export { getPassengersTravels }