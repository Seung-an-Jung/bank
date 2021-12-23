import '../App.css'
import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'

import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

function Exchange() {
    
    const location = useLocation()
    const [value1, setValue1] = useState(location.state.value1)
    const [value2, setValue2] = useState(location.state.value2)
    const [value3, setValue3] = useState(location.state.value3)
    const [value4, setValue4] = useState(location.state.value4)
    const [value5, setValue5] = useState(location.state.value5)
    const [value6, setValue6] = useState(location.state.value6)
    const [value7, setValue7] = useState(location.state.value7)
    const [value8, setValue8] = useState(location.state.value8)
    const [result_kakao, setKakao] = useState(location.state.result_kakao)
    const [result_kb, setKb] = useState(location.state.result_kb)
    const [result_nh, setNh] = useState(location.state.result_nh)
    const [result_sinhan, setSinhan] = useState(location.state.result_sinhan)
    const [result_woori, setWoori] = useState(location.state.result_woori)
    const [result_ibk, setIbk] = useState(location.state.result_ibk)
    const [result_hana, setHana] = useState(location.state.result_hana)
    const [val_kakao, setKakaoVal] = useState(location.state.val_kakao)
    const [val_kb, setKbVal] = useState(location.state.val_kb)
    const [val_nh, setNhVal] = useState(location.state.val_nh)
    const [val_sinhan, setSinhanVal] = useState(location.state.val_sinhan)
    const [val_woori, setWooriVal] = useState(location.state.val_woori)
    const [val_ibk, setIbkVal] = useState(location.state.val_ibk)
    const [val_hana, setHanaVal] = useState(location.state.val_hana)

    function handleClick(e) {
        window.location.href = '/Next/Retirement'
    }

    function calculate(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val;
                if(i == 0) {
                    val = 10
                }
                else if(0<i<4) {
                    val =8
                }
                else {
                    val = 4
                }
    
                let res = result_sinhan + star * val
                setSinhan(res)
                setSinhanVal(json[i].자산Data)
            } else if (json[i].은행ID == 90) {
                let val;
                //kakao
                if(i == 0) {
                    val = 10
                }
                else if(0<i<4) {
                    val =8
                }
                else {
                    val = 4
                }
                let res = result_kakao + star * val
                setKakao(res)
                setKakaoVal(json[i].자산Data)
            } else if (json[i].은행ID == 4) {
                let val;
                //kb
                if(i == 0) {
                    val = 10
                }
                else if(0<i<4) {
                    val =8
                }
                else {
                    val = 4
                }
                let res = result_kb + star * val
                setKb(res)
                setKbVal(json[i].자산Data)
            } else if (json[i].은행ID == 11) {
                let val;
                //nh
                if(i == 0) {
                    val = 10
                }
                else if(0<i<4) {
                    val =8
                }
                else {
                    val = 4
                }
                let res = result_nh + star * val
                setNh(res)
                setNhVal(json[i].자산Data)
            } else if (json[i].은행ID == 20) {
                let val;
                //woori
                if(i == 0) {
                    val = 10
                }
                else if(0<i<4) {
                    val =8
                }
                else {
                    val = 4
                }
                let res = result_woori + star * val
                setWoori(res)
                setWooriVal(json[i].자산Data)
            } else if (json[i].은행ID == 3) {
                let val;
                // ibk
                if(i == 0) {
                    val = 10
                }
                else if(0<i<4) {
                    val =8
                }
                else {
                    val = 4
                }
                let res = result_ibk + star * val
                setIbk(res)
                setIbkVal(json[i].자산Data)
            } else if (json[i].은행ID == 81) {
                let val;
                //hana
                if(i == 0) {
                    val = 10
                }
                else if(0<i<4) {
                    val =8
                }
                else {
                    val = 4
                }
                let res = result_hana + star * val
                setHana(res)
                setHanaVal(json[i].자산Data)
            } else {
                console.log('no bank')
            }
        }
    }


    function get_from_db() {
        fetch('http://localhost:3001/get_fee', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate(json, location.state.value6)
            })
    }

    return (
        <div className="Container">
            <h2> 본 항목은 수수료를 중요시하는 분에게 제공되는 질문입니다.</h2>
            <button onClick={get_from_db}>getdb</button>
            <button onClick={handleClick} className="button-10">
                다음
            </button>
            <div>
                현재 카카오 누적점수 : {result_kakao}
                현재 신한 누적점수 : {result_sinhan}
                현재 ibk 누적점수 : {result_ibk}
                현재 kb 누적점수 : {result_kb}
                현재 nh 누적점수 : {result_nh}
                현재 woori 누적점수 : {result_woori}
                현재 hana 누적점수 : {result_hana}
            </div>
        </div>
    )
}

export default Exchange
