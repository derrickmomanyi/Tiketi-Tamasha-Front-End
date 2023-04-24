import React from "react";



    function Calendar(){


        const gapi = window.gapi
        // const CLIENT_ID = "401422596140-41k5anood1vak9iuol4vrlrv5au0ejch.apps.googleusercontent.com"
        // const API_KEY = "AIzaSyBivuXBGV5wgbf--W8IUI84lY_f6_c40xA"
        // const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
        // const SCOPES = 'https://www.googleapis.com/auth/calendar.event';
 

        function handleClick(){
            gapi.load('client:auth2', () => {
            console.log('loaded client')

            // gapi.client.init({
            //     apiKey: API_KEY,
            //     clientId: CLIENT_ID,
            //     discoveryDocs: DISCOVERY_DOCS,
            //     scope: SCOPES,
            // })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))
            // gapi.auth2.getAuthInstance().signIn()
            // .then(() => {
            //   const event = {
            //     'summary': 'Google I/O 2015',
            //     'location': '800 Howard St., San Francisco, CA 94103',
            //     'description': 'A chance to hear more about Google\'s developer products.',
            //     'start': {
            //       'dateTime': '2015-05-28T09:00:00-07:00',
            //       'timeZone': 'America/Los_Angeles'
            //     },
            //     'end': {
            //       'dateTime': '2015-05-28T17:00:00-07:00',
            //       'timeZone': 'America/Los_Angeles'
            //     },
            //     'recurrence': [
            //       'RRULE:FREQ=DAILY;COUNT=2'
            //     ],
            //     'attendees': [
            //       {'email': 'lpage@example.com'},
            //       {'email': 'sbrin@example.com'}
            //     ],
            //     'reminders': {
            //       'useDefault': false,
            //       'overrides': [
            //         {'method': 'email', 'minutes': 24 * 60},
            //         {'method': 'popup', 'minutes': 10}
            //       ]
            //     }
            //   };

            //   const request = gapi.client.calendar.events.insert({
            //     'calendarId': 'primary',
            //     'resource': event,
            //   })

            //   request.execute(event => {
            //     console.log(event)
            //     window.open(event.htmlLink)
            //   })
            // })
                    
            
                
            })
}

    return(
        <>
        <button  type="button" className="btn btn-success calendar" onClick={handleClick}>SET REMINDER</button>        
        
        </>
    )
}
export default Calendar;