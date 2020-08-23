import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, /* CardActions, Button */ } from '@material-ui/core';

// ({ images, title })
// article link: https://jeb.biologists.org/content/221/12/jeb179598
// {this.props.images.map((value) => <img style={imageStyle} src={value} alt="Photos of projects" />)}

//const googlePlay = "https://play.google.com/store/apps/developer?id=Nikolaj+Jensen";
//const appleStore = "https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697";

export default class ProjectCard extends Component {
    render() {
        return (
            <Card raised="true">
                <CardActionArea>
                    <CardMedia component="img" alt="Project card" image={this.props.images} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button onClick={(e) => {e.preventDefault(); window.location.href={googlePlay}}} size="small" color="primary">Google Play</Button>
                    <Button onClick={(e) => {e.preventDefault(); window.location.href={appleStore}}} size="small" color="primary">Apple Appstore</Button>
                </CardActions> */}
            </Card>
        )
    }
}