import axios from "axios"



const GoogleCalendarInitView = async() =>{
    const rr = await axios({
        headers: { Accept: 'text/html, application/json, text/plain, */*' },
        proxy: undefined,
        url: 'http://google.com/rest/v1/calendar/init/',
        method: 'get'
      })
    .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    return result.json()
}

const GoogleCalendarRedirectView = async() =>{
    const rr = await axios({
        headers: { Accept: 'text/html, application/json, text/plain, */*' },
        proxy: undefined,
        url: 'http://google.com/rest/v1/calendar/redirect/',
        method: 'get'
      })
    .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    return result.json()
}


export{
    GoogleCalendarInitView,
    GoogleCalendarRedirectView
}