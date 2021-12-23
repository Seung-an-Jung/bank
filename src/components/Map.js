import '../App.css'

//import PopupDom from './PopupDom'
//import PopupPostCode from './PopupPostCode'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'
import DaumPostCode from 'react-daum-postcode'
import React, { useState, useEffect } from 'react'
import KakaoMapScript from './KakaoMapScript'

export default function Map(props) {
    const [mapVal_kb, setMapval_kb] = useState(0);
    const [mapVal_ibk, setMapval_ibk] = useState(0);
    const [mapVal_sinhan, setMapval_sinhan] = useState(0);
    const [mapVal_hana, setMapval_hana] = useState(0);
    const [mapVal_woori, setMapval_woori] = useState(0);
    const [mapVal_kakao, setMapval_kakao] = useState(0);
    const [mapVal_nh, setMapval_nh] = useState(0);

    const [isMapOpen, setMapOpen] = useState(false)
    //const location = useLocation()
    const [addr, setAddr] = useState('default')

    let fullAddress
    const handleComplete = (data) => {
        fullAddress = data.address
        let extraAddress = ''
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname
            }
            if (data.buildingName !== '') {
                extraAddress +=
                    extraAddress !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
        }
        //console.log(data)
        //console.log(fullAddress)
        //console.log(data.zonecode)
        //props.onClose()
        // setAddr(fullAddress)
        //openMap()
        setAddr(fullAddress)

        //fullAddress -> 전체 주소반환
    }

    const postCodeStyle = {
        display: 'block',
        position: 'absolute',
        top: '10%',
        width: '600px',
        height: '600px',
        padding: '7px',
    }

    const openMap = () => {
        setMapOpen(true)
    }

    const closeMap = () => {
        setMapOpen(false)
    }

    function handleClick(e) {
        window.location.href = '/Mainquestion'
    }

    useEffect(() => {
        KakaoMapScript(addr)
        console.log(addr)
    }, [addr]) // 마운트 될때 사용할수 있도록 useEffect 사용

    return (
        <div class="container">
            <div class="header">
                <h1>BEST BANK</h1>
                <div class="nav">
                    <ul>
                        <li><a href="http://localhost:3000/">처음으로</a></li>
                        <li><a href="http://localhost:3000/Mainquestion">질문화면</a></li>
                    </ul>
                </div>
            </div>
            <div class="mapbody">
                <h2>추천받은 은행을 내 주위에서 검색해보세요</h2>
                <DaumPostCode onComplete={handleComplete} className="post-code" />
               
                <div class="mapresult"
                    id="myMap"
                    style={{
                        width: '700px',
                        height: '400px',
                        paddingTop: '30px'
                        }}
                ></div>
            </div>
        </div>
    )
}
