
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import TopBar from './components/TopBar';
import Charts from './containers/Charts';
import Expenses from './containers/Expenses';
import Home from './containers/Home';
import AuthPage from './containers/Login';
import MainContent from './containers/MainContent';
import NewExpense from './containers/NewExpense';
import Settings from './containers/Settings';
import { MainContainer, ContentWrapper } from './Designs/MainContainer';

function App() {
    const authStatus = useSelector(state => state.auth.authenticated)


    const render = () => {
        if (authStatus) {
            return (
                <>
                    <TopBar />
                    <ContentWrapper>
                        <Navigation />
                        <MainContent>
                            <Route path="/home" exact component={Home} />
                            <Route path="/create" exact component={NewExpense} />
                            <Route path="/expenses" exact component={Expenses} />
                            <Route path="/charts" exact component={Charts} />
                            <Route path="/settings" exact component={Settings} />
                            <Redirect to="/home"/>
                        </MainContent>
                    </ContentWrapper>
                </>
            )
        } else {    
            
            return (
                <>
                    <Route path="/" exact component={AuthPage} />
                    <Redirect to="/"/>
                </>
            )
        }
    }
    return (
        <div className="App">
            <BrowserRouter>
                <MainContainer>
                    {render()}
                </MainContainer>
            </BrowserRouter>
        </div>
    );
}

export default App;
