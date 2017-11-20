import React, {Component} from 'react';
import AlbumList from './../componentes/AlbumList'

class Home extends Component {
    constructor() {
        super();
        this.albuns = [
            {nome: 'album 1', urlImg: 'url1.jpg'},
            {nome: 'album 2', urlImg: 'url2.jpg'},
            {nome: 'album 3', urlImg: 'url2.jpg'},
            {nome: 'album 4', urlImg: 'url2.jpg'},
            {nome: 'album 5', urlImg: 'url2.jpg'},
            {nome: 'album 6', urlImg: 'url2.jpg'},
            {nome: 'album 7', urlImg: 'url2.jpg'},
            {nome: 'album 8', urlImg: 'url2.jpg'},
            {nome: 'album 9', urlImg: 'url2.jpg'},
        ]
    }

    render() {
        return (
            <div>
                <AlbumList albuns={this.albuns}/>
            </div>
        );
    }
}

export default Home;
