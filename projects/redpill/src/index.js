import { Rainer } from 'redpill-rain';


const usernameInput = document.getElementById('username')
const submitInput = document.getElementById('submit')

const theme = {
  fontFamily: 'Courier New',
  fontSize: 14,
  fontWeight: 'bold',
  fontColor: '#26a750',
  backgroundColor: 'black',
}


let rainer;

submitInput.addEventListener('click', () => {
  const username = usernameInput.value;
  const root = document.getElementById('root');
  const oldElem = root.firstChild;
  root.removeChild(oldElem);
  go(username);
})

function go(username) {
  rainer = new Rainer({
    sourceType: 'github',
    githubUsername: username,
    domElementId: 'root',
    theme,
  })
}

go(usernameInput.value);
