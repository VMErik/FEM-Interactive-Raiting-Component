let score = 0;

const button = document.getElementById('sendEvaluation');
const scores = document.getElementsByClassName('raiting-state--evaluation');
const scoreCard = document.getElementById('scoreCard');
const resultCard = document.getElementById('resultCard');
const resultScore = document.getElementById('resultScore');

button.addEventListener('click', () => {
    if (score === 0) {
        alert('Please select a number');
    } else {
        scoreCard.style.display = 'none';
        resultCard.style.display = 'flex';
        resultScore.innerText = 'You selected ' + score.toString() + ' out of 5'
    }
});

for (let index = 0; index < scores.length; index++) {
    const element = scores[index];
    element.addEventListener('click', () => {
        clearSelection();
        score = element.innerHTML;
        scores[index].style.backgroundColor = 'var(--light-gray)';
        scores[index].style.color = 'var(--white)';
    });
}


function clearSelection() {
    for (let index = 0; index < scores.length; index++) {
        const element = scores[index];
        element.style.backgroundColor = 'var(--gray)';
        element.style.color = 'var(--light-gray)';
    }
}