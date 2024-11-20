 // 현재 페이지 URL에 해당하는 메뉴 항목을 자동으로 활성화하는 JavaScript 코드
 document.querySelectorAll('.menu-item').forEach(item => {
    if (window.location.href.indexOf(item.href) > -1) {
        item.classList.add('active');
    }
});

// 비디오 슬라이드 기능 (자동으로 비디오가 변경됨)
let currentIndex = 0;
const videos = [
    "https://www.youtube.com/embed/CD8ZQw1VWHk", 
    "https://www.youtube.com/embed/qHYXAdLpE-Y"
];

const iframe = document.querySelector('iframe'); // 첫 번째 iframe 선택

function showNextVideo() {
    currentIndex = (currentIndex + 1) % videos.length; // 비디오 인덱스를 순차적으로 변경
    iframe.src = videos[currentIndex]; // 새로운 비디오 소스로 iframe 업데이트
}

// 4초마다 비디오 변경 (슬라이드 효과)
setInterval(showNextVideo, 4000); // 4000ms = 4초