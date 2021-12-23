import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import '../App.css'
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'

function Conclusion(props) {
    const location = useLocation()
    const [value1, setValue1] = useState(location.state.value1)
    const [value2, setValue2] = useState(location.state.value2)
    const [value3, setValue3] = useState(location.state.value3)
    const [value4, setValue4] = useState(location.state.value4)
    const [value5, setValue5] = useState(location.state.value5)
    const [value6, setValue6] = useState(location.state.value6)
    const [value7, setValue7] = useState(location.state.value7)
    const [value8, setValue8] = useState(location.state.value8)
    const [result_kakao, setKakao] = useState(0)
    const [result_kb, setKb] = useState(0)
    const [result_nh, setNh] = useState(0)
    const [result_sinhan, setSinhan] = useState(0)
    const [result_woori, setWoori] = useState(0)
    const [result_ibk, setIbk] = useState(0)
    const [result_hana, setHana] = useState(0)

    useEffect(() => {
        get_from_db_asset()
        get_kindness()
    }, [])

    function handleClick(e) {
        window.location.href = '/Next/Asset'
    }
    function calculate_asset(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_sinhan + star * val
                setSinhan(result_sinhan + star * val)
                console.log('신한자산', res)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_kakao + star * val
                setKakao(result_kakao + star * val)
                console.log('카카오자산', res)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_kb + star * val
                setKb(result_kb + star * val)
                console.log('국민자산', res)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_nh + star * val
                setNh(result_nh + star * val)
                console.log('농협자산', res)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_woori + star * val
                setWoori(result_woori + star * val)
                console.log('우리자산', res)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_ibk + star * val
                setIbk(result_ibk + star * val)
                console.log('기업자산', res)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_hana + star * val
                setHana(result_hana + star * val)
                console.log('하나자산', res)
            } else {
                console.log('no bank')
            }
        }
    }

    function get_from_db_asset() {
        fetch('http://localhost:3001/get_total', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate_asset(json, location.state.value1)
            })
    }

    function calculate_kindness(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_sinhan + star * val
                setSinhan(result_sinhan + star * val)
                console.log('신한친절도', res)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_kakao + star * val
                console.log('before kakao', result_kakao)
                setKakao(result_kakao + star * val)
                console.log('카카오친절도', res)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_kb + star * val
                setKb(result_kb + star * val)
                console.log('국민친절도', res)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_nh + star * val
                setNh(result_nh + star * val)
                console.log('농협친절도', res)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_woori + star * val
                setWoori(result_woori + star * val)
                console.log('우리친절도', res)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_ibk + star * val
                setIbk(result_ibk + star * val)
                console.log('기업친절도', res)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_hana + star * val
                setHana(result_hana + star * val)
                console.log('하나친절도', res)
            } else {
                console.log('no bank')
            }
        }
    }

    function get_kindness() {
        fetch('http://localhost:3001/get_kindness', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate_kindness(json, location.state.value2)
            })
    }

    return (
        <div className="Container">
            <h2>자산 : {value1}</h2>
            <div>현재 카카오평점 : {result_kakao}</div>
            <button onClick={handleClick} className="button-10">
                항목별 상세 설명
            </button>
        </div>
    )
}

export default Conclusion
