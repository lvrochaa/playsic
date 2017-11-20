import React, {Component} from 'react';
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
