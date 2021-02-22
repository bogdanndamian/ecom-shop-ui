import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css';
import HomePage from './page/homepage/homepage.component'

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);
const NoMatch = () => (
    <div>
        <h1>Not found</h1>
    </div>
)

function App() {
    return (
        /**
         *  render based on the url path only the components that are really needed
         *  Switch -> first valid route found the component is rendered
         *         -> nothing else it's rendered
         */
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/hats' component={HatsPage}/>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
