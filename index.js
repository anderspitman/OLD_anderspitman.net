import { Rainer } from 'redpill-rain';

const theme = {
  fontFamily: 'Courier New',
  fontSize: 18,
  fontWeight: 'bold',
  fontColor: '#26a750',
  backgroundColor: 'rgba(20, 20, 20, 1.0)',
};

const rainEl = document.getElementById('rain-container');
const dim = document.body.getBoundingClientRect();
rainEl.style.width = dim.width + 'px';
rainEl.style.height = dim.height + 'px';

if (dim.width < 650) {
  theme.fontSize = 10;
}

const rainer = new Rainer({
  sourceType: 'github',
  githubUsername: 'anderspitman',
  domElementId: 'rain-container',
  theme,
});
