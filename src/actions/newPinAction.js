
//Takes in data arg, dispatches data to EXPRESS server and POSTS the data into the db
export function createPin(data){
    return dispatch => {
        return fetch('/api/pins', { 
            method: 'POST', 
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
            mode: 'cors'})
            .catch( (e) => console.log(e) );
    }    
}