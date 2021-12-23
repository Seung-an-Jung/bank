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



export default function Realexchange2(props) {

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
        window.location.href = '/Next/Conclusion'
    }
    const [value, SetValue] = useState(props.value7)

    const [arrChip, setArrChip] = useState('')
    const handleChange = (name) => {
        setArrChip(name)
    }
    const prevstate = useLocation()


    return (
        <div className="Container">
            <h2>우대율 
            </h2>



            <div> 총자산 별점:{location.state.value7}</div>
            <Link
                to={{
                    pathname: '/Next/Conclusion',
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
