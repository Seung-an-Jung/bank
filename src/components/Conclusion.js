import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Map from './Map'
import '../App.css'
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'
import Asset from './Asset'
import Sinhan from "./sinhan.png";
import Hana from "./hana.png";
import KB from "./kb.png";
import Woori from "./woori.png";
import NH from "./nh.png";
import IBK from "./ibk.png";
import Kakao from "./kakao.png";

function handleClick(e) {
    window.location.href = '/Map'
}

function Conclusion(props) {
    const location = useLocation()
    const [totalBank, setBank] = useState([0, 0, 0, 0, 0, 0, 0]) // Sinhan, kakao, kb, woori, nh, ibk, hana
    const [value1, setValue1] = useState(location.state.value1)
    const [value2, setValue2] = useState(location.state.value2)
    const [value3, setValue3] = useState(location.state.value3)
    const [value4, setValue4] = useState(location.state.value4)
    const [value5, setValue5] = useState(location.state.value5)
    const [value6, setValue6] = useState(location.state.value6)
    const [value7, setValue7] = useState(location.state.value7)
    const [value8, setValue8] = useState(location.state.value8)

    const [assetKakao, set_assetKakao] = useState(0)
    const [assetSinhan, set_assetSinhan] = useState(0)
    const [assetKb, set_assetKb] = useState(0)
    const [assetNh, set_assetNh] = useState(0)
    const [assetWoori, set_assetWoori] = useState(0)
    const [assetIbk, set_assetIbk] = useState(0)
    const [assetHana, set_assetHana] = useState(0)

    const [kindnessKakao, set_kindnessKakao] = useState(0)
    const [kindnessKb, set_kindnessKb] = useState(0)
    const [kindnessNh, set_kindnessNh] = useState(0)
    const [kindnessSinhan, set_kindnessSinhan] = useState(0)
    const [kindnessWoori, set_kindnessWoori] = useState(0)
    const [kindnessIbk, set_kindnessIbk] = useState(0)
    const [kindnessHana, set_kindnessHana] = useState(0)

    const [mobileKakao, set_mobileKakao] = useState(0)
    const [mobileKb, set_mobileKb] = useState(0)
    const [mobileNh, set_mobileNh] = useState(0)
    const [mobileSinhan, set_mobileSinhan] = useState(0)
    const [mobileWoori, set_mobileWoori] = useState(0)
    const [mobileIbk, set_mobileIbk] = useState(0)
    const [mobileHana, set_mobileHana] = useState(0)

    const [brandKakao, set_brandKakao] = useState(0)
    const [brandKb, set_brandKb] = useState(0)
    const [brandNh, set_brandNh] = useState(0)
    const [brandSinhan, set_brandSinhan] = useState(0)
    const [brandWoori, set_brandWoori] = useState(0)
    const [brandIbk, set_brandIbk] = useState(0)
    const [brandHana, set_brandHana] = useState(0)

    const [feeKakao, set_feeKakao] = useState(0)
    const [feeKb, set_feeKb] = useState(0)
    const [feeNh, set_feeNh] = useState(0)
    const [feeSinhan, set_feeSinhan] = useState(0)
    const [feeWoori, set_feeWoori] = useState(0)
    const [feeIbk, set_feeIbk] = useState(0)
    const [feeHana, set_feeHana] = useState(0)

    const [exchangeKakao, set_exchangeKakao] = useState(0)
    const [exchangeKb, set_exchangeKb] = useState(0)
    const [exchangeNh, set_exchangeNh] = useState(0)
    const [exchangeSinhan, set_exchangeSinhan] = useState(0)
    const [exchangeWoori, set_exchangeWoori] = useState(0)
    const [exchangeIbk, set_exchangeIbk] = useState(0)
    const [exchangeHana, set_exchangeHana] = useState(0)

    const [retireKakao, set_retireKakao] = useState(0)
    const [retireKb, set_retireKb] = useState(0)
    const [retireNh, set_retireNh] = useState(0)
    const [retireSinhan, set_retireSinhan] = useState(0)
    const [retireWoori, set_retireWoori] = useState(0)
    const [retireIbk, set_retireIbk] = useState(0)
    const [retireHana, set_retireHana] = useState(0)

    const [rendercheck1, setRendercheck1] = useState(0)
    const [rendercheck2, setRendercheck2] = useState(0)
    const [rendercheck3, setRendercheck3] = useState(0)
    const [rendercheck4, setRendercheck4] = useState(0)
    const [rendercheck5, setRendercheck5] = useState(0)
    const [rendercheck6, setRendercheck6] = useState(0)
    const [rendercheck7, setRendercheck7] = useState(0)
    const [buttondel, setButtondel] = useState(1)

    const [rank1_score, setRank1_score] = useState(0)
    const [rank2_score, setRank2_score] = useState(0)
    const [rank3_score, setRank3_score] = useState(0)
    const [rank4_score, setRank4_score] = useState(0)
    const [rank5_score, setRank5_score] = useState(0)
    const [rank6_score, setRank6_score] = useState(0)
    const [rank7_score, setRank7_score] = useState(0)

    const [rank1_name, setRank1_name] = useState(0)
    const [rank2_name, setRank2_name] = useState(0)
    const [rank3_name, setRank3_name] = useState(0)
    const [rank4_name, setRank4_name] = useState(0)
    const [rank5_name, setRank5_name] = useState(0)
    const [rank6_name, setRank6_name] = useState(0)
    const [rank7_name, setRank7_name] = useState(0)

    const [rank1_image, setRank1_image] = useState(0)
    const [rank2_image, setRank2_image] = useState(0)
    const [rank3_image, setRank3_image] = useState(0)
    const [rank4_image, setRank4_image] = useState(0)
    const [rank5_image, setRank5_image] = useState(0)
    const [rank6_image, setRank6_image] = useState(0)
    const [rank7_image, setRank7_image] = useState(0)

    var imageSrc_hana = Hana
    var imageSrc_shinhan = Sinhan
    var imageSrc_kb = KB
    var imageSrc_worri = Woori
    var imageSrc_nh = NH
    var imageSrc_ibk = IBK
    var imageSrc_kakao = Kakao

    useEffect(() => {
        setButtondel(1)
        get_from_db_asset()
        get_kindness()
        get_mobile()
        get_Brandimage()
        get_fee()
        get_Realexchange()
        onclick_get_retirement()
    }, [])

    function handleClick(e) {
        window.location.href = 'http://localhost:3000/Map'
    }
    function calculate_asset(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = star * val
                set_assetSinhan(star * val)
                console.log('별점', star, '신한자산', assetSinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = star * val
                set_assetKakao(star * val)
                console.log('카카오자산', assetKakao)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kb + star * val
                set_assetKb(star * val)
                console.log('국민자산', assetKb)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_nh + star * val
                set_assetNh(star * val)
                console.log('농협자산', assetNh)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_woori + star * val
                set_assetWoori(star * val)
                console.log('우리자산', assetWoori)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_ibk + star * val
                set_assetIbk(star * val)
                console.log('기업자산', assetIbk)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_hana + star * val
                set_assetHana(star * val)
                console.log('하나자산', assetHana)
            } else {
                console.log('no bank')
            }
        }
    }

    function get_from_db_asset() {
        fetch('http://localhost:3001/get_total', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate_asset(json, location.state.value1)
            })
    }

    function calculate_kindness(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_sinhan + star * val
                set_kindnessSinhan(star * val)
                console.log('별점', star, '신한친절도', kindnessSinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kakao + star * val
                //setKakao(result_kakao + star * val)
                set_kindnessKakao(star * val)
                console.log('카카오친절도', kindnessKakao)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kb + star * val
                set_kindnessKb(star * val)
                console.log('국민친절도', kindnessKb)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_nh + star * val
                set_kindnessNh(star * val)
                console.log('농협친절도', kindnessNh)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_woori + star * val
                set_kindnessWoori(star * val)
                console.log('우리친절도', kindnessWoori)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_ibk + star * val
                set_kindnessIbk(star * val)
                console.log('기업친절도', kindnessIbk)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_hana + star * val
                set_kindnessHana(star * val)
                console.log('하나친절도', kindnessHana)
            } else {
                console.log('no bank')
            }
        }
    }

    function get_kindness() {
        fetch('http://localhost:3001/get_kindness', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate_kindness(json, location.state.value2)
            })
    }

    function calculate_mobile(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_sinhan + star * val
                set_mobileSinhan(star * val)
                console.log('별점', star, '신한모바일', mobileSinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kakao + star * val
                //setKakao(result_kakao + star * val)
                set_mobileKakao(star * val)
                console.log('카카오모바일', mobileKakao)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kb + star * val
                set_mobileKb(star * val)
                console.log('국민모바일', mobileKb)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_nh + star * val
                set_mobileNh(star * val)
                console.log('농협모바일', mobileNh)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_woori + star * val
                set_mobileWoori(star * val)
                console.log('우리모바일', mobileWoori)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_ibk + star * val
                set_mobileIbk(star * val)
                console.log('기업모바일', mobileIbk)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_hana + star * val
                set_mobileHana(star * val)
                console.log('하나모바일', mobileHana)
            } else {
                console.log('no bank')
            }
        }
    }
    function get_mobile() {
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
                calculate_mobile(json, location.state.value4)
            })
    }

    function get_Brandimage() {
        fetch('http://localhost:3001/get_Brandimage', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate_brand(json, location.state.value5)
            })
    }

    function calculate_brand(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let rank = json[i].순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_brandSinhan(star * val)
                console.log('별점', star, '신한브랜드', brandSinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                let rank = json[i].순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_brandKakao(star * val)
                console.log('카카오브랜드', brandKakao)
            } else if (json[i].은행ID == 4) {
                //kb
                let rank = json[i].순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_brandKb(star * val)
                console.log('국민브랜드', brandKb)
            } else if (json[i].은행ID == 11) {
                //nh
                let rank = json[i].순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_brandNh(star * val)
                console.log('농협브랜드', brandNh)
            } else if (json[i].은행ID == 20) {
                //woori
                let rank = json[i].순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_brandWoori(star * val)
                console.log('워리브랜드', brandWoori)
            } else if (json[i].은행ID == 3) {
                // ibk
                let rank = json[i].순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_brandIbk(star * val)
                console.log('기업브랜드', brandIbk)
            } else if (json[i].은행ID == 81) {
                //hana
                let rank = json[i].순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_brandHana(star * val)
                console.log('하나브랜드', brandHana)
            } else {
                console.log('no bank')
            }
        }
    }

    function calculate_fee(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let rank = json[i].수수료순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_feeSinhan(star * val)
                console.log('별점', star, '신한수수료', feeSinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                let rank = json[i].수수료순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_feeKakao(star * val)
                console.log('카카오수수료', feeKakao)
            } else if (json[i].은행ID == 4) {
                //kb
                let rank = json[i].수수료순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_feeKb(star * val)
                console.log('국민수수료', feeKb)
            } else if (json[i].은행ID == 11) {
                //nh
                let rank = json[i].수수료순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_feeNh(star * val)
                console.log('농협수수료', feeNh)
            } else if (json[i].은행ID == 20) {
                //woori
                let rank = json[i].수수료순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_feeWoori(star * val)
                console.log('워리수수료', feeWoori)
            } else if (json[i].은행ID == 3) {
                // ibk
                let rank = json[i].수수료순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_feeIbk(star * val)
                console.log('기업수수료', feeIbk)
            } else if (json[i].은행ID == 81) {
                //hana
                let rank = json[i].수수료순위
                let val = 6 - rank > 2 ? 2 * (6 - rank) : 4
                set_feeHana(star * val)
                console.log('하나수수료', feeHana)
            } else {
                console.log('no bank')
            }
        }
    }

    function get_fee() {
        fetch('http://localhost:3001/get_fee', {
            method: 'post', //통신방법
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json[0])

                calculate_fee(json, location.state.value6)
            })
    }

    function calculate_exchange(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = star * val
                set_exchangeSinhan(star * val)
                console.log('별점', star, '신한환전', exchangeSinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = star * val
                set_exchangeKakao(star * val)
                console.log('카카오환전', exchangeKakao)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kb + star * val
                set_exchangeKb(star * val)
                console.log('국민환전', exchangeKb)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_nh + star * val
                set_exchangeNh(star * val)
                console.log('농협환전', exchangeNh)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_woori + star * val
                set_exchangeWoori(star * val)
                console.log('우리환전', exchangeWoori)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_ibk + star * val
                set_exchangeIbk(star * val)
                console.log('기업환전', exchangeIbk)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_hana + star * val
                set_exchangeHana(star * val)
                console.log('하나환전', exchangeHana)
            } else {
                console.log('no bank')
            }
        }
    }

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

                calculate_exchange(json, location.state.value7)
            })
    }

    function calculate_retirement(json, star) {
        for (let i = 0; i < 7; i++) {
            if (json[i].은행ID == 88) {
                //sinhan
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_sinhan + star * val
                set_retireSinhan(star * val)
                console.log('별점', star, '신한연금', retireSinhan)
            } else if (json[i].은행ID == 90) {
                //kakao
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kakao + star * val
                //setKakao(result_kakao + star * val)
                set_retireKakao(star * val)
                console.log('카카오연금', retireKakao)
            } else if (json[i].은행ID == 4) {
                //kb
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_kb + star * val
                set_retireKb(star * val)
                console.log('국민연금', retireKb)
            } else if (json[i].은행ID == 11) {
                //nh
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_nh + star * val
                set_retireNh(star * val)
                console.log('농협연금', retireNh)
            } else if (json[i].은행ID == 20) {
                //woori
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_woori + star * val
                set_retireWoori(star * val)
                console.log('우리연금', retireWoori)
            } else if (json[i].은행ID == 3) {
                // ibk
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_ibk + star * val
                set_retireIbk(star * val)
                console.log('기업연금', retireIbk)
            } else if (json[i].은행ID == 81) {
                //hana
                let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //let res = result_hana + star * val
                set_retireHana(star * val)
                console.log('하나연금', retireHana)
            } else {
                console.log('no bank')
            }
        }
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
                calculate_retirement(json, location.state.value8)
            })
    }

    var total_score_array // 예를들어 [ {id : hana, score : 200}, {id: woori, score : 100} ..... ]
    var rendernum = 0 // 상위 3개 (동점자 포함해서 최대 7개)
    var renderarray = new Array(7).fill(0) // 상위 3개만 렌더링 하기 위해 만든 filter array  [1, 1, 1, 1, 0,0,0] 이면 상위 4개 렌더링한다는 뜻

    function calcul_totalrank() {
        let totalSinhan =
            assetSinhan +
            kindnessSinhan +
            mobileSinhan +
            brandSinhan +
            feeSinhan +
            exchangeSinhan +
            retireSinhan

        let totalKakao =
            assetKakao +
            kindnessKakao +
            mobileKakao +
            brandKakao +
            feeKakao +
            exchangeKakao +
            retireKakao

        let totalKb =
            assetKb +
            kindnessKb +
            mobileKb +
            brandKb +
            feeKb +
            exchangeKb +
            retireKb

        let totalWoori =
            assetWoori +
            kindnessWoori +
            mobileWoori +
            brandWoori +
            feeWoori +
            exchangeWoori +
            retireWoori

        let totalNh =
            assetNh +
            kindnessNh +
            mobileNh +
            brandNh +
            feeNh +
            exchangeNh +
            retireNh

        let totalIbk =
            assetIbk +
            kindnessIbk +
            mobileIbk +
            brandIbk +
            feeIbk +
            exchangeIbk +
            retireIbk

        let totalHana =
            assetHana +
            kindnessHana +
            mobileHana +
            brandHana +
            feeHana +
            exchangeHana +
            retireHana

        console.log(totalHana)

        let bankrank = [
            totalSinhan,
            totalKakao,
            totalKb,
            totalWoori,
            totalNh,
            totalIbk,
            totalHana,
        ]
        console.log("assetSinhan",assetSinhan)
        console.log("assetKb",assetKb)
        console.log("assetNh",assetNh)
        console.log("assetWoori",assetWoori)
        console.log("assetIbk",assetIbk)
        console.log("assetHana",assetHana)
        console.log("assetKakao", assetKakao)
        console.log("kindnessKakao",kindnessKakao)
        console.log("kindnessKb",kindnessKb)
        console.log("kindnessNh",kindnessNh)
        console.log("kindnessSinhan",kindnessSinhan)
        console.log("kindnessWoori",kindnessWoori)
        console.log("kindnessIbk",kindnessIbk)
        console.log("kindnessHana",kindnessHana)
        console.log("mobileKakao",mobileKakao)
        console.log("mobileKb",mobileKb)
        console.log("mobileNh",mobileNh)
        console.log("mobileSinhan",mobileSinhan)
        console.log("mobileWoori",mobileWoori)
        console.log("mobileIbk",mobileIbk)
        console.log("mobileHana",mobileHana)
        console.log("brandKakao",brandKakao)
        console.log("brandKb",brandKb)
        console.log("brandNh",brandNh)
        console.log("brandSinhan",brandSinhan)
        console.log("brandWoori",brandWoori)
        console.log("brandIbk",brandIbk)
        console.log("brandHana",brandHana)
        console.log("feeKakao",feeKakao)
        console.log("feeKb",feeKb)
        console.log("feeNh",feeNh)
        console.log("feeSinhan",feeSinhan)
        console.log("feeWoori",feeWoori)
        console.log("feeIbk",feeIbk)
        console.log("feeHana",feeHana)
        console.log("exchangeKakao",exchangeKakao)
        console.log("exchangeKb",exchangeKb)
        console.log("exchangeNh",exchangeNh)
        console.log("exchangeSinhan",exchangeSinhan)
        console.log("exchangeWoori",exchangeWoori)
        console.log("exchangeIbk",exchangeIbk)
        console.log("exchangeHana",exchangeHana)
        console.log("retireKakao",retireKakao)
        console.log("retireKb",retireKb)
        console.log("retireNh",retireNh)
        console.log("retireSinhan",retireSinhan)
        console.log("retireWoori",retireWoori)
        console.log("retireIbk",retireIbk)
console.log("retireHana",retireHana)

        console.log("raw total sinhan",totalSinhan, "kakao", totalKakao, "Kb", totalKb, "woori", totalWoori, "nh", totalNh, "ibk", totalIbk, "hana", totalHana)
        total_score_array = [
            {
                id: '신한은행',
                score: bankrank[0],
                image: imageSrc_shinhan
            },
            {
                id: '카카오뱅크',
                score: bankrank[1],
                image: imageSrc_kakao
            },

            {
                id: 'KB국민은행',
                score: bankrank[2],
                image: imageSrc_kb
            },
            {
                id: '우리은행',
                score: bankrank[3],
                image: imageSrc_worri
            },
            {
                id: 'NH농협은행',
                score: bankrank[4],
                image: imageSrc_nh
            },
            {
                id: 'IBK기업은행',
                score: bankrank[5],
                image: imageSrc_ibk
            },
            {
                id: '하나은행',
                score: bankrank[6],
                image: imageSrc_hana
            },
        ]
        // 각 은행별 id랑 score매치 (아직 sort안함)
        function customSort(a, b) {
            if (a.score == b.score) {
                return 0
            }
            return a.score < b.score ? 1 : -1
        }
        total_score_array.sort(customSort) // sort 해서 이제 앞에서 부터 점수 높은 순
        console.log("array",total_score_array)
        console.log(total_score_array[3])
        console.log(total_score_array[3]['score'])
        console.log(total_score_array[2]['id'])

        for (let i = 0; i < 7; i++) {
            // rendernum (top 3 point 은행이 총 몇개인지 구하는 알고리즘)
            rendernum++
            if (
                total_score_array[i]['score'] !=
                    total_score_array[i + 1]['score'] &&
                rendernum >= 3
            )
                break
        }

        for (let i = 0; i < rendernum; i++) renderarray[i] = 1 // renderarray(위에서 설명) 초기화
        console.log(renderarray)
        setRendercheck1(renderarray[0])
        setRendercheck2(renderarray[1])
        setRendercheck3(renderarray[2])
        setRendercheck4(renderarray[3])
        setRendercheck5(renderarray[4])
        setRendercheck6(renderarray[5])
        setRendercheck7(renderarray[6])

        setRank1_score(total_score_array[0]['score'])
        setRank2_score(total_score_array[1]['score'])
        setRank3_score(total_score_array[2]['score'])
        setRank4_score(total_score_array[3]['score'])
        setRank5_score(total_score_array[4]['score'])
        setRank6_score(total_score_array[5]['score'])
        setRank7_score(total_score_array[6]['score'])

        setRank1_name(total_score_array[0]['id'])
        setRank2_name(total_score_array[1]['id'])
        setRank3_name(total_score_array[2]['id'])
        setRank4_name(total_score_array[3]['id'])
        setRank5_name(total_score_array[4]['id'])
        setRank6_name(total_score_array[5]['id'])
        setRank7_name(total_score_array[6]['id'])

        setRank1_image(total_score_array[0]['image'])
        setRank2_image(total_score_array[1]['image'])
        setRank3_image(total_score_array[2]['image'])
        setRank4_image(total_score_array[3]['image'])
        setRank5_image(total_score_array[4]['image'])
        setRank6_image(total_score_array[5]['image'])
        setRank7_image(total_score_array[6]['image'])
        setButtondel(0)
    }

    return (
        <div className="container">
            <div class="header">
                <h1>BEST BANK</h1>
                <div class="nav">
                    <ul>
                        <li><a href="http://localhost:3000/">처음으로</a></li>
                        <li><a href="http://localhost:3000/Mainquestion">질문화면</a></li>
                    </ul>
                </div>
            </div>
            <div class="body">
            {buttondel > 0 && (
                <button onClick={calcul_totalrank} className='button'>결과확인</button>
            )}

            {rendercheck1 > 0 && (
                <h1>
                    1등 : <img className='rank1' src={rank1_image} width={50}></img> {rank1_name} / 점수 : {rank1_score}
                </h1>
                
            )}
            {rendercheck2 > 0 && (
                <h1>
                    2등 : <img className='rank2' src={rank2_image} width={50}></img> {rank2_name} / 점수 : {rank2_score}
                </h1>
            )}
            {rendercheck3 > 0 && (
                <h1>
                    3등 : <img className='rank3' src={rank3_image} width={50}></img> {rank3_name} / 점수 : {rank3_score}
                </h1>
            )}
            {rendercheck4 > 0 && (
                <h1>
                    4등 : <img className='rank4' src={rank4_image} width={50}></img> {rank4_name} / 점수 : {rank4_score}
                </h1>
            )}
            {rendercheck5 > 0 && (
                <h1>
                    5등 : <img className='rank5' src={rank5_image} width={50}></img> {rank5_name} / 점수 : {rank5_score}
                </h1>
            )}
            {rendercheck6 > 0 && (
                <h1>
                    6등 : <img className='rank6' src={rank6_image} width={50}></img> {rank6_name} / 점수 : {rank6_score}
                </h1>
            )}
            {rendercheck7 > 0 && (
                <h1>
                    7등 : <img className='rank7' src={rank7_image} width={50}></img> {rank7_name} / 점수 : {rank7_score}
                </h1>
            )}

            <Link
                to={{
                    pathname: '/Next/Asset',
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
                <button className="button">항목별 상세 설명</button>
            </Link>
            <button onClick={handleClick} className="button">
                주변 지점 확인해보기
            </button>
        </div>
        </div>
    )
}

export default Conclusion
