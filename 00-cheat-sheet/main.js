const debounce1 = (eventName, func, wait) => {
  let timerId = null;
  console.log('de1 1', this)

  return function(event) {
    let self = this;
    // console.log('de1 2', this)
    clearTimeout(timerId);
    timerId = setTimeout(func.bind(self, event), wait);
  };
};

const mousemoveHandler = () => {
  console.log('wait 시간 내 많은 이벤트 발생 시 한번만 호출됨');
}

document.body.addEventListener('mousemove', debounce1('mousemove', mousemoveHandler, 200));

function debounce2(func, timeout = 200) {
  let timer;
  // console.log('de2 1', this)
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // console.log('de2 2', this)
      func.apply(this, args);
    }, timeout);
  };
}
function saveInput() {
  console.log('Saving data');
}
const processChange = debounce2(() => saveInput());

document.body.addEventListener('mousemove', processChange);

