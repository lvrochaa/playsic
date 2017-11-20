import React, {Component} from 'react';
// import SpotifyWebApi from 'spotify-web-api-js/src/spotify-web-api';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import CampoBusca from './componentes/CampoBusca';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const client_id = '821acfdf1f9e4116ad4a56a4eb8506a8';
        const client_secret = 'f04bf4b832464e40ad40e1029b0cc738';

        let request = require('request');

        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                this.token = body.access_token;
                let options = {
                    url: 'https://api.spotify.com/v1/users/jmperezperez',
                    headers: {
                        'Authorization': 'Bearer ' + this.token
                    },
                    json: true
                };
                request.get(options, function(error, response, body) {
                    console.log(body);
                });
            }
        });

        // let spotifyApi = new SpotifyWebApi();
        // spotifyApi.setAccessToken(this.token);
        // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
        //     .then(function(data) {
        //         console.log('Artist albums', data);
        //     }, function(err) {
        //         console.error(err);
        //     });

        return (
            <Router>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div data-reactroot>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">
                                <div className="menu-link">
                                    <Link to="/">Playsic</Link>
                                </div>
                            </h1>
                            <CampoBusca/>
                        </header>
                        <div className="App-intro">
                            <div>
                                <Route exact path="/" component={Home}/>
                                <Route path="/topics" component={Topics}/>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
