// 검색창 요소(.seaech) 찾기.
const seaechEl = Document.querySelelctor('.search')
const seaechInputEl = searchEl.querySelelctor('input')
//검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click',function () {
    searchInputEl.focus();
});
//검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
//검색창 요소 내부 실제 input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});
