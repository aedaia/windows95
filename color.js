let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    console.log(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = 'light.css';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = 'sky.css';
  } else if (theme == 'blue') {
    document.getElementById('switcher-id').href = 'blue.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = 'dark.css';
  }
  localStorage.setItem('style', theme);
}