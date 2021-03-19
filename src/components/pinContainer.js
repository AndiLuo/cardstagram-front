import React from "react";
import { connect } from "react-redux";
import Pin from "./pin";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5)
    }
}))

const mapStateToProps = (state) => ({
  pins: state.fetchReducer.pins,
});

function PinContainer(props) {
  const classes = useStyles();
  const { pins } = props;
  let gallery = "";
  gallery = pins.map((pin, idx) => <Pin key={idx} pins={pin} />);
  return <Grid
        className={classes.root}
        container
        spacing={5}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{gridGap:"30px"}}
        >
        {gallery}
        </Grid>
}

export default connect(mapStateToProps)(PinContainer);
