import React, { useEffect } from "react";
import { connect } from "react-redux";
import {searchPin, fetchPins, setLoading} from "../actions/fetchAction";
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
  },
  input: {
    color: "white",
    textAlign:"center",
    justifyContent:"center"
  }
};

const mapStateToProps = (state) => ({
  searchText: state.pins.searchText
})

function SearchForm(props) {

  const { classes } = props

  useEffect(() => {
    props.fetchPins(props.searchText)
  })

  // sets search state to input value, call fetchPins here for auto fetch on input change
  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.value.length > 3 ){
      props.searchPin(e.target.value);
      props.setLoading();
      props.fetchPins(props.searchText)
    }
    else{
      return
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchPins(props.searchText)
    props.setLoading();

  }

  return (
    <div direction="row" style={{ whiteSpace: 'nowrap'}}>
      &nbsp;
      <form onSubmit = {handleSubmit}>
        <TextField
          id="standard-basic"
          label="Search Cards"
          placeholder="Find You"
          onChange={handleChange}
          className={classes.root}
          variant="outlined"
          defaultValue={props.inputValue}
          InputProps={{
            className: classes.input
          }}
          InputLabelProps={{
            style: {
              color: "white",
              fontSize:"1vw",
              textAlign:"center",
              fontFamily: "Consolas",
            }
          }}
          style={{width:"50%", height:"40%" }}
        />
        <p style={{color:"white"}}>{props.inputValue}</p>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, {searchPin, fetchPins, setLoading})(withStyles(styles)(SearchForm));

