function ViewManager(textManager, options) {
    if (!textManager || !options.btnEl || !options.viewerEl || !options.inpTxt) {
        // throw 사용자 정의 예외를 만들고 프로그램을 종료합니다.
        throw Error('전달인자중에 빈값이 존재합니다.');
    }

    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;

    //이벤트 등록 버튼이 클릭되면 체인지벨류(값을 바꿔주는)를 실행
    options.btnEl.addEventListener('click', () => {
        this.changeValue();
    })
}

ViewManager.prototype.changeValue = function () {
    this.textManager.setValue({data: this.inpTxt.value }) //value는 input 선택하고 .value한 그것을 가르킨다.
    this.updateView();
}


// hello lions 를 업데이트 해줄 겁니다.
ViewManager.prototype.updateView = function () {
    this.viewerEl.textContent = this.textManager.getValue();
}