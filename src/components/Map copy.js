import '../App.css'

import React, { useState } from 'react'
import PopupDom from './PopupDom'
import PopupPostCode from './PopupPostCode'

function Map() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    function handleClick(e) {
        window.location.href = '/Mainquestion'
    }
    return (
        <div className="Container">
            <h1>사는 곳 혹은 금융활동을 하는 곳을 검색해주세요.</h1>
            <button type="button" onClick={openPostCode}>
                우편번호 검색
            </button>

            <div id="popupDom">
                {isPopupOpen && (
                    <PopupDom className="common_alert">
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
            <button onClick={handleClick} className="button-10">
                다음
            </button>
        </div>
    )
}
export default Map
