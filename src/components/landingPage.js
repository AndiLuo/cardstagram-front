import React, {useState, useEffect} from 'react';
import SearchForm from './searchForm';
import {connect} from 'react-redux';
import PinContainer from './pinContainer';
import Spinner from './spinner'
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";


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
      setLoadMessage('Please wait while cards load in......')
      setTimeout(() => {
        setLoaded(true)
        setLoadMessage('')
      }, 8000)
    }, [])

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
      
    const loading = props.loading
  
  
    return(
        <div>
            <div style={jumboStyle}>
                <h1>Cardstagram</h1>
            </div>
            <div align="center">
            <SearchForm />
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
              {loaded  && 
                <div>
                {loading ?  <Spinner/> : <PinContainer/> }
               </div>
              }
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

export default withRouter(connect(mapStateToProps)(withStyles(styles)(LandingPage)));