import './styles.css';
import colors from './colors.js';

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет
//цвет фона body на случайное значение из массива используя инлайн - стиль.
//При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
//Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов),
//используй функцию randomIntegerFromInterval.

console.log(colors);
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
console.log(btnStartRef);
console.log(btnStopRef);

btnStartRef.addEventListener('click', onStartChangeBodyColor);
btnStopRef.addEventListener('click', onStopChangeBodyColor);

const DEFAULT_INTERVAL = 1000;
let intervalId = '';

function onStartChangeBodyColor() {
  intervalId = setInterval(onTakeRandomColor, DEFAULT_INTERVAL);
  btnStartRef.disabled = true;
}

function onTakeRandomColor() {
  const colorIndex = randomIntegerFromInterval(min, max);
  document.body.style.backgroundColor = colors[colorIndex];
  console.log(colors[colorIndex]);
}

const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomIntegerFromInterval(min, max));

function onStopChangeBodyColor() {
  clearInterval(intervalId);
  btnStartRef.disabled = false;
  console.log('Зупиняємо зміну кольору');
}
