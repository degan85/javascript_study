var req = new XMLHttpRequest();

/*
    readyState
        0 : open 메소드 호출 전
        1 : open 메소드 호출 후, send 메소드 호출 전
        2 : 보낸 요청에 대해 응답 헤더가 수신된 후
        3 : 응답의 바디 부분이 수신중일 때
        4 : 모든 응답이 수신되었을 때

    onreadystatechange : readyState가 변할 때마다 호출되는 콜백 함수

    status 속성(HTTP response의 응답 헤더에 기록된 코드)
        200 : OK
        404 : Not Found
        500 : Internal Error
        ...

    응답을 정상적으로 수신한 경우
        readyState : 4
        status : 200
 */
req.onreadystatechange = function a() {
    console.log(this.readyState, this.status);

    if(this.readyState == 4 && this.status == 200) {
        console.log(this.response);
    }
};

req.open("GET", "http://google.com/");

req.send();

/*
    JSON : Javascript Object Notification
 */

var original_obj = { pi:3.14, str:"string" };

// 객체를 JSON 문자열로 반환
var json_str = JSON.stringify( original_obj );
// "{"pi":3.14,"str":"String"}"

// JSON 문자열을 Javascript Object로 반환
var parsed_obj = JSON.parse( json_str );
// {pi: 3.14, str: "String"}
