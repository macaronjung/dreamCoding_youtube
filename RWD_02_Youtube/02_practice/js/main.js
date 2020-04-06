
// .info .metadata .moreBtn 을 moreBtn 에 할당
const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

// 클릭하면
moreBtn.addEventListener('click', () => {
  // moreBtn 의 클래스를 클릭되었는지 안되었는지 토글
  moreBtn.classList.toggle('clicked');
  // title 의 클래스를 클램프했는지 안했는지 토글
  title.classList.toggle('clamp');
});