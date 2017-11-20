import React, {Component} from 'react';
import AlbumCard from './album-card/AlbumCard'

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.albuns = this.props.albuns;
    }

    render() {
        const albumList = this.albuns.map((album, index) => {
            return (
                <div key={index}>
                    <AlbumCard album={album}/>
                </div>
            );
        });
        return (
            <div>
                {albumList}
            </div>
        );
    }
}

export default AlbumList;
