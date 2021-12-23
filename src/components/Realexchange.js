import { React, useState, useEffect } from 'react'
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    Chip,
    makeStyles,
} from '@material-ui/core'
import { useSnackbar } from 'notistack'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

export default function Realexchange(props) {
    const location = useLocation()
    const [value1, setValue1] = useState(location.state.value1)
    const [value2, setValue2] = useState(location.state.value2)
    const [value3, setValue3] = useState(location.state.value3)
    const [value4, setValue4] = useState(location.state.value4)
    const [value5, setValue5] = useState(location.state.value5)
    const [value6, setValue6] = useState(location.state.value6)
    const [value7, setValue7] = useState(location.state.value7)
    const [value8, setValue8] = useState(location.state.value8)

    const [val_kakao, setKakaoVal] = useState(0)
    const [val_kb, setKbVal] = useState(0)
    const [val_nh, setNhVal] = useState(0)
    const [val_sinhan, setSinhanVal] = useState(0)
    const [val_woori, setWooriVal] = useState(0)
    const [val_ibk, setIbkVal] = useState(0)
    const [val_hana, setHanaVal] = useState(0)

    useEffect(() => {
        get_Realexchange()
    }, [])

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
                label: '환전 가능 통화 수 / 출처 : 은행별 홈페이지',
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
                        size: 17,
                    },
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
                    text: '단위: 개수',
                },
            },
            y_sub: {
                position: 'right',
                title: {
                    display: true,
                    align: 'end',
                    color: '#808080',
                    // font: {
                    //     size: 12,
                    //     family: "'Noto Sans KR', sans-serif",
                    //     weight: 300,
                    // },
                    // text: '단위: 배',
                    //     },
                    afterDataLimits: (scale) => {
                        scale.max = scale.max * 1.2
                    },
                },
            },
        },
    }

    function calculate(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_sinhan + star * val
                //setSinhan(res)
                setSinhanVal(json[i].가능통화DATA)
            } else if (json[i].은행ID == 90) {
                //kakao
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kakao + star * val
                //setKakao(res)
                setKakaoVal(json[i].가능통화DATA)
            } else if (json[i].은행ID == 4) {
                //kb
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kb + star * val
                //setKb(res)
                setKbVal(json[i].가능통화DATA)
            } else if (json[i].은행ID == 11) {
                //nh
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_nh + star * val
                //setNh(res)
                setNhVal(json[i].가능통화DATA)
            } else if (json[i].은행ID == 20) {
                //woori
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_woori + star * val
                //setWoori(res)
                setWooriVal(json[i].가능통화DATA)
            } else if (json[i].은행ID == 3) {
                // ibk
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_ibk + star * val
                //setIbk(res)
                setIbkVal(json[i].가능통화DATA)
            } else if (json[i].은행ID == 81) {
                //hana
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_hana + star * val
                //setHana(res)
                setHanaVal(json[i].가능통화DATA)
            } else {
                console.log('no bank')
            }
        }
    }

    // function handleClick(e) {
    //     window.location.href = '/Next/Conclusion'
    // }

    function get_Realexchange() {
        fetch('http://localhost:3001/get_Realexchange', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate(json, location.state.value1)
            })
    }

    return (
        <div className="graphcontainer">
            <div class="graphheader">
                <h2>
                <br></br>
                <br></br>
                은행별 환전가능 외국통화수 항목 그래프입니다
                <br></br>
                <br></br>
                </h2>
                </div>
            <div class="nav">
                <ul>
                    <li1>
                        <Container>
                            <Line type="line" data={data} options={options} />
                        </Container>

                    </li1>
                    <li2>
                        <h4>[항목 선정 이유]</h4>
                        <h4>
                        글로벌화로 인하여 주요통화를 넘어 
                        </h4>
                        <h4>     
                        기타통화까지 환전가능한 은행을 선호함
                        </h4>
                        <h4>     
                        *은행별 우대율은 큰 차이 없음
                        </h4>
                                                
                    </li2>
                </ul>


            </div>
        </div>
    )
}
