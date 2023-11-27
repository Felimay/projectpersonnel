// CODE ajoutée par moi.
function refresh() {
  
  location.reload(true);
}
// 


class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    
    new Question("Quelle est la Capitale de l'Autriche", ["Saint-Victoire", "Venise", "Vienne", "Varsovie"], "Vienne"),
    new Question("Laquel de ces villes ne se trouvent pas en France", ["Strasbourg", "Aix-La-Chapelle", "Mulhouse", "Die"], "Aix-La-Chapelle"),
    new Question("Quelle est le language de programation le plus populiare?", ["Python", "Javascript", "Assembly", "C++", "C#"], "Python"),
    new Question("A qui appartient la société automible Tesla?", ["Nicholas Tesla", "Mark Zuckerberg", "Elon Musk", "Jill Gates"], "Elon Musk"),
    new Question("Quelle est le nouveau nom pour Asbestos?", ["Val-Des-Sources", "Amiante Mines", "Val-Jalbert", "Vallée Des Sources"], "Val-Des-Sources"),
    new Question("Quelle secteur est souvent en grêve?", ["Les ouvrier", "Les travileur Hydro-Québec", "Le secteur publique", "Le secteur privée", "les étudiant" , "Les utlisateur de PopOs"], "Le secteur publique")
  ];
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        // ajout code
        if (this.questions[0].isCorrectAnswer(answer)) {
        this.score = this.score + 2
        }
        if (this.questions[1].isCorrectAnswer(answer)) {
          this.score = this.score + 1
        }
        else {
        this.score++;
        }
        //
      }
      else {
        alert("Mauvaise Réponse")
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
        <button onclick="refresh()" id="refresh" class="refresh">
        <p>Ressayez</p>
      </button>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // affichage choix + prise en compte du choix
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();


