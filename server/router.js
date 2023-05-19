import express from "express";
import { HandleErrors } from "./middlewares/error.js";
import { GoogleCalendarInitView, GoogleCalendarRedirectView } from "./controller/calender.js";

const router = express.Router();

router.get(
  "/rest/v1/calendar/init/",
  HandleErrors(GoogleCalendarInitView)
);

router.get(
    "/rest/v1/calendar/redirect/",
    HandleErrors(GoogleCalendarRedirectView)
 );

export default router;