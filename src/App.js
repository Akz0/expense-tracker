import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import TopBar from './components/TopBar';
import MainContent from './containers/MainContent';
import { MainContainer, ContentWrapper } from './Designs/MainContainer';

function App() {
    const [sideBar, setSideBar] = useState(false)

    const handleSideBar = () => {
        const side = sideBar
        setSideBar(!side)
    }
    const closeSideBar = () => {
        setSideBar(false)
    }
    return (
        <div className="App">
            <BrowserRouter>
                <MainContainer>
                    <TopBar onClickMenu={handleSideBar} />
                    <ContentWrapper>
                    <Navigation open={sideBar} />
                    <MainContent />
                    </ContentWrapper>
                </MainContainer>
            </BrowserRouter>
        </div>
    );
}

export default App;
