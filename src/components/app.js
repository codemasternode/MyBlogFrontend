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
                        <Route path="/blog/:nazwa" component={BlogPost} />
                        <Route path="/tutorials/:nazwa" component={TutorialPost} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/tutorials" component={Tutorials} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}


export default App;