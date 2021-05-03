import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PinContainer from './pinContainer';
// import Spinner from './spinner'
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import {fetchPins, assignPins} from "../actions/fetchAction"

const styles = {
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
        fontFamily:"Consolas"
      },
  },
  input: {
    color: "white",
    fontSize:"1vw",
    fontFamily:"Consolas"
  }
};

const mapStateToProps = state => ({
    loading: state.pins.loading,
  })


function LandingPage(props) {
    const [loaded, setLoaded] = useState(false)
    const [loadMessage, setLoadMessage] = useState('')

    useEffect(() => {
      //Run axios fetch action on landing page
      props.fetchPins()
      setLoadMessage('Please wait while cards load in......')
      setTimeout(() => {
        setLoaded(true)
        setLoadMessage('')
      }, 3500)
    }, [])

    //Runs the payload action populating the gallery in global state within reduceer
    props.assignPins()

    const jumboStyle = {
        color: "white",
        //backgroundattachment: fixed = image scroll dissapears as you scroll!
        backgroundAttachment: 'fixed',
        backgroundSize: "auto",
        backgroundPosition: "center center",
        backgroundRepeat: 'no-repeat',
        fontFamily: "Consolas",
        fontSize: "5vw",
        display: "flex",
        position: "relative",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      };


    //assign useHistory function to a const for routing
    const history = useHistory()
    //assign function incorporating history + route to button 

    const redirectCreate = () => {
        history.push('/createPin')
      }
      
    // const loading = props.loading
  
  
    return(
        <div>
            <div style={jumboStyle}>
                <h1>Cardstagram</h1>
            </div>
            <div align="center">
        
            <span>
                <Button 
                onClick = {redirectCreate}
                variant= "outlined"
                color = "primary"
                style={{fontFamily: "Consolas", borderColor:"white", fontSize:"1vw", color:"white"}}
                >
                    Create your own card!
                </Button>
            </span>
            <div>
              <br/>
             
                <div style ={{fontSize:"2vw", color:"white"}}>
                {loaded ?  <PinContainer/>: "If this message dissapears without anything appearing, the Heroku server is probably down......" }
               </div>
              
            </div>
            <br/>
            <br/>
            <div style={{fontFamily:"Consolas", fontSize:"4vw", color:"white"}}>
            {loadMessage}
            </div>
            </div>
        </div>
    )
}

export default withRouter(connect(mapStateToProps, {fetchPins, assignPins})(withStyles(styles)(LandingPage)));