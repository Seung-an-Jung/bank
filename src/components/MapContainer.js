/*global kakao*/
import React, {useEffect} from 'react';


//var [adrss, setAdrss] = React.useState(0)

var MapContainer = () => {

    useEffect(() => {
        var container = document.getElementById('myMap');
        var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        var map = new kakao.maps.Map(container,options);
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {
            //console.log(result[0].x, result[0].y,'검색')
            //정상 검색 완료 시
            if(status === kakao.maps.services.Status.OK){
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            
            //결과 마커 표시
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            var infowindow = new kakao.maps.InfoWindow({
                content:'<div style="width:150px;text-align:center;padding:6px 0;">주소 위치</div>'
            });
            infowindow.open(map, marker);
            console.log(map.getCenter().Ma, map.getCenter().La);
            //중심 위치 이동
            map.setCenter(coords);
            }

        });
        },[])
        return (
            <div id='myMap' style={{
              width: '500px', 
              height: '400px'
            }}></div>
          );
    };

export default MapContainer;