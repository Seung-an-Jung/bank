import Sinhan from "./sinhan.png";
import Hana from "./hana.png";
import KB from "./kb.png";
import Woori from "./woori.png";
import NH from "./nh.png";
import IBK from "./ibk.png";
import React, { useState, useEffect, Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom';

const { kakao } = window

function KakaoMapScript(addr){
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({zIndex:1});

    const container = document.getElementById('myMap') // 가이드는 Map이다
    const options = {
        center: new kakao.maps.LatLng(36.3503849976553, 127.384633005948),
        level: 4,
    }
    const map = new kakao.maps.Map(container, options)
    const geocoder = new kakao.maps.services.Geocoder()
    //var coords
    
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(map); 

    geocoder.addressSearch(addr, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            console.log(coords)
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
            })
            var lat = coords.Ma, // 위도
                lon = coords.La // 경도
            console.log("check",lat)
            console.log("check",lon)
            var locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                //message = '<div style="padding:5px;">여기에 계신가요?!</div>' // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarkerMap(locPosition)

            // 장소 검색 객체를 생성합니다
            var ps = new kakao.maps.services.Places(map); 
        
            // 카테고리로 은행을 검색합니다
            ps.categorySearch('BK9', placesSearchCB, {useMapBounds:true});
            
        }
        
    })
    


    
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarkerMap(locPosition) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
        })

        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition)
    }

    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            //각 은행별 지점 갯수 저장할 변수 선언
            var sinhannum = 0;
            var hananum = 0;
            var kbnum = 0;
            var woori = 0;
            var nhnum = 0;
            var ibknum = 0;
            
            //마커 찍어가면서 지점 갯수 카운팅
            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);
                if(data[i].category_name.slice(21,) === "하나은행") hananum++;
                else if (data[i].category_name.slice(21,) === "신한은행") sinhannum++;
                else if (data[i].category_name.slice(21,) === "KB국민은행") kbnum++;
                else if (data[i].category_name.slice(21,) === "우리은행") woori++;
                else if (data[i].category_name.slice(21,) === "NH농협은행") nhnum++;
                else if (data[i].category_name.slice(21,) === "기업은행") ibknum++;
                else console.log(data[i].category_name.slice(21,));    
            }

            //setmapKbVal(kbnum)
            //setmapNhVal(nhnum)
            //setmapSinhanVal(sinhannum)
            //setmapWooriVal(woori)
            //setmapIbkVal(ibknum)
            //setmapHanaVal(hananum)
//
            //console.log(mapval_hana, mapval_ibk, mapval_kb, mapval_nh, mapval_sinhan, mapval_woori)

            for (var i=0; i<data.length; i++) {
                displayMarker(data[i], hananum, sinhannum, kbnum, woori, nhnum, ibknum);    
            }   
        }
    }
        //은행별 마커 이미지
    /////////////////////////////////////마커//////////////////////////////////
    ///하나은행
    var imageSrc_hana = Hana, // 마커이미지의 주소입니다    
    imageSize_hana = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption_hana = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage_hana = new kakao.maps.MarkerImage(imageSrc_hana, imageSize_hana, imageOption_hana),
    markerPosition_hana = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    ///하나은행

    //신한은행
    var imageSrc_shinhan = Sinhan, // 마커이미지의 주소입니다    
    imageSize_shinhan = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption_shinhan = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage_shinhan = new kakao.maps.MarkerImage(imageSrc_shinhan, imageSize_shinhan, imageOption_shinhan),
    markerPosition_shinhan = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    //신한은행

    //KB국민은행
    var imageSrc_kb = KB, // 마커이미지의 주소입니다    
    imageSize_kb = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption_kb = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage_kb = new kakao.maps.MarkerImage(imageSrc_kb, imageSize_kb, imageOption_kb),
    markerPosition_kb = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    //KB국민은행

    //우리은행
    var imageSrc_worri = Woori,// 마커이미지의 주소입니다    
    imageSize_worri = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption_worri = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage_worri = new kakao.maps.MarkerImage(imageSrc_worri, imageSize_worri, imageOption_worri),
    markerPosition_worri = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    //우리은행

    //농협
    var imageSrc_nh = NH, // 마커이미지의 주소입니다    
    imageSize_nh = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption_nh = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage_nh = new kakao.maps.MarkerImage(imageSrc_nh, imageSize_nh, imageOption_nh),
    markerPosition_nh = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    //농협

    //기업
    var imageSrc_ibk = IBK, // 마커이미지의 주소입니다    
    imageSize_ibk = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption_ibk = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage_ibk = new kakao.maps.MarkerImage(imageSrc_ibk, imageSize_ibk, imageOption_ibk),
    markerPosition_ibk = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    //기업

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place, hananum, sinhannum, kbnum, woori, nhnum, ibknum) {
        // 마커를 생성하고 지도에 표시합니다
        //console.log(place, "하나",hananum,"신한", sinhannum,"국민", kbnum,"워리", woori,"농협", nhnum, "기업", ibknum);

        if (place.category_name.slice(21,) === "하나은행"){
            var bankmarker = markerImage_hana;
        }else if (place.category_name.slice(21,) === "신한은행"){
            var bankmarker = markerImage_shinhan;
        }else if (place.category_name.slice(21,) === "KB국민은행"){
            var bankmarker = markerImage_kb;
        }else if (place.category_name.slice(21,) === "우리은행"){
            var bankmarker = markerImage_worri;
        }else if (place.category_name.slice(21,) === "NH농협은행"){
            var bankmarker = markerImage_nh;
        }else if (place.category_name.slice(21,) === "기업은행"){
            var bankmarker = markerImage_ibk;
        }else{
            return null;
        }

        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: bankmarker
        });
    
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });

    }
}

export default KakaoMapScript;
