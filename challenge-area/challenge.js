//Good luck! Maybe start by making that fetch request ;)
fetch('https://opentdb.com/api.php?amount=10&category=18').then(
    (response) => response.json().then((data) => {
        originalJson = data.results;
        console.log("original json");
        console.log(originalJson);

        //question 1
        function replaceQuotes() {
            const changedJson = originalJson.map((value) => {
                const mutatedValue = Object.assign({}, value);
                mutatedValue.question = mutatedValue.question.replace(/&quot;/g, '"');
                return mutatedValue;
            });
            return changedJson;
        }

        const changedJson = replaceQuotes();
        console.log(changedJson);

        //question 2
        function filterEasy(json) {
            return json.filter((value) => value.difficulty == 'easy');
        }

        const filteredJson = filterEasy(changedJson);
        console.log(filteredJson);

        //question 3
        function sortByDifficulty(json) {
            const difficultyMap = {
                easy: 0,
                medium: 1,
                hard: 2
            };

            return [...json].sort((first, second) =>
                difficultyMap[first.difficulty] - difficultyMap[second.difficulty]
            );
        }

        console.log(sortByDifficulty(changedJson));

        //question 4;
        function countDifficulty(json) {
            const difficultyCount = {
                easy: 0,
                medium: 0,
                hard: 0
            };

            json.forEach((value) => {
                switch (value.difficulty) {
                    case 'easy':
                        difficultyCount.easy++;
                        break;
                    case 'medium':
                        difficultyCount.medium++;
                        break;
                    case 'hard':
                        difficultyCount.hard++;
                        break;
                }
            });

            return difficultyCount;
        }
        console.log(countDifficulty(changedJson));


        //question 5;
        function isAllScienceComputers(json) {
            return json.every((value) => value.category == 'Science: Computers');
        }
        console.log(isAllScienceComputers(changedJson));

        //bonus
        function sortByType(json) {
            let sortedQuestions = {
                multipleChoice: Array(),
                bool: Array()
            }

            json.forEach((value) => {
                if (value.difficulty == 'medium') {
                    value.type == 'multiple' ? sortedQuestions.multipleChoice.push(value) : sortedQuestions.bool.push(value);
                }
            });
            return sortedQuestions;
        }

        console.log(sortByType(changedJson));
        console.log(changedJson);
        console.log(originalJson);
    })

);