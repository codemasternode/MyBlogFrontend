import React from 'react';
import Nav from './nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './home';

import TutorialPost from './tutorial-post';
import Login from './login';
import Register from './register';
import Tutorials from './tutorials';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <Route path="/tutorials/:id" component={TutorialPost} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/tutorials" component={Tutorials} />
                        <Route path="/" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>

        )
    }
}


export default App;