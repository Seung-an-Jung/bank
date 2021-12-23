import '../App.css'
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'

function Kindness(props) {
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
   
    
    useEffect(() => {
        console.log('sinhan', result_sinhan)
    }, [result_sinhan])
    useEffect(() => {
        console.log('kakao', result_kakao)
    }, [result_kakao])
    useEffect(() => {
        console.log('kb', result_kb)
    }, [result_kb])
    useEffect(() => {
        console.log('nh', result_nh)
    }, [result_nh])
    useEffect(() => {
        console.log('woori', result_woori)
    }, [result_woori])
    useEffect(() => {
        console.log('ibk', result_ibk)
    }, [result_ibk])
    useEffect(() => {
        console.log('hana', result_hana)
    }, [result_hana])

    const [arrChip, setArrChip] = useState('')
    const handleChange = (name) => {
        setArrChip(name)
    }

    function calculate(json, star) {
        for (let i = 0; i < 7; i++) {
            
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 4: 2 * (i-1) 
                setSinhan(result_sinhan + star * val)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 4: 2 * (i-1) 
                setKakao(result_kakao + star * val)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 4: 2 * (i-1)
                setKb(result_kb + star * val)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 4: 2 * (i-1) 
                setNh(result_nh + star * val)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 4:  2 * (i-1) 
                setWoori(result_woori + star * val)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 4: 2 * (i-1) 
                setIbk(result_ibk + star * val)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 4: 2 * (i-1)
                setHana(result_hana + star * val)
            } else {
                console.log('no bank')
            }
        }
    }


    function onclick_kindness() {
        fetch('http://localhost:3001/get_kindness', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                calculate(json, location.state.value2)
            })
    }
    // console.log(value1)
    return (
        <div className="Container">
            <h2> 본 페이지는 은행직원 친절도 항목에 따른 순위표입니다.</h2>
            <Link
                to={{
                    pathname: '/Next/Mobilebanking',
                    state: {
                        value1: value1,
                        value2: value2,
                        value3: value3,
                        value4: value4,
                        value5: value5,
                        value6: value6,
                        value7: value7,
                        value8: value8,
                        result_kakao: result_kakao,
                        result_kb: result_kb,
                        result_nh: result_nh,
                        result_sinhan: result_sinhan,
                        result_woori: result_woori,
                        result_ibk: result_ibk,
                        result_hana: result_hana,
                    },
                }}
            >
                <button className="button-10">다음</button>
            </Link>
           
            <button onClick={onclick_kindness}>getdb</button>
            <h2>친절도 : {value2}</h2>
            <div>현재 카카오평점 : {result_kakao}</div>
        </div>
    )
}
export default Kindness


