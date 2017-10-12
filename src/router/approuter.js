import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CommentBox from '../components/landingpage/commentBox';
import Login from '../components/login/login';
import PageNotFound from '../components/other/pagenotfound';
import Profile from '../components/profile/profile';

const AppRouter = () => (
    <BrowserRouter>
    <Switch>
     <Route path="/" component={Login} exact={true}/>
    <Route path="/dashboard" render={()=><CommentBox  url='http://localhost:3001/api/comments'
 pollInterval={2000}/>}/>
    <Route path="/profile" component={Profile}/>
    <Route component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
);

export default AppRouter;