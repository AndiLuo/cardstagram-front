import "gestalt/dist/gestalt.css";
import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


function Pin(props) {
    const pin = props;
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400" rel="stylesheet"></link>
            <Card style={{ fontFamily: "Consolas"}}>
                <CardActionArea>
                    <CardMedia
                        style={{ height: "200px", width: "200px" }}
                        image={pin.pins.image}
                        title={pin.pins.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {pin.pins.title}
                        </Typography>
                        <Typography>
                            {pin.pins.author}
                        </Typography>
                        <Typography>
                            {pin.pins.description}
                        </Typography>


                    </CardContent>

                </CardActionArea>
            </Card>
        </div>

    );

}
export default Pin;
