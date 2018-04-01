import React from 'react';
import Nav from './nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Tutorials from './tutorials';
import Home from './home';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <Route path="/tutorials" component={Tutorials} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}


export default App;