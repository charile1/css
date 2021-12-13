// 실패를 한 이유: 타입을 구현 안했습니다.
describe('텍스트 관리자입니다.', () => {
    
    let textManager;
    // it 함수 호출 직전에 실행되는 함수 : 리팩토링(좀 더 개선된 코드)
    beforeEach(() => {
         textManager = new TextManager();
    })


    it('텍스트 값을 전달합니다.', () => {
        const textManager = new TextManager();
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })

    // getValue 값을 가져오는 애
    // setValue 값을 설정하는 애 
    it('텍스트 값을 수정합니다', () => {
        const textManager = new TextManager();
        const newText = {data: 'Hello Zebras'};  // 역시나 똑같이 객체자료형으로 만든다. 
        textManager.setValue(newText)

        expect(textManager.getValue()).toBe(newText.data); //newText 는 hello zebras
    })
})
