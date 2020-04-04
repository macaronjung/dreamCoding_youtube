/* toggleBtn 에 클래스를 찾아서 연결해주기*/
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

/* API 이용 지정 함수 호출 명령(jquery 미사용)*/
toggleBtn.addEventListener('click', () => {
  /* 클래스를 클릭했을때 active클래스 없으면 추가(반대도 가능) */
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
