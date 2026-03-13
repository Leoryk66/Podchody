// Normalizuje odpowiedź — usuwa wielkie litery, polskie znaki, spacje z brzegów
function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/ą/g,'a').replace(/ć/g,'c').replace(/ę/g,'e')
    .replace(/ł/g,'l').replace(/ń/g,'n').replace(/ó/g,'o')
    .replace(/ś/g,'s').replace(/ź/g,'z').replace(/ż/g,'z');
}

function checkAnswer(correctAnswers, inputId, resultId, hintText, nextUrl) {
  const input = document.getElementById(inputId);
  const result = document.getElementById(resultId);
  const userAnswer = normalize(input.value);

  const isCorrect = correctAnswers.some(ans => normalize(ans) === userAnswer);

  if (isCorrect) {
    result.className = 'result correct';
    result.innerHTML = `
      <div class="result-icon">🎉</div>
      <div class="result-title">Brawo! Masz rację!</div>
      <div class="hint-box">
        <div class="hint-label">📍 Wskazówka:</div>
        <div class="hint-text">${hintText}</div>
      </div>
      ${nextUrl ? `<a href="${nextUrl}" class="next-btn">Następna zagadka ➜</a>` : '<div class="final-msg">🏆 To była ostatnia zagadka!</div>'}
    `;
    result.style.display = 'block';
    input.disabled = true;
    document.querySelector('.check-btn').disabled = true;
    // Confetti effect
    spawnConfetti();
  } else {
    result.className = 'result wrong';
    result.innerHTML = `<div class="result-icon">🤔</div><div>Hmm, spróbuj jeszcze raz!</div>`;
    result.style.display = 'block';
    input.focus();
    // Shake animation
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  }
}

function spawnConfetti() {
  const colors = ['#ff7043','#ffca28','#66bb6a','#4fc3f7','#ce93d8'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      position:fixed; width:10px; height:10px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      border-radius:${Math.random()>0.5?'50%':'2px'};
      left:${Math.random()*100}vw;
      top:-10px;
      opacity:1;
      animation: confettiFall ${1.5+Math.random()*2}s ease-in forwards;
      animation-delay:${Math.random()*0.8}s;
      transform: rotate(${Math.random()*360}deg);
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}
