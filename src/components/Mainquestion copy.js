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

function Mainquestion(props) {
    const location = useLocation()

    //const [addr, setAddr] = useState(location.state.addr)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [value4, setValue4] = useState(0)
    const [value5, setValue5] = useState(0)
    const [value6, setValue6] = useState(0)
    const [value7, setValue7] = useState(0)
    const [value8, setValue8] = useState(0)
    const [result_kakao, setKakao] = useState(0)
    const [result_kb, setKb] = useState(0)
    const [result_nh, setNh] = useState(0)
    const [result_sinhan, setSinhan] = useState(0)
    const [result_woori, setWoori] = useState(0)
    const [result_ibk, setIbk] = useState(0)
    const [result_hana, setHana] = useState(0)

    function handleClick(e) {
        window.location.href = '/Conclusion'
    }

    return (
        <div className="Container">
            <div className="C_header">
                <h1>
                    주거래은행을 고른다면 어떤 항목을 우선시하나요? 별점을
                    눌러주세요
                </h1>

                <h3>(ex 별 5개 높은배점 / 별 1개 낮은배점 / 별 3개 보통)</h3>
            </div>

            <div class="nav">
                <ul>
                    <li>금융기관의 총자산</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value1}
                            onChange={(event, newValue) => {
                                setValue1(newValue)
                            }}
                        />
                    </li>
                </ul>
                <ul>
                    <li>은행직원의 친절도 (민원건수)</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value2}
                            onChange={(event, newValue) => {
                                setValue2(newValue)
                            }}
                        />
                    </li>
                </ul>
                <ul>
                    <li>물리적 접근성 (지점,ATM)</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value3}
                            onChange={(event, newValue) => {
                                setValue3(newValue)
                            }}
                        />
                    </li>
                </ul>
                <ul>
                    <li>모바일뱅킹 어플</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value4}
                            onChange={(event, newValue) => {
                                setValue4(newValue)
                            }}
                        />
                    </li>
                </ul>
                <ul>
                    <li>금융기관의 브랜드 이미지</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value5}
                            onChange={(event, newValue) => {
                                setValue5(newValue)
                            }}
                        />
                    </li>
                </ul>
                <ul>
                    <li>자동화기기 (ATM) 수수료</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value6}
                            onChange={(event, newValue) => {
                                setValue6(newValue)
                            }}
                        />
                    </li>
                </ul>
                <ul>
                    <li>환전가능 통화종류수</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value7}
                            onChange={(event, newValue) => {
                                setValue7(newValue)
                            }}
                        />
                    </li>
                </ul>
                <ul>
                    <li>연금저축 (수익률, 수수료)</li>
                    <li>
                        <Rating
                            name="simple-controlled"
                            value={value8}
                            onChange={(event, newValue) => {
                                setValue8(newValue)
                            }}
                        />
                    </li>
                </ul>
            </div>

            <div class="avgpoint">
                선택항목의 평점 :
                {(value1 +
                    value2 +
                    value3 +
                    value4 +
                    value5 +
                    value6 +
                    value7 +
                    value8) /
                    8}
            </div>
            <Link
                to={{
                    pathname: '/Conclusion',
                    state: {
                        //                        addr: addr,
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
        </div>
    )
}

export default Mainquestion
