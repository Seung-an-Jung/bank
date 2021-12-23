import '../App.css'
import React, { useState } from 'react'

function Map2() {
    function handleClick(e) {
        window.location.href = '/Next/Mobilebanking'
    }

    return (
        <div className="Container">
            <h2> 본 페이지는 활동지 주변 은행 점포 수에 따른 결과표입니다.</h2>
            <button onClick={handleClick} className="button-10">
                다음
            </button>
        </div>
    )
}
export default Map2
