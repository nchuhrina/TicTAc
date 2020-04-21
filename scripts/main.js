'use strict';

window.onload = function() {
  for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += `
    <div class="block"> </div>`;
  }

  let move = 0;

  // eslint-disable-next-line no-shadow
  document.getElementById('game').onclick = function(event) {
    if (event.target.className === 'block') {
      if (move % 2 === 0) {
        event.target.innerHTML = 'X';
      } else {
        event.target.innerHTML = '0';
      }
      move++;

      if (checkWinner() !== undefined) {
        alert(checkWinner());
      }
    }

    if (move > 8 && checkWinner() === undefined) {
      alert('Friendship win');
    }
  };

  function checkWinner() {
    const blocks = document.getElementsByClassName('block');

    switch (true) {
      case (blocks[0].innerHTML === 'X'
        && blocks[1].innerHTML === 'X'
        && blocks[2].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[3].innerHTML === 'X'
        && blocks[4].innerHTML === 'X'
        && blocks[5].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[6].innerHTML === 'X'
        && blocks[7].innerHTML === 'X'
        && blocks[8].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[0].innerHTML === 'X'
        && blocks[4].innerHTML === 'X'
        && blocks[8].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[2].innerHTML === 'X'
        && blocks[4].innerHTML === 'X'
        && blocks[6].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[0].innerHTML === 'X'
        && blocks[3].innerHTML === 'X'
        && blocks[6].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[1].innerHTML === 'X'
        && blocks[4].innerHTML === 'X'
        && blocks[7].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[2].innerHTML === 'X'
        && blocks[5].innerHTML === 'X'
        && blocks[8].innerHTML === 'X'):
        return 'X Wins!';

      case (blocks[0].innerHTML === '0'
        && blocks[1].innerHTML === '0'
        && blocks[2].innerHTML === '0'):
        return '0 Wins!';

      case (blocks[3].innerHTML === '0'
        && blocks[4].innerHTML === '0'
        && blocks[5].innerHTML === '0'):
        return '0 Wins!';

      case (blocks[6].innerHTML === '0'
        && blocks[7].innerHTML === '0'
        && blocks[8].innerHTML === '0'):
        return '0 Wins!';

      case (blocks[0].innerHTML === '0'
        && blocks[4].innerHTML === '0'
        && blocks[8].innerHTML === '0'):
        return '0 Wins!';

      case (blocks[2].innerHTML === '0'
        && blocks[4].innerHTML === '0'
        && blocks[6].innerHTML === '0'):
        return '0 Wins!';

      case (blocks[0].innerHTML === '0'
        && blocks[3].innerHTML === '0'
        && blocks[6].innerHTML === '0'):
        return '0 Wins!';

      case (blocks[1].innerHTML === '0'
        && blocks[4].innerHTML === '0'
        && blocks[7].innerHTML === '0'):
        return '0 Wins!';

      case (blocks[2].innerHTML === '0'
        && blocks[5].innerHTML === '0'
        && blocks[8].innerHTML === '0'):
        return '0 Wins!';
    }
  }

  const button = document.querySelector('button');

  button.addEventListener('click', function() {
    location.reload();
  });
};
