import React, {Component} from 'react';
import {Card, CardActions, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './album-card.css'

class AlbumCard extends Component {
    constructor(props) {
        super(props);
        this.nome = this.props.album.nome;
        this.urlImg = this.props.album.urlImg;
    }

    render() {
        const nome = this.nome;
        const urlImg = this.urlImg;
        return (
                <div className="a-coluna a-25">
                    <Card className="a-card" style={{height: 400}}>
                        <CardMedia>
                            <div className="album-card_img">
                                <img src={urlImg} alt=""/>
                            </div>
                        </CardMedia>
                        <CardText>
                            Artista <br/>
                            Música - {nome}
                        </CardText>
                        <CardActions>
                            <FlatButton label="Play"/>
                        </CardActions>
                    </Card>
            </div>
        );
    }
}

export default AlbumCard;
