document.addEventListener('DOMContentLoaded', () => {

    // === 1. ຂໍ້ມູນຈຳລອງ (ຕົວຢ່າງ) ===
    // ທ່ານຄວນໂຫຼດຂໍ້ມູນນີ້ຈາກໄຟລ໌ JSON ແຍກຕ່າງຫາກ ຫຼື API ເພື່ອຄວາມເປັນລະບຽບ
    const appData = {
        governmentSets: {
            set_9: {
                title: "ຄະນະລັດຖະບານ ຊຸດທີ 9",
                period: "ປີ 2021-2026",
                updateDate: "06/06/2025",
                members: [
                    { name: "ທ່ານ ສອນໄຊ ສີພັນດອນ", position: "ນາຍົກລັດຖະມົນຕີ", image: "member_sonxay.jpg" },
                    { name: "ພົນເອກ ຈັນສະໝອນ ຈັນຍາລາດ", position: "ຮອງນາຍົກລັດຖະມົນຕີ, ລັດຖະມົນຕີກະຊວງປ້ອງກັນປະເທດ", image: "member_chansamone.jpg" },
                    { name: "ທ່ານ ກິແກ້ວ ໄຂຄຳພິທູນ", position: "ຮອງນາຍົກລັດຖະມົນຕີ", image: "member_kikeo.jpg" },
                    { name: "ທ່ານ ຈັນສີ ໂພສີຄຳ", position: "ລັດຖະມົນຕີກະຊວງປ້ອງກັນຄວາມສະຫງົບ", image: "member_chansy.jpg" },
                    { name: "ທ່ານ ສະເຫຼີມໄຊ ກົມມະສິດ", position: "ຮອງນາຍົກລັດຖະມົນຕີ, ລັດຖະມົນຕີກະຊວງການຕ່າງປະເທດ", image: "member_salermxay.jpg" },
                    { name: "ທ່ານ ນາງ ໃບຄຳ ຂັດທິຍະ", position: "ລັດຖະມົນຕີກະຊວງແຮງງານ ແລະ ສະຫວັດດີການສັງຄົມ", image: "member_baykham.jpg" },
                    { name: "ທ່ານ ລັດຕະນະມະນີ ຄູນນີວົງ", position: "ລັດຖະມົນຕີກະຊວງຊັບພະຍາກອນທຳມະຊາດ ແລະ ສິ່ງແວດລ້ອມ", image: "member_rattanamany.jpg" },
                    { name: "ທ່ານ ພັນຄຳ ວິພາວັນ", position: "ປະທານປະເທດ (ອາດບໍ່ລວມໃນລັດຖະບານ, ແຕ່ສຳຄັນ)", image: "member_phankham.jpg" },
                    // ເພີ່ມສະມາຊິກຄົນອື່ນໆຈາກຮູບທີ່ໃຫ້ມາ ແລະ ຕຳແໜ່ງຂອງເຂົາເຈົ້າ
                    // ຕົວຢ່າງເພີ່ມເຕີມຈາກຮູບ:
                    { name: "ທ່ານ ປະລິນຍາເອກ ພູທອນ ເມືອງປາກ", position: "ລັດຖະມົນຕີກະຊວງສາທາລະນະສຸກ", image: "member_phouthone.jpg" },
                    { name: "ທ່ານ ສັນຕິພາບ ພົມວິຫານ", position: "ລັດຖະມົນຕີກະຊວງການເງິນ", image: "member_santiphap.jpg" },
                    { name: "ທ່ານ ບຸນໂຈມ ອຸບົນປະເສີດ", position: "ລັດຖະມົນຕີກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ", image: "member_bounjom.jpg" },
                    { name: "ທ່ານ ດາວວົງ ພອນແກ້ວ", position: "ລັດຖະມົນຕີກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ່", image: "member_davong.jpg" },
                    { name: "ທ່ານ ອອນສີ ແສນສຸກ", position: "ລັດຖະມົນຕີກະຊວງກະສິກໍາ ແລະ ປ່າໄມ້", image: "member_onsy.jpg" },
                    { name: "ທ່ານ ເພັດ ພົມພິພັກ", position: "ລັດຖະມົນຕີກະຊວງກະສິກໍາ ແລະ ປ່າໄມ້ (ຜູ້ທີ່ຢູ່ໃນຮູບ)", image: "member_phet.jpg" },
                    { name: "ທ່ານ ຄໍາແພງ ໄຊສົມແພງ", position: "ລັດຖະມົນຕີກະຊວງແຮງງານ ແລະ ສະຫວັດດີການສັງຄົມ (ຜູ້ທີ່ຢູ່ໃນຮູບ)", image: "member_khamphane.jpg" },
                     { name: "ທ່ານ ໂພໄຊ ໄຊຍະສອນ", position: "ລັດຖະມົນຕີກະຊວງສຶກສາທິການ ແລະ ກິລາ", image: "member_phoxay.jpg" },
                    { name: "ທ່ານ ນາງ ສຸວັນເພັງ ບຸບຜານຸວົງ", position: "ລັດຖະມົນຕີ, ຫົວໜ້າຫ້ອງວ່າການສຳນັກງານນາຍົກລັດຖະມົນຕີ", image: "member_souvanpheng.jpg" },
                    { name: "ທ່ານ ອາລຸນໄຊ ສູນນະລາດ", position: "ລັດຖະມົນຕີ, ຫົວໜ້າຫ້ອງວ່າການສຳນັກງານນາຍົກລັດຖະມົນຕີ (ຜູ້ທີ່ຢູ່ໃນຮູບ)", image: "member_alounxay.jpg" },
                    { name: "ທ່ານ ໂອໄດ ພົມມະຈັນ", position: "ລັດຖະມົນຕີ, ຫົວໜ້າຄະນະກຳມາທິການແຜນການ, ການລົງທຶນ ແລະ ການຮ່ວມມື", image: "member_odai.jpg" },
                    { name: "ທ່ານ ສັນຍາ ປຣະເສີດ", position: "ລັດຖະມົນຕີ, ຫົວໜ້າຄະນະກຳມາທິການຄຸ້ມຄອງລັດວິສາຫະກິດ", image: "member_sanya.jpg" },
                    { name: "ທ່ານ ນາງ ສີໄສ ລືເດດມູນສອນ", position: "ລັດຖະມົນຕີກະຊວງການຕ່າງປະເທດ (ຜູ້ທີ່ຢູ່ໃນຮູບ)", image: "member_sisai.jpg" },
                    // ສືບຕໍ່ເພີ່ມຂໍ້ມູນຕາມຮູບ ແລະ ແຫຼ່ງຂໍ້ມູນທີ່ທ່ານມີ
                ]
            },
            set_8: {
                title: "ຄະນະລັດຖະບານ ຊຸດທີ 8",
                period: "ປີ 2016-2021",
                updateDate: "2021",
                members: [
                    { name: "ທ່ານ ທອງລຸນ ສີສຸລິດ", position: "ນາຍົກລັດຖະມົນຕີ (ໃນຊຸດນີ້)", image: "member_thongloun_old.jpg" },
                    // ເພີ່ມສະມາຊິກຊຸດທີ 8
                ]
            }
            // ເພີ່ມຊຸດລັດຖະບານອື່ນໆ
        }
    };

    // === 2. ການຈັດການຂໍ້ມູນລັດຖະບານແຕ່ລະຊຸດ ===
    const govSetSelector = document.getElementById('government-set-selector');
    const setDetailsDiv = document.getElementById('set-details');
    const setTitle = document.getElementById('set-title');
    const setDate = document.getElementById('set-date');
    const setMembersGrid = document.getElementById('set-members-grid');

    govSetSelector.addEventListener('change', (event) => {
        const selectedSetKey = event.target.value;
        if (selectedSetKey && appData.governmentSets[selectedSetKey]) {
            const govSet = appData.governmentSets[selectedSetKey];
            displayGovernmentSetData(govSet);
            setDetailsDiv.style.display = 'block'; // ສະແດງຂໍ້ມູນຊຸດລັດຖະບານ
        } else {
            setDetailsDiv.style.display = 'none'; // ເຊື່ອງ
        }
    });

    function displayGovernmentSetData(govSet) {
        setTitle.textContent = govSet.title;
        setDate.textContent = `(ຂໍ້ມູນລ່າສຸດ: ${govSet.updateDate})`;
        setMembersGrid.innerHTML = ''; // ລຶບຂໍ້ມູນເກົ່າ

        govSet.members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.position}</p>
            `;
            setMembersGrid.appendChild(memberCard);
        });
    }

    // ເລີ່ມຕົ້ນສະແດງຊຸດປັດຈຸບັນເມື່ອໂຫຼດໜ້າ
    displayGovernmentSetData(appData.governmentSets['set_9']);
    setDetailsDiv.style.display = 'block'; // ໃຫ້ມັນສະແດງຕັ້ງແຕ່ເລີ່ມຕົ້ນ

    // === 3. Logic ເກມທົດສອບຄວາມຮູ້ ===
    const quizMemberImg = document.getElementById('quiz-member-img');
    const quizQuestionText = document.getElementById('quiz-question-text');
    const quizOptionsContainer = document.getElementById('quiz-options-container');
    const quizNextBtn = document.getElementById('quiz-next-btn');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizScoreSpan = document.getElementById('quiz-score');
    const quizTotalSpan = document.getElementById('quiz-total');

    let currentQuizQuestionIndex = 0;
    let quizScore = 0;
    let quizQuestions = []; // ຈະຖືກສ້າງ ແລະ ສັບປ່ຽນ

    function initializeQuiz() {
        // ສ້າງຄຳຖາມຈາກຂໍ້ມູນສະມາຊິກລັດຖະບານ (ຈາກຊຸດປັດຈຸບັນເປັນຕົວຢ່າງ)
        quizQuestions = generateQuizQuestions(appData.governmentSets['set_9'].members);
        quizQuestions = shuffleArray(quizQuestions); // ສັບປ່ຽນລໍາດັບຄຳຖາມ
        
        quizTotalSpan.textContent = quizQuestions.length;
        currentQuizQuestionIndex = 0;
        quizScore = 0;
        quizScoreSpan.textContent = quizScore;
        quizFeedback.textContent = '';
        quizNextBtn.textContent = 'ຄຳຖາມຕໍ່ໄປ';
        quizNextBtn.style.display = 'none';
        loadQuizQuestion();

        quizNextBtn.removeEventListener('click', initializeQuiz); // ລຶບ event listener ຫຼິ້ນໃໝ່
        quizNextBtn.addEventListener('click', loadNextQuizQuestion); // ເພີ່ມ event listener ຖາມຕໍ່ໄປ
    }

    function generateQuizQuestions(members) {
        const questions = [];
        members.forEach(correctMember => {
            // ສ້າງຕົວເລືອກຄຳຕອບທີ່ຜິດ (ເອົາຊື່ຄົນອື່ນມາ)
            let incorrectOptions = members.filter(m => m.name !== correctMember.name)
                                        .map(m => m.name);
            incorrectOptions = shuffleArray(incorrectOptions).slice(0, 3); // ເອົາ 3 ຕົວເລືອກຜິດ

            const options = shuffleArray([...incorrectOptions, correctMember.name]);

            questions.push({
                image: correctMember.image,
                question: `ນີ້ແມ່ນຮູບຂອງໃຜ?`,
                options: options,
                answer: correctMember.name
            });
        });
        return questions;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function loadQuizQuestion() {
        if (currentQuizQuestionIndex < quizQuestions.length) {
            const currentQ = quizQuestions[currentQuizQuestionIndex];
            quizMemberImg.src = `images/${currentQ.image}`;
            quizQuestionText.textContent = currentQ.question;
            quizOptionsContainer.innerHTML = '';
            quizFeedback.textContent = '';
            quizNextBtn.style.display = 'none';

            currentQ.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-button');
                button.addEventListener('click', () => selectQuizAnswer(option, currentQ.answer, button));
                quizOptionsContainer.appendChild(button);
            });
        } else {
            endQuiz();
        }
    }

    function selectQuizAnswer(selectedOption, correctAnswer, clickedButton) {
        Array.from(quizOptionsContainer.children).forEach(button => {
            button.disabled = true; // ປິດປຸ່ມທັງໝົດ
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });

        if (selectedOption === correctAnswer) {
            quizScore++;
            quizScoreSpan.textContent = quizScore;
            quizFeedback.textContent = 'ຖືກຕ້ອງ!';
            clickedButton.classList.add('correct');
        } else {
            quizFeedback.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${correctAnswer}"`;
            clickedButton.classList.add('incorrect');
        }
        quizNextBtn.style.display = 'block';
    }

    function loadNextQuizQuestion() {
        currentQuizQuestionIndex++;
        loadQuizQuestion();
    }

    function endQuiz() {
        quizMemberImg.src = ""; // ລຶບຮູບ
        quizQuestionText.textContent = 'ຈົບເກມແລ້ວ!';
        quizOptionsContainer.innerHTML = '';
        quizFeedback.textContent = `ທ່ານໄດ້ຄະແນນ ${quizScore} ຈາກ ${quizQuestions.length} ຄຳຖາມ.`;
        quizNextBtn.textContent = 'ຫຼິ້ນໃໝ່';
        quizNextBtn.style.display = 'block';
        quizNextBtn.removeEventListener('click', loadNextQuizQuestion);
        quizNextBtn.addEventListener('click', initializeQuiz);
    }

    // ເລີ່ມຕົ້ນເກມເມື່ອໜ້າໂຫຼດສຳເລັດ
    initializeQuiz();
});
