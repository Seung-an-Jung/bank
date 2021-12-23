/*global kakao*/ 
import React, { useEffect } from 'react';
import Sinhan from "./sinhan.png";
import Hana from "./hana.png";
import KB from "./kb.png";
import Woori from "./woori.png";
import NH from "./nh.png";
import IBK from "./ibk.png";



const MapContainer2=()=>{

  useEffect(()=>{
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({zIndex:1});
    
    const container = document.getElementById('map') // 지도를 표시할 div 
    const option = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        } 

    var map = new kakao.maps.Map(container, option);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(map); 
    
    // 카테고리로 은행을 검색합니다
    ps.categorySearch('BK9', placesSearchCB, {useMapBounds:true});

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            //각 은행별 지점 갯수 저장할 변수 선언
            var sinhannum = 0;
            var hananum = 0;
            var kbnum = 0;
            var woori = 0;
            var nhnum = 0;
            var ibknum = 0;
            var atmnum = 0;
            
            //마커 찍어가면서 지점 갯수 카운팅
            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);
                console.log(data[i]);
                if(data[i].category_name.slice(21,) === "하나은행") hananum++;
                else if (data[i].category_name.slice(21,) === "신한은행") sinhannum++;
                else if (data[i].category_name.slice(21,) === "KB국민은행") kbnum++;
                else if (data[i].category_name.slice(21,) === "우리은행") woori++;
                else if (data[i].category_name.slice(21,) === "NH농협은행") nhnum++;
                else if (data[i].category_name.slice(21,) === "기업은행") ibknum++;
                else if (data[i].category_name.slice(21,) === "ATM") atmnum++;
                else console.log(data[i].category_name.slice(21,));    
            }

            for (var i=0; i<data.length; i++) {
                displayMarker(data[i], hananum, sinhannum, kbnum, woori, nhnum, ibknum, atmnum);    
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

    //ATM 
    //var imageSrc_atm = '../image/', // 마커이미지의 주소입니다    
    //    imageSize_atm = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    //    imageOption_atm = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    //var markerImage_atm = new kakao.maps.MarkerImage(imageSrc_atm, imageSize_atm, imageOption_atm),
    //    markerPosition_atm = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    /////////////////////////////////////마커//////////////////////////////////



    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place, hananum, sinhannum, kbnum, woori, nhnum, ibknum, atmnum) {
        // 마커를 생성하고 지도에 표시합니다
        console.log(place, "하나",hananum,"신한", sinhannum,"국민", kbnum,"워리", woori,"농협", nhnum, "기업", ibknum, "ATM", atmnum);

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
        }else if (place.category_name.slice(21,) === "ATM"){
            //var bankmarker = markerImage_atm;
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
}, [])


    return (
        <div>
        <div id="map" style={{width:"500px", height:"400px"}}></div>
       
        </div>
    )
}

export default MapContainer2;