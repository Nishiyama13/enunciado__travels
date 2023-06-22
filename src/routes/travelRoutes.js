import { Router } from "express";
import * as passengersTravelController from "../controllers/getPassengersTravels.js";

const routes = Router();

routes.get("/passengers/travels", passengersTravelController.getPassengersTravels )
export {
  routes
};