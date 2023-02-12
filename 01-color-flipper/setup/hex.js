const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
  let hexColor = '#'
  // for로 했을 때
  // for (let i = 0; i < 6; i++) {
  //   hexColor += hex[getRandomNumber()];
  // }

  while (hexColor.length < 7) {
    hexColor += hex[random()]
  }

  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
});

const random = () => {
  return Math.floor(Math.random() * hex.length)
}
