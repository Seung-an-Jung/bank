import '../App.css'
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'




function Mobilebanking1(props) {
    
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

    useEffect(() => {
        onclick_get_mobile()
    }, [])

    const [arrChip, setArrChip] = useState('')
    const handleChange = (name) => {
        setArrChip(name)
    }

    var data = {
        labels: [
            '하나은행',
            '신한은행',
            '국민은행',
            '우리은행',
            '농협은행',
            '기업은행',
            '카카오뱅크',
        ],
        datasets: [
            // {
            //     type: 'line',
            //     label: 'Dataset 1',
            //     borderColor: 'rgb(54, 162, 235)',
            //     borderWidth: 5,
            //     data: [1, 2, 3, 4, 5, 1],
            // },
            {
                type: 'bar',
                label: '출처 : 모바일인덱스',
                backgroundColor: 'rgb(54, 162, 235)',
                data: [
                    val_hana,
                    val_sinhan,
                    val_kb,
                    val_woori,
                    val_nh,
                    val_ibk,
                    val_kakao,
                ],
                yAxisID: 'y',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
            },
            // {
            //     type: 'bar',
            //     label: 'Dataset 3',
            //     backgroundColor: 'rgb(75, 192, 192)',
            //     data: [1, 2, 3, 4, 5, 6],
            // },
        ],
    }

    const Container = styled.div`
        width: 90vw;
        max-width: 900px;
    `
    const options = {
        spanGaps: true,
        maxBarThickness: 30,
        grouped: true,
        interaction: {
            mode: 'index',
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    padding: 10,
                    // font: {
                    //     family: "'Noto Sans KR', 'serif'",
                    //     lineHeight: 1,
                    // },
                },
            },
            // tooltip: {
            //     backgroundColor: 'rgba(124, 35, 35, 0.4)',
            //     padding: 10,
            //     bodySpacing: 5,
            //     // bodyFont: {
            //     //     font: {
            //     //         family: "'Noto Sans KR', sans-serif",
            //     //     },
            //     // },
            //     usePointStyle: true,
            //     filter: (item) => item.parsed.y !== null,
            //     callbacks: {
            //         title: (context) => context[0].label,
            //         label: (context) => {
            //             let label = context.dataset.label + '' || ''

            // return context.parsed.y !== null
            //     ? label + ': ' + context.parsed.y + '배'
            //     : null
            // },
            // },
            // },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: true,
                    tickLength: 4,
                    color: '#E2E2E230',
                
                },
                axis: 'x',
                position: 'bottom',
                
                
                ticks: {
                    color: 'white',
                    padding: 5,
                    font: {
                        size: 17
                    }
                },

            },
            y: {
                type: 'linear',
                grid: {
                    color: '#E2E2E230',
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.2
                },
                axis: 'y',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    align: 'end',
                    color: 'white',
                    font: {
                        size: 17,
                        family: "'Noto Sans KR', sans-serif",
                        weight: 300,
                    },
                    text: '단위: 2020년 11월 기준 사용자수',
                },
            },
//            y_sub: {
//               position: 'right',
//                title: {
//                    display: true,
//                    align: 'end',
//                    color: '#808080',
                    // font: {
                    //     size: 12,
                    //     family: "'Noto Sans KR', sans-serif",
                    //     weight: 300,
                    // },
                    // text: '단위: 배',
                    //     },
//                    afterDataLimits: (scale) => {
//                        scale.max = scale.max * 1.2
//                    },
//                },
//            },
        },
    }

    function calculate(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_sinhan + star * val
                setSinhan(res)
                setSinhanVal(json[i].사용자수DATA)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_kakao + star * val
                setKakao(res)
                setKakaoVal(json[i].사용자수DATA)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_kb + star * val
                setKb(res)
                setKbVal(json[i].사용자수DATA)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_nh + star * val
                setNh(res)
                setNhVal(json[i].사용자수DATA)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_woori + star * val
                setWoori(res)
                setWooriVal(json[i].사용자수DATA)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_ibk + star * val
                setIbk(res)
                setIbkVal(json[i].사용자수DATA)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                let res = result_hana + star * val
                setHana(res)
                setHanaVal(json[i].사용자수DATA)
            } else {
                console.log('no bank')
            }
        }
    }



    function handleClick(e) {
        window.location.href = '/Next/Brandimage'      
    }


    function onclick_get_mobile() {
        fetch('http://localhost:3001/get_mobile', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                calculate(json, location.state.value4)
            })
    }

    return (
        <div className="Container">
            <h2> 선택하신 대중적으로 사용되는 은행별 모바일뱅킹 순위표입니다</h2>
            <Container>
                <Line type="line" data={data} options={options} />
            </Container>
            <Link
                to={{
                    pathname: '/Next/Brandimage',
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
        </div>
    )
}

export default Mobilebanking1
