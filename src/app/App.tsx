import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Game from "../modules/routes/Game/Game";
import GameStart from "../modules/routes/GameStart/GameStart";
import GameOver from "../modules/routes/GameOver/GameOver";
const App = () => {
    return (
        <Switch>
            <Route path="/start" component={GameStart} />
            <Route path="/game-over" component={GameOver} />
            <Route path="/" component={Game} />
        </Switch>
    );
};

const mapStateToProperties = () => {
    return {};
};

const mapDispatchToProperties = {};

export default connect(mapStateToProperties, mapDispatchToProperties)(App);
