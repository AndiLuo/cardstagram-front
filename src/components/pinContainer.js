import React, { useState } from "react";
import { connect } from "react-redux";
import Pin from "./pin";
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    "& label.Mui-focused" :{
      color: "white"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      flexGrow: 1,
      color: "white"
    },
  },
  inputRoot: {
    color:"white",
    fontFamily:"Consolas",
    fontSize: "1vw"
  }
}));




const mapStateToProps = (state) => ({
  pins: state.fetchReducer.pins,
});


function PinContainer(props) {
  const [filter, setFilter] = useState("")
  const [search, setSearch] = useState(false)
  const searchGallery = []
  const classes = useStyles();
  const { pins } = props;

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.value.length >= 3) {
      setFilter(e.target.value)
      setSearch(false)
    }
    if (e.target.value.length === 0) {
      setFilter(e.target.value)
      setSearch(false)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Search Cards"
          placeholder="Find You"
          onChange={handleChange}
          variant="outlined"
          defaultValue={filter}
          classes = {classes}
          InputProps ={{
            className : classes.inputRoot
          }}
          InputLabelProps={{
            style: {
              color: "white",
              fontSize: "1vw",
              textAlign: "center",
              fontFamily: "Consolas",
            }
          }}
          style={{ width: "50%", height: "40%", color:"white" }}
        />
      </form>
      <br />
      <br />
      {search ?
        <Grid
          className={classes.root}
          container
          spacing={5}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ gridGap: "30px" }}
        >

          {searchGallery.map(pin => {
            return (
              <Pin pins={pin} />

            )
          })}
        </Grid>
        :
        <Grid
          className={classes.root}
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ gridGap: "30px", flexGrow: "1", overflow: "visible" }}
        >

          {pins.map(pin => {
            if (pin.title.toLowerCase().includes(filter.toLowerCase()) || pin.author.toLowerCase().includes(filter.toLowerCase())) {
              searchGallery.push(pin)
              return (
                <Pin pins={pin} />
              )
            }
          })}
        </Grid>
      }
    </div>
  )
}

export default connect(mapStateToProps)(PinContainer);
