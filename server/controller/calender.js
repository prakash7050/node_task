

import * as CalenderServices from '../services/calender.js'

const GoogleCalendarInitView = async(req, res) =>{
    const result = await CalenderServices.GoogleCalendarInitView()
    res.json({data:result})
}

const GoogleCalendarRedirectView = async(req, res) =>{
    const result = await CalenderServices.GoogleCalendarRedirectView()
    res.json({data:result})
}

export{
    GoogleCalendarInitView,
    GoogleCalendarRedirectView
}