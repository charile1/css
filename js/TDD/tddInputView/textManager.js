const TextManager = (() => {
    let value = {};  // 객체자료형으로 만든 이유는 값을 참조하기위해서
    // let value = "hello lions!" // 원시값으로 만들면 인스턴스간에 값 공유가 불가능하다. 복사하기 때문에.
    function innerTextManager() {

    }
    innerTextManager.prototype.getValue = function () {
        return value.data; 
    }

    innerTextManager.prototype.setValue = function (newValue) {
        value = newValue; 
    }

    return innerTextManager;
})();