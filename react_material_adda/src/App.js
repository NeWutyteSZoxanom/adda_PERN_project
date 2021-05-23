import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import ProfilePage from './components/Pages/ProfilePage';
import Notification from './components/Pages/Notification';

function App() {
  return (
    <BrowserRouter>
      <div className="apps">
        <NavBar />

        <Container className="container_app">
          <Route exact path="/" component={MainContent} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/notification" component={Notification} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
