// Interaktivt reglage: beräkna 3x + 5 när x ändras.
const slider = document.querySelector('#x-slider');
const xValue = document.querySelector('#x-value');
const resultValue = document.querySelector('#result-value');
const calculation = document.querySelector('#calculation');

slider.addEventListener('input', () => {
  const x = Number(slider.value);
  const result = 3 * x + 5;
  xValue.textContent = String(x);
  resultValue.textContent = String(result);
  calculation.textContent = `3 · (${x}) + 5 = ${result}`;
});

// Självrättande frågor. Inga elevsvar skickas till en server.
const quiz = document.querySelector('#quiz');
quiz.addEventListener('submit', (event) => {
  event.preventDefault();
  const answers = [
    {correct: quiz.elements.q1.value.trim() !== '' && Number(quiz.elements.q1.value) === 7,
     hint: 'Koefficienten är talet framför variabeln: 7.'},
    {correct: quiz.elements.q2.value.trim() !== '' && Number(quiz.elements.q2.value) === 16,
     hint: 'Sätt in x = 5: 2 · 5 + 6 = 16.'},
    {correct: /^40\*?x\+15$|^15\+40\*?x$/i.test(quiz.elements.q3.value.replace(/\s/g, '').replace(/·/g, '*')),
     hint: 'x paket kostar 40x kr. Lägg sedan till 15 kr i frakt.'}
  ];
  answers.forEach((answer, index) => {
    const feedback = document.querySelector(`#f${index + 1}`);
    feedback.textContent = answer.correct ? 'Rätt svar!' : `Försök igen. Tips: ${answer.hint}`;
    feedback.className = `feedback ${answer.correct ? 'correct' : 'incorrect'}`;
  });
  document.querySelector('#score').textContent =
    `Du fick ${answers.filter(answer => answer.correct).length} av 3 rätt.`;
});
