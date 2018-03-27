import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Views
import TaskList from './views/TaskList/TaskList';
import TaskDetails from './views/TaskDetails/TaskDetails';

export default (
    <Switch>
        <Route exact path='/' component={TaskList} />
        <Route path='/TaskDetails/' component={TaskDetails} />
    </Switch>
)