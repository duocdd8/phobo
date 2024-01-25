let maxPeople = 10;
//Hàm random thời gian
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Hàm chờ 5 giây
function sleep() {
  let time = getRandomNumber(50,70) *100;
  return new Promise(resolve => setTimeout(resolve, time));
}
//Cuộn trang xuống cuối
function scrollPageToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
let spans = document.getElementsByTagName('span');console.log(spans.length);
let count = 0;
do {
  let i = 0;
// Lặp qua từng thẻ span
  for (i; i < spans.length; i++) {
    const span = spans[i];

    if (span.innerText.trim() === 'Thêm bạn bè' || span.innerText.trim() === 'Add friend') {
      span.click();
      console.log('đã click');
      count ++;
      await sleep();
      console.log(i + 'Nghỉ vài giây ');
      if (count === maxPeople) {
        console.log('Đã kết bạn ' + maxPeople + ' người, thoát khỏi vòng lặp');
        break;
      }
    }
  }
  scrollPageToBottom();
  spans = document.getElementsByTagName('span');console.log(spans.length);
}
while (count<maxPeople)