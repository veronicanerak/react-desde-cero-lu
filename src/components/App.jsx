import React, {Fragment} from 'react';
import "../styles/styles.scss"
import Form from "./Pages/Form"
import CourseGrid from './Organisms/CourseGrid';
import CourseFullView from "./Pages/CourseFullView"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './Organisms/MainMenu'
import HistoryPage from './Pages/HistoryPage';
import Home from './Pages/Home';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component= { Home} />
      <Route path="/courses/:course_id" component={ CourseFullView } />
      <Route path="/courses" component= { CourseGrid } />      
      <Route path="/history/:history_id" component= { HistoryPage } />
      <Route path="/history" component= { HistoryPage } />
      <Route path="/contact" component= { () => <Form form_name="Contact Us" /> } />
      <Route component={()=> (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Page not found</span>
        </div>
      )} />
    </Switch>
  </Router>
)
 
export default App;
