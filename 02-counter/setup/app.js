const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

const btnClass = {
  increase: () => {
    count++;
  },
  decrease: () => {
    count--;
  },
  reset: () => {
    count = 0;
  },
};

const setTextColor = () => {
  if (count > 0) {
    return 'green';
  }
  if (count < 0) {
    return 'red';
  }
  if (count === 0) {
    return '#222';
  }
};

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const btnAction = e.currentTarget.classList[1];
    btnClass[btnAction]();

    value.style.color = setTextColor();
    value.textContent = count;
  });
});

