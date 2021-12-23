import React from 'react'
import DaumPostCode from 'react-daum-postcode'
import { useState } from 'react'

const PopupPostCode = (props) => {
    const [addr, setAddr] = useState('')

    const handleComplete = (data) => {
        let fullAddress = data.address
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
        setAddr(fullAddress)
        //console.log(data)
        //console.log(fullAddress)
        //console.log(data.zonecode)
        console.log(addr)
        props.onClose()
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

    return (
        <div>
            <DaumPostCode onComplete={handleComplete} className="post-code" />

            <button
                type="button"
                onClick={() => {
                    props.onClose()
                }}
                className="postCode_btn"
            >
                닫기
            </button>
        </div>
    )
}

export default PopupPostCode
