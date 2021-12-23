import Mainquestion from './components/Mainquestion'
import Mobilebanking from './components/Mobilebanking'
import Map from './components/Map'
import Fee from './components/Fee'
import Retirement from './components/Retirement'
import Retirement1 from './components/Retirement1'
import Retirement2 from './components/Retirement2'
import Retirement3 from './components/Retirement3'
import Conclusion from './components/Conclusion'
import Asset from './components/Asset'
import Kindness from './components/Kindness'
import Map2 from './components/Map2'
import MapContainer from './components/MapContainer'
import MapContainer2 from './components/MapContainer2'
import BankMap from './components/BankMap'
import Mobilebanking1 from './components/Mobilebanking1'
import Mobilebanking2 from './components/Mobilebanking2'
import Mobilebanking3 from './components/Mobilebanking3'
import Brandimage from './components/Brandimage'
import Realexchange from './components/Realexchange'
import Realexchange1 from './components/Realexchange1'
import Realexchange2 from './components/Realexchange2'
import styled from 'styled-components'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import * as React from 'react'

import axios from 'axios'
import Feedback from 'react-bootstrap/esm/Feedback'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://source.unsplash.com/random/1920x1080);
    background-size: cover;
`

function Home() {
    function handleClick(e) {
        window.location.href = '/Mainquestion'
    }

    return (
        <body>
            <div class="container">
                <div class="header">
                    <h1>BEST BANK</h1>
                    <div class="nav">
                        <ul>
                            <li>
                                <a href="http://localhost:3000/">처음으로</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/Mainquestion">
                                    질문화면
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="hero">
                    <h2>최적의 은행을 찾아드립니다.</h2>
                    <button onClick={handleClick} className="button">
                        설문시작
                    </button>
                </div>
            </div>
        </body>
    )
}

function App() {
    return (
        <Router>
            <Route exact path="/Map">
                <Map />
            </Route>
            <Route exact path="/MapContainer">
                <MapContainer />
            </Route>
            <Route exact path="/Mainquestion">
                <Mainquestion />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Next/Mobilebanking">
                <Mobilebanking />
            </Route>
            <Route exact path="/Conclusion">
                <Conclusion />
            </Route>

            <Route exact path="/Next/Retirement">
                <Retirement />
            </Route>
            <Route exact path="/Next/Retirement1">
                <Retirement1 />
            </Route>
            <Route exact path="/Next/Retirement2">
                <Retirement2 />
            </Route>
            <Route exact path="/Next/Retirement3">
                <Retirement3 />
            </Route>
            <Route exact path="/Next/Realexchange">
                <Realexchange />
            </Route>
            <Route exact path="/Next/Realexchange1">
                <Realexchange1 />
            </Route>
            <Route exact path="/Next/Realexchange2">
                <Realexchange2 />
            </Route>

            <Route exact path="/Next/Fee">
                <Fee />
            </Route>
            <Route exact path="/Next/Asset">
                <Asset />
            </Route>
            <Route exact path="/Next/Kindness">
                <Kindness />
            </Route>
            <Route exact path="/Next/Map2">
                <Map2 />
            </Route>
            <Route exact path="/MapContainer">
                <MapContainer />
            </Route>
            <Route exact path="/MapContainer2">
                <MapContainer2 />
            </Route>
            <Route exact path="/Next/Mobilebanking1">
                <Mobilebanking1 />
            </Route>
            <Route exact path="/Next/Mobilebanking2">
                <Mobilebanking2 />
            </Route>
            <Route exact path="/Next/Mobilebanking3">
                <Mobilebanking3 />
            </Route>
            <Route exact path="/Next/Brandimage">
                <Brandimage />
            </Route>
        </Router>
    )
}

export default App
