import React from 'react';
import Nav from './nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './home';
import BlogPost from './blog-post';
import TutorialPost from './tutorial-post';
import Login from './login';
import Register from './register';
import Blog from './blog';
import Tutorials from './tutorials';

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