import React, {Component} from 'react';
import Layout from "./hoc/Layout/LayoutTwo";
import Quiz from "./containers/Quiz/Quiz";
import {Route, Switch} from 'react-router-dom'
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizListt from "./containers/QuizList/QuizListt";


class App extends Component {
    render() {
        return(
            <Layout>
                <Switch>
                    <Route path = "/auth" component={Auth}/>
                    <Route path = "/quiz-creator" component={QuizCreator}/>
                    <Route path = "/quiz/:id" component={Quiz}/>
                    <Route path = "/" component={QuizListt}/>
                </Switch>
            </Layout>
        )
    }
}

export default App;
