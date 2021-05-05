import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Landing from './Landing';
import Navigation from './Navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Test from './TestDashboard';
import lessons from './lessons';
import Alphabets from './Alphabets';
import Words from './Words';
import lessons_words from './lessons_words';
import { AuthProvider } from '../firebase/Auth';
import PrivateRoute from './PrivateRoute';
import Test1 from './Tests/Test1';
import Test2 from './Tests/Test2';
import Test3 from './Tests/Test3';
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header>
            <Navigation />
          </header>
        </div>
        <Route exact path="/" component={Landing} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/tests" component={Test} />
        <PrivateRoute path="/test/1" component={Test1} />
        <PrivateRoute path="/test/2" component={Test2} />
        <PrivateRoute path="/test/3" component={Test3} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/lessons_words/:id" component={lessons_words} />
        <PrivateRoute path="/lessons/:id" component={lessons} />

        
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
