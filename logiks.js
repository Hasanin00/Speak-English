document.addEventListener('DOMContentLoaded', function() {
    
    // === КОНФИГУРАЦИЯ (Правильные ответы) ===
    const correctAnswers = {
        q1: "B", q2: "A", q3: "C", q4: "B", q5: "B",
        q6: "C", q7: "B", q8: "C", q9: "A", q10: "B"
    };

    const questionsText = {
        q1: "How ___ you?",
        q2: "What ___ your name?",
        q3: "I ___ from Russia.",
        q4: "___ you speak English?",
        q5: "She ___ a cat.",
        q6: "They ___ playing football now.",
        q7: "My brother ___ like coffee.",
        q8: "___ is your birthday?",
        q9: "I ___ to music every day.",
        q10: "We ___ TV yesterday."
    };

    // ==========================================
    // БЛОК 1: Страница ТЕСТА (vxodnoetest.html)
    // ==========================================
    const submitBtn = document.getElementById('submit-test');
    const resultsBlock = document.getElementById('results-block');
    const resultsContent = document.getElementById('results-content');
    const backHomeBtn = document.getElementById('back-home');
    const testForm = document.getElementById('test-form');
    
    if (submitBtn && resultsBlock) {
        submitBtn.addEventListener('click', function() {
            const userAnswers = {};
            let allAnswered = true;

            for (let i = 1; i <= 10; i++) {
                const key = 'q' + i;
                const selected = document.querySelector(`input[name="${key}"]:checked`);
                
                if (selected) {
                    userAnswers[key] = selected.value;
                } else {
                    userAnswers[key] = null;
                    allAnswered = false;
                }
            }

            if (!allAnswered) {
                alert("Пожалуйста, ответьте на все вопросы!");
                return;
            }

            // Подсчёт баллов
            let score = 0;
            let detailsHTML = '<div class="analysis-list">';

            for (let i = 1; i <= 10; i++) {
                const key = 'q' + i;
                const userVal = userAnswers[key];
                const correctVal = correctAnswers[key];
                const question = questionsText[key];

                if (userVal === correctVal) {
                    score++;
                    detailsHTML += `
                        <div class="item-correct">
                            <strong>✅ Вопрос ${i}: ${question}</strong><br>
                            Ваш ответ: ${userVal} (Верно)
                        </div>`;
                } else {
                    detailsHTML += `
                        <div class="item-wrong">
                            <strong>❌ Вопрос ${i}: ${question}</strong><br>
                            Ваш ответ: ${userVal || 'Нет ответа'} <br>
                            <span style="color:green">Правильный ответ: ${correctVal}</span>
                        </div>`;
                }
            }
            detailsHTML += '</div>';

            // Расчет уровня
            const percent = (score / 10) * 100;
            let level = "";
            let levelColor = "";

            if (percent === 100) { level = "СУПЕР"; levelColor = "#21b0fe"; }
            else if (percent >= 80) { level = "ХОРОШО"; levelColor = "#21b0fe"; }
            else if (percent >= 60) { level = "Нормально"; levelColor = "#fed700"; }
            else if (percent >= 40) { level = "ЕСТЬ НЕДОЧЕТЫ"; levelColor = "#fe218b"; }
            else { level = "НУЖНО ПОДТЯНУТЬ!!"; levelColor = "red"; }

            // Вывод результатов
            resultsContent.innerHTML = `
                <div class="result-box">
                    <h2 class="level-title">Ваш уровень: <span style="color:${levelColor}">${level}</span></h2>
                    <div class="score-big">${score} из 10 (${percent}%)</div>
                    <hr style="border: 1px dashed #ccc; margin: 20px 0;">
                    <h3>Детальный разбор:</h3>
                    ${detailsHTML}
                </div>
            `;

            // Скрываем форму, показываем результаты
            testForm.style.display = 'none';
            resultsBlock.style.display = 'block';
        });
    }

    // ==========================================
    // БЛОК 2: Кнопка "НА ГЛАВНУЮ"
    // ==========================================
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', function() {
            window.location.href = 'glav.html';
        });
    }

    // ==========================================
    // БЛОК 3: Кнопка перехода к тесту (на index.html)
    // ==========================================
    const testBtn = document.getElementById('probl');
    if (testBtn) {
        testBtn.addEventListener('click', function() {
            window.location.href = 'vxodnoetest.html';
        });
    }
});
// ==========================================
// МОДУЛЬ СЛОВАРНОГО ЗАПАСА
// ==========================================

// Практика 1
const checkPractice1 = document.getElementById('check-practice1');
if (checkPractice1) {
    checkPractice1.addEventListener('click', function() {
        const answers = {
            p1q1: 'A', p1q2: 'B', p1q3: 'B', p1q4: 'C', p1q5: 'A'
        };
        let score = 0;
        
        for (let key in answers) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            if (selected && selected.value === answers[key]) score++;
        }
        
        const resultDiv = document.getElementById('practice1-result');
        const nextBtn = document.getElementById('next-words2');
        
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div class="practice-result">
                <p class="practice-success">✅ Результат: ${score} из 5</p>
                ${score === 5 ? '<p>Отлично! Можно продолжать.</p>' : '<p class="practice-error">Попробуйте ещё раз для лучшего результата.</p>'}
            </div>
        `;
        
        if (score >= 3) nextBtn.disabled = false;
    });
}

// Практика 2
const checkPractice2 = document.getElementById('check-practice2');
if (checkPractice2) {
    checkPractice2.addEventListener('click', function() {
        const answers = {
            p2q1: 'A', p2q2: 'B', p2q3: 'B', p2q4: 'A', p2q5: 'C'
        };
        let score = 0;
        
        for (let key in answers) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            if (selected && selected.value === answers[key]) score++;
        }
        
        const resultDiv = document.getElementById('practice2-result');
        const nextBtn = document.getElementById('next-test');
        
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div class="practice-result">
                <p class="practice-success">✅ Результат: ${score} из 5</p>
                ${score === 5 ? '<p>Отлично! Можно продолжать.</p>' : '<p class="practice-error">Попробуйте ещё раз для лучшего результата.</p>'}
            </div>
        `;
        
        if (score >= 3) nextBtn.disabled = false;
    });
}

// Итоговый тест
const checkVocabTest = document.getElementById('check-vocab-test');
if (checkVocabTest) {
    checkVocabTest.addEventListener('click', function() {
        const answers = {
            vq1: 'A', vq2: 'A', vq3: 'B', vq4: 'B', vq5: 'A',
            vq6: 'A', vq7: 'A', vq8: 'A', vq9: 'A', vq10: 'A'
        };
        let score = 0;
        
        for (let key in answers) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            if (selected && selected.value === answers[key]) score++;
        }
        
        const percent = (score / 10) * 100;
        const resultDiv = document.getElementById('vocab-test-result');
        const backBtn = document.getElementById('back-to-main');
        
        let level = percent >= 80 ? '🏆 Отлично!' : percent >= 60 ? '👍 Хорошо!' : '📚 Повторите слова!';
        
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div class="practice-result">
                <p class="practice-success" style="font-size:32px;">${level}</p>
                <p style="font-size:24px;">Ваш результат: ${score} из 10 (${percent}%)</p>
            </div>
        `;
        
        backBtn.disabled = false;
    });
}