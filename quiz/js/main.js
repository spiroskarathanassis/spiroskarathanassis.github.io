'use strict';
const questions = questionQuiz.questions; 	// data of JSON file 

const questionNumber = document.getElementById('questionNumber');
const title = document.getElementById('title');
const image = document.getElementById('image');
const message = document.getElementById('statusMessage');
const answerContainer = document.getElementById('answers');
const nextButton = document.getElementById('nextButton');

let playerPoints = 0, 
	totalPoints = 0,
	currentQuestion = 0, 
	selectedAnswers = 0; 
let type, possibleAnswers, questionMessage;
let saveAnswers = [];
let correctAnswers, corrects, questionPoints;

const displayResults = playerResults => {
	const dataResults = resultsQuiz.results;
	questionNumber.remove();
	
	for (let i=0; i<3; i++) {
		if ((playerResults >= dataResults[i].minpoints) && (playerResults <= dataResults[i].maxpoints)) {
			title.textContent = dataResults[i].title;
			title.style.cssText = "text-align: center; font-family: fantasy";
			image.src = dataResults[i].img;
			message.style.display = "block";
			message.textContent = dataResults[i].message;
			answerContainer.textContent = "Your score is " + playerResults + "%";
			answerContainer.style.cssText = "display: block; color: chocolate; font-size: 0.8em; text-align: center";
		}
	}
}

const stopTime = () => {
	const timeStop = setTimeout( () => {
		/* ----- Check if Questions finished ----- */
		if (currentQuestion == (questions.length - 1)) {
			let results = Math.floor( (playerPoints / totalPoints) * 100 );
			displayResults(results);
		} else {		
			$('#answers').find('button').remove();
			currentQuestion++;
			setNextQuestion();
		}
	}, 3000);
}

const displayCorrects = () => {
	message.style.display = "block";
	message.textContent = questionMessage;
	
	/* ------------- Coloring Correct Answers ------------- */
	if (questionMessage == "Wrong Answer!") {
		for (let i=0; i<possibleAnswers.length; i++) {
			const answer = document.getElementById('answer' + (i+1));

			if (type == "mutiplechoice-multiple") {
				for (let j=0; j<corrects; j++) {
					if(correctAnswers[j] == possibleAnswers[i]) {
						answer.style.backgroundColor = "green";
					}
				}
			} else {
				if (correctAnswers == possibleAnswers[i]) {
					answer.style.backgroundColor = "green";
				}
			}
		}
	}

}

const setQuestionFinished = () => {
	nextButton.setAttribute('disabled', true);
	/* ------- Check if Answers match the corrects ------- */
	questionMessage = "Wrong Answer!";

	if (type == "mutiplechoice-multiple") {
		let correctAll = 0;
		if (selectedAnswers == corrects) {
			for (let i=0; i<corrects; i++) {
				for (let j=0; j<saveAnswers.length; j++) {
					if (saveAnswers[j] == correctAnswers[i]) {
						correctAll++;
					}
				}
			}
		}
		
		if (correctAll == corrects) {
			questionMessage = "Correct Answer.";
			playerPoints += questionPoints;
		}
	} else {
		if (saveAnswers[0] == correctAnswers) {
			playerPoints += questionPoints; 
			questionMessage = "Correct Answer.";
		}
	}
	
	selectedAnswers = 0;
	saveAnswers = [];
	totalPoints += questionPoints;
	displayCorrects();
	stopTime();
}

function compareAnswers() {
	const currentElement = document.getElementById(this.id);
	const answer = this.value;
	nextButton.removeAttribute('disabled');
		
	if (type == "mutiplechoice-multiple") {
		const index = saveAnswers.indexOf(possibleAnswers[answer-1]); 
		/* ---------- Check if answer already exists ---------- */
		if (index > -1) {
			saveAnswers.splice(index, 1);
			currentElement.style.backgroundColor = "#4c8acf";	
			selectedAnswers--;
		} else {
			saveAnswers[selectedAnswers] = possibleAnswers[answer-1];
			currentElement.style.backgroundColor = "#b9bdff";	
			selectedAnswers++;
		}
		
		saveAnswers = saveAnswers.filter(element => element != null);
		if (selectedAnswers === 0) {
			nextButton.setAttribute('disabled', true);
		}
	} else {
		if (selectedAnswers != 0) {
			let previous = document.getElementsByClassName("active");
			previous[0].className = previous[0].className.replace(" active", "");
		}
		
		currentElement.style.backgroundColor = "";	
		this.className += " active";
		saveAnswers[0] = possibleAnswers[answer-1];
		selectedAnswers++;
	}
}

/* ------------- Appear Question, Image and Answers to Player ------------- */
const display = () => {
	questionNumber.textContent = "Question " + questions[currentQuestion].q_id;
	title.textContent = questions[currentQuestion].title;
	image.src = questions[currentQuestion].img;

	type = questions[currentQuestion].question_type;	
	possibleAnswers = [];
	let caption = [];
	let answersLength;

	if (type == "truefalse") {
		answersLength = 2;
		caption[0] = "True";
		caption[1] = "False";
		possibleAnswers[0] = true;
		possibleAnswers[1] = false;
	} else {
		answersLength = questions[currentQuestion].possible_answers.length;
	}
	if (type == "mutiplechoice-multiple") {
		$('#title').append(" <b>*</b>");
		title.setAttribute('title', 'multiple choice');
	}

	for (let i=0; i<answersLength; i++) {
		if(type != "truefalse") {
			caption[i] = questions[currentQuestion].possible_answers[i].caption;
			possibleAnswers[i] = questions[currentQuestion].possible_answers[i].a_id;
		}
		
		const answer =  document.createElement('button');
		answer.className = 'answer-btn btn';
		answer.id = 'answer' + (i+1);
		answer.value = i+1;
		answer.textContent = caption[i];
		answerContainer.appendChild(answer);
	}	
	
	return answersLength;
}

const setNextQuestion = () => {		
	correctAnswers = questions[currentQuestion].correct_answer;
	corrects = questions[currentQuestion].correct_answer.length;
	questionPoints = questions[currentQuestion].points;

	$('#answers').find('button').removeAttr('disabled');
	nextButton.setAttribute('disabled', true);
	message.style.display = "none";

	const answersLength = display();
	for (let i=0; i<answersLength; i++) {
		document.getElementById('answer' + (i+1)).addEventListener(
			"click", 
			compareAnswers
		);			
	}

	nextButton.addEventListener('click', setQuestionFinished);
}
			
setNextQuestion();
