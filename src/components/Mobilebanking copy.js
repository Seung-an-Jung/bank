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








const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
}))

export default function Mobilebanking(props) {
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

    function handleClick(e) {
        console.log(arrChip)
        if (arrChip == 'test1') {
            window.location.href = '/Next/Mobilebanking1'
        } else if (arrChip == 'test2') {
            window.location.href = '/Next/Mobilebanking2'
        } else if (arrChip == 'test3') {
            window.location.href = '/Next/Mobilebanking3'
        } else {
            console.log('err')
        }
    }

    const [value, SetValue] = useState(props.value4)

    const [arrChip, setArrChip] = useState('')
    const handleChange = (name) => {
        setArrChip(name)
    }
    const prevstate = useLocation()


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
                label: '모바일뱅킹순위',
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
                // ticks: {
                //     minRotation: 45,
                //     padding: 5,
                // },
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
                    color: '#808080',
                    font: {
                        size: 12,
                        family: "'Noto Sans KR', sans-serif",
                        weight: 300,
                    },
                    text: '단위: 원',
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



    

    return (
        <div className="Container">
            <h2>
                본 항목은 모바일뱅킹 어플을 중요시하는 분에게 제공되는
                질문입니다. {value}
            </h2>
            <h2>
                본인은 대중적으로 많이 사용하는 어플을 선호하시나요, 만족도가
                높은 어플을 선호하시나요?
            </h2>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => handleChange('test1')}
                            name="test1"
                            color="primary"
                            checked={arrChip == 'test1'}
                        />
                    }
                    label="대중적으로 사용하는 어플 선호"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => handleChange('test2')}
                            name="test2"
                            color="primary"
                            checked={arrChip == 'test2'}
                        />
                    }
                    label="만족도가 높은 어플 선호"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => handleChange('test3')}
                            name="test3"
                            color="primary"
                            checked={arrChip == 'test3'}
                        />
                    }
                    label="둘다 중시"
                />
            </FormGroup>
            <div>선택항목의 평점 : {prevstate.state.resultvalue}</div>

            <Link
                to={{
                    pathname: '/Next/Mobilebanking1',
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
                        val_kakao: val_kakao,
                        val_kb: val_kb,
                        val_nh: val_nh,
                        val_sinhan: val_sinhan,
                        val_woori: val_woori,
                        val_ibk: val_ibk,
                        val_hana: val_hana,
                    },
                }}
            >
                <button className="button-10">다음</button>
            </Link>




        </div>
    )
}


