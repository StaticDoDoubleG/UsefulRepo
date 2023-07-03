//사용법-개발자도구(F12) 열고 콘솔에 이 코드 그대로 붙여넣기 하고 엔터.
//뒤에 화면이 어두워졌다 밝아졌다 하면 정상 작동입니다.

/* Unquote this if needed
var vProcessUpdateUrl = "/ushm/edu/SetImgtechContents2019AfterVersionProcessUpdate.do";
var smProgressNo = Number(params[2].split("=")[1]);
var smMemberNo = Number(params[3].split("=")[1]);
*/

function PageMove2019AfterVersionx(pageNo) {
	var gapTime = 3599;

	$.ajax({
		type: "POST",
		async: false,
        url: vProcessUpdateUrl,
        data: { "scheduleMemberProgressNo": smProgressNo, "watchedpage": pageNo, "gapTime": gapTime },
		success: function (data) {
			if (data.isSuccess == true) {
				try {
					opener.BindProgressList(smMemberNo);
				}
				catch (e) {

				}				
			}
			else {
				alert("PageMove Msg : " + data.msg);
			}
		},
		error: function (xhr, status, error) {
			alert("PageMove Error : " + JSON.stringify(xhr));
		}
	});
}


//below code is from https://gist.github.com/Verssae/0ed510986e87a8360965daaef3608861
var currentPage = nowPageNum;
function goNextPage() {
    if (currentPage < totalPageNum) {
        PageMove2019AfterVersionx(currentPage);
        console.log(`${currentPage} 페이지를 수강완료했습니다.`);
        currentPage += 1;
        setTimeout(function () {
            goNextPage();
        }, 100);
    } else {
        PageMove2019AfterVersionx(currentPage);
        console.log('강의 수강이 완료되었습니다!');
        setTimeout(function () {
            window.close();
        }, 200);
    }
}
setTimeout(function () {
    goNextPage();
}, 100)

/*
퀴즈 스킵은 없습니다. 서버에서 채점하는 것으로 보입니다.
*/