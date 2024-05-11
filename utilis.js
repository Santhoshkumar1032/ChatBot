import moment  from "moment";

import axios from 'axios';



export const analyze =(text) => {
    if(text.includes('hi')||text.includes('hai')||text.includes('hello'))
        return "Hi!!!"
     if(text.includes('google'))
        return <a href="https://www.google.com">GoogleLink</a> 
     if(text.includes('ekart club'))
         return (<a href="https://ekart.club/">EkartClub</a>)
    else if(text.includes('date'))
        return moment().format('MMMM Do YYYY');
    else if(text.includes('time'))
         return moment().format('h:mm:ss a');
    else if(text.includes('thank you'))
        return 'thanks for contacting me'
    else
    return "I can't get you. can you repharse the message"
}
