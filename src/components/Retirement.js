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

export default function Retirement(props) {
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
    const [val2_kakao, setKakaoVal2] = useState(0)
    const [val2_kb, setKbVal2] = useState(0)
    const [val2_nh, setNhVal2] = useState(0)
    const [val2_sinhan, setSinhanVal2] = useState(0)
    const [val2_woori, setWooriVal2] = useState(0)
    const [val2_ibk, setIbkVal2] = useState(0)
    const [val2_hana, setHanaVal2] = useState(0)

    useEffect(() => {
        onclick_get_retirement()
    }, [])

    // function handleClick(e) {
    //     console.log(arrChip)
    //     if (arrChip == 'test1') {
    //         window.location.href = '/Next/Retirement1'
    //     } else if (arrChip == 'test2') {
    //         window.location.href = '/Next/Retirement2'
    //     } else if (arrChip == 'test3') {
    //         window.location.href = '/Next/Retirement3'
    //     } else {
    //         console.log('err')
    //     }
    // }

    // const [value, SetValue] = useState(props.value8)

    // const [arrChip, setArrChip] = useState('')
    // const handleChange = (name) => {
    //     setArrChip(name)
    // }
    // const prevstate = useLocation()

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
                label: '연금저축 수익률 (높을수록 유리)',
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
            {
                type: 'bar',
                label: '연금저축 수수료율 (높을수록 불리) / 출처: 금융감독원',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [
                    val2_hana,
                    val2_sinhan,
                    val2_kb,
                    val2_woori,
                    val2_nh,
                    val2_ibk,
                    val2_kakao,
                ],
                yAxisID: 'y_sub',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
            },
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
                    text: '단위: 2020년 연금저축 수익률(%)(Blue)',
                },
            },
            y_sub: {
                position: 'right',
                title: {
                    display: true,
                    align: 'end',
                    color: 'white',
                    font: {
                        size: 17,
                        family: "'Noto Sans KR', sans-serif",
                        weight: 300,
                    },
                    text: '단위: 2020년 연금저축 수수료율(%)(Red)',
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.2
                },
            },
        },
    }

    function calculate(json) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_sinhan + star * val
                //setSinhan(res)
                setSinhanVal(json[i].수익률Data)
                setSinhanVal2(json[i].수수료Data)
                console.log('cal', val_sinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kakao + star * val
                //setKakao(res)
                setKakaoVal(json[i].수익률Data)
                setKakaoVal2(json[i].수수료Data)
            } else if (json[i].은행ID == 4) {
                //kb
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kb + star * val
                //setKb(res)
                setKbVal(json[i].수익률Data)
                setKbVal2(json[i].수수료Data)
            } else if (json[i].은행ID == 11) {
                //nh
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_nh + star * val
                //setNh(res)
                setNhVal(json[i].수익률Data)
                setNhVal2(json[i].수수료Data)
            } else if (json[i].은행ID == 20) {
                //woori
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_woori + star * val
                //setWoori(res)
                setWooriVal(json[i].수익률Data)
                setWooriVal2(json[i].수수료Data)
            } else if (json[i].은행ID == 3) {
                // ibk
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_ibk + star * val
                //setIbk(res)
                setIbkVal(json[i].수익률Data)
                setIbkVal2(json[i].수수료Data)
            } else if (json[i].은행ID == 81) {
                //hana
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_hana + star * val
                //setHana(res)
                setHanaVal(json[i].수익률Data)
                setHanaVal2(json[i].수수료Data)
            } else {
                console.log('no bank')
            }
        }
    }

    function handleClick(e) {
        window.location.href = '/Next/Realexchange'
    }

    function onclick_get_retirement() {
        fetch('http://localhost:3001/get_retirement', {
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
        // <div className="Container">
        //     <h2>본 항목은 퇴직연금을 중요시하는 분에게 제공되는 질문입니다.</h2>
        //     <h2>
        //         본인은 퇴직연금의 높은 수익률을 선호하시나요, 낮은 수수료율을
        //         선호하시나요?
        //     </h2>
        //     <FormGroup>
        //     <div>
        //         <FormControlLabel
        //             control={
        //                 <Checkbox
        //                     onChange={() => handleChange('test1')}
        //                     name="test1"
        //                     color="primary"
        //                     checked={arrChip == 'test1'}
        //                 />
        //             }
        //             label="높은 수익률"

        //         />
        //     <Link
        //         to={{
        //             pathname: '/Next/Retirement1',
        //             state: {
        //                 value1: value1,
        //                 value2: value2,
        //                 value3: value3,
        //                 value4: value4,
        //                 value5: value5,
        //                 value6: value6,
        //                 value7: value7,
        //                 value8: value8,
        //                 result_kakao: result_kakao,
        //                 result_kb: result_kb,
        //                 result_nh: result_nh,
        //                 result_sinhan: result_sinhan,
        //                 result_woori: result_woori,
        //                 result_ibk: result_ibk,
        //                 result_hana: result_hana,
        //                 val_kakao: val_kakao,
        //                 val_kb: val_kb,
        //                 val_nh: val_nh,
        //                 val_sinhan: val_sinhan,
        //                 val_woori: val_woori,
        //                 val_ibk: val_ibk,
        //                 val_hana: val_hana,
        //             },
        //         }}
        //     >
        //         <button className="button-10">1번다음</button>
        //     </Link>
        //         </div>
        //         <div>
        //         <FormControlLabel
        //             control={
        //                 <Checkbox
        //                     onChange={() => handleChange('test2')}
        //                     name="test2"
        //                     color="primary"
        //                     checked={arrChip == 'test2'}
        //                 />
        //             }
        //             label="낮은 수수료율"
        //         />
        //                     <Link
        //         to={{
        //             pathname: '/Next/Retirement2',
        //             state: {
        //                 value1: value1,
        //                 value2: value2,
        //                 value3: value3,
        //                 value4: value4,
        //                 value5: value5,
        //                 value6: value6,
        //                 value7: value7,
        //                 value8: value8,
        //                 result_kakao: result_kakao,
        //                 result_kb: result_kb,
        //                 result_nh: result_nh,
        //                 result_sinhan: result_sinhan,
        //                 result_woori: result_woori,
        //                 result_ibk: result_ibk,
        //                 result_hana: result_hana,
        //                 val_kakao: val_kakao,
        //                 val_kb: val_kb,
        //                 val_nh: val_nh,
        //                 val_sinhan: val_sinhan,
        //                 val_woori: val_woori,
        //                 val_ibk: val_ibk,
        //                 val_hana: val_hana,
        //             },
        //         }}
        //     >
        //         <button className="button-10">2번다음</button>
        //     </Link>
        //         </div>
        //         <div>
        //         <FormControlLabel
        //             control={
        //                 <Checkbox
        //                     onChange={() => handleChange('test3')}
        //                     name="test3"
        //                     color="primary"
        //                     checked={arrChip == 'test3'}
        //                 />
        //             }
        //             label="둘다 중시"
        //         />
        //                     <Link
        //         to={{
        //             pathname: '/Next/Retirement3',
        //             state: {
        //                 value1: value1,
        //                 value2: value2,
        //                 value3: value3,
        //                 value4: value4,
        //                 value5: value5,
        //                 value6: value6,
        //                 value7: value7,
        //                 value8: value8,
        //                 result_kakao: result_kakao,
        //                 result_kb: result_kb,
        //                 result_nh: result_nh,
        //                 result_sinhan: result_sinhan,
        //                 result_woori: result_woori,
        //                 result_ibk: result_ibk,
        //                 result_hana: result_hana,
        //                 val_kakao: val_kakao,
        //                 val_kb: val_kb,
        //                 val_nh: val_nh,
        //                 val_sinhan: val_sinhan,
        //                 val_woori: val_woori,
        //                 val_ibk: val_ibk,
        //                 val_hana: val_hana,
        //             },
        //         }}
        //     >
        //         <button className="button-10">3번다음</button>
        //     </Link>
        //         </div>
        //     </FormGroup>
        //     <div>선택항목의 평점 : {prevstate.state.resultvalue}</div>
        <div className="graphcontainer">
        <div class="graphheader">
            <h2>
                <br></br>
                <br></br>
                은행별 연금저축 수익률, 수수료율 항목 그래프입니다
            <h4>(수익률은 그래프가 높을수록, 수수료율은 그래프가 낮을수록 높은 순위의 은행입니다)</h4>
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
                    연금저축은 은행의 대표적인 장기보유상품으로
                    </h4>
                    <h4>     
                    사용자 입장에서 높은 수익률을 기록한 은행을 선호
                    </h4>
                </li2>
            </ul>
        </div>
        <div class= "graphelse">      
            <Link
                to={{
                    pathname: '/Next/Realexchange',
                    state: {
                        value1: value1,
                        value2: value2,
                        value3: value3,
                        value4: value4,
                        value5: value5,
                        value6: value6,
                        value7: value7,
                        value8: value8,
                    },
                }}
            >
                <button className="button-1">다음</button>
            </Link>
        </div>
    </div>
    )
}
