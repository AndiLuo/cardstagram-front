import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createPin } from '../actions/newPinAction'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
      background: "black"
    },
    input: {
      color: "white",
      textAlign:"center",
      justifyContent:"center",
      fontFamily:"Consolas"
    }
  };


class NewPin extends Component {

    constructor() {
        super();
        this.state = {
            pin: {
                title: '',
                author:'',
                image:''

            },
            confirm: '',
            send: false
        };
    }

    componentDidMount() {
    }
    //looks at each textfields ID and sets values in this.state.pin according to that textfields value
    createSubmission(e) {
        const pinSubmission = Object.assign({}, this.state.pin)
        pinSubmission[e.target.id] = e.target.value
        if (pinSubmission <= 3){
            alert('Must be more than 3 letters')
        }
        this.setState({
            pin: pinSubmission
        })
    }

    reloadPage(){
        if( this.state.send === true){
            window.location.reload()
        }
    }

    //calls createPin action and assigns the pin state to body
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.send === false){
            this.props.dispatch(createPin(this.state.pin));
            alert("Card has been created")
            setTimeout(() => {
                this.setState({
                    send: true
                })
            }, 100)
        }
       
    }

    confirmEntry(e) {
        e.preventDefault()
        if (this.state.pin.title.length < 3 ){
            alert('Title must be at least 3 characters')
        }
        if (this.state.pin.author.length < 3){
            alert('Author must be at least 3 characters')
        }
        if (this.state.pin.image.length < 10){
            alert('Must be a valid image URL')
        }
        else{
            this.setState({
                confirm: 'true'
            })
            alert('Entry confirmed, please press create pin ')
        }   

    }

    validateEntry() {
        if (this.state.confirm === 'true') {
            return this.state.confirm
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div style={{
                color: "white",
                height: "100vh",
                fontFamily: "Consolas",
                fontSize: "1vw",
                display: "flex",
                position: "relative",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center"}}>
                <Button style={{fontFamily: "Consolas", borderColor:"white", fontSize:"1vw", outline: "2px solid white"}}>
                    <a onClick={() => {window.location.href="/"}} style={{color:"white", borderColor:"white", fontSize:"2vw"}}>
                        Back to landing page
                    </a>
                </Button>
                <div>
                    <form labelWidth={60}>
                        <TextField InputLabelProps={{
                            style: {
                                color: "white",
                                fontSize: "1vw",
                                textAlign: "center",
                                fontFamily: "Consolas",
                            }
                        }} InputProps={{className: classes.input}} required onChange={this.createSubmission.bind(this)} placeholder="At least 3 letters" size="medium" id="title" type="text" label="Title" /><br />
                        <TextField InputLabelProps={{
                            style: {
                                color: "white",
                                fontSize: "1vw",
                                textAlign: "center",
                                fontFamily: "Consolas",
                            }
                        }} InputProps={{className: classes.input}} required onChange={this.createSubmission.bind(this)} placeholder="At least 3 letters"  id="author" type="text" label="Author" /><br />

                        <TextField InputLabelProps={{
                            style: {
                                color: "white",
                                fontSize: "1vw",
                                textAlign: "center",
                                fontFamily: "Consolas",
                            }
                        }} InputProps={{className: classes.input}} required onChange={this.createSubmission.bind(this)} id="image" type="text" label="ImageURL" /><br />
                        <br/>
                        (Please Right-Click an online image and "Copy Image location" then Paste here)
                        <br/>
                        <br />
                        <TextField InputProps={{className: classes.input}} placeholder="Enter a Description" style={{fontSize:"15px", color:"white"}} multiline rows={3} onChange={this.createSubmission.bind(this)} variant="outlined" id="description" type="enter a description..." />
                        <br />
                        
                        {/* <TextField InputLabelProps={{
                            style: {
                                color: "white",
                                fontSize: "0.6vw",
                                textAlign: "center",
                                fontFamily: "Consolas"
                            }
                        }} InputProps={{className: classes.input}} required onChange={this.createSubmission.bind(this)} id="width" type="number" label="Designate width" />
                        <br />
                        <TextField InputLabelProps={{
                            style: {
                                color: "white",
                                fontSize: "0.6vw",
                                textAlign: "center",
                                fontFamily: "Consolas",
                            }
                        }} InputProps={{className: classes.input}} required onChange={this.createSubmission.bind(this)} id="height" type="number" label="Designate height" /> */}

                        <br />
                        <br />
                        <Button
                            variant='contained'
                            color="primary"
                            onClick={this.confirmEntry.bind(this)}>
                            Confirm Entry
                </Button>
                        <Button
                            disabled={!this.state.confirm}
                            variant='contained'
                            color="primary"
                            onClick={this.handleSubmit.bind(this)}>
                            Create Card</Button>
                    </form>
                </div>
                {this.reloadPage()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(NewPin)));