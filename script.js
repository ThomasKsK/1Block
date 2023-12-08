//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "Est-ce que le changement climatique est réel?",
        choices: ["Oui, mais c'est un phénomène naturel","Non, c'est une invention des scientifiques","Oui, et il est principalement dû aux activités humaines","Non, il n'y a pas suffisamment de preuves"],
        answer: 3

    },

    {
        question: "Quels sont les impacts du changement climatique ?",
        choices: ["Augmentation du niveau de la mer","Amélioration des conditions météorologiques","Diminution des émissions de gaz à effet de serre","Aucun impact sur la biodiversité"],
        answer: 1

    },
    {
        question: "Qu'est-ce que l'empreinte écologique mesure ?",
        choices: ["La taille des animaux dans un écosystème","L'impact environnemental des activités humaines","Le nombre d'espèces en voie de disparition","1La qualité de l'air dans une région"],
        answer: 2

    },
    {
        question: "Quel est le processus naturel qui élimine le dioxyde de carbone de l’atmosphère ?",
        choices: ["Photosynthèse","Respiration cellulaire","Combustion","Oxydation"],
        answer: 1

    },
    {/*5*/
        question: "Quelle est la principale source d'énergie renouvelable utilisée pour la production d’électricité ?",
        choices: ["Charbon","Pétrole","Énergie solaire","Gaz naturel"],
        answer: 2

    },
    {
        question: "Quel est le rôle des zones humides dans la préservation de l’environnement ?",
        choices: ["Elles n'ont aucun rôle particulier","Elles filtrent l'eau et préviennent les inondations","Elles accélèrent l'érosion des sols","Elles réduisent la biodiversité"],
        answer: 2

    },
    {
        question: "Qu'est-ce que la biomimétisme ?",
        choices: ["L'étude des fossiles","L'imitation des modèles et des systèmes de la nature pour résoudre des problèmes humains","Web L'élimination des espèces animales","La destruction des écosystèmes naturels"],
        answer: 2

    },
    {
        question: "Quel est l'effet de serre ? ?",
        choices: ["Une méthode pour augmenter la température globale","Un processus naturel qui retient la chaleur dans l'atmosphère","Une technologie pour refroidir la planète","Une barrière contre le rayonnement solaire"],
        answer: 2

    },
    {
        question: "Qu'est-ce que l'effet néfaste de l'acidification des océans sur les écosystèmes marins ?",
        choices: ["Favorise la croissance des coraux","Aucun impact sur les poissons","Endommage les coquilles des organismes marins","Améliore la biodiversité marine"],
        answer: 3

    },
    {/*10*/
        question: "Qu'est-ce que le développement durable ?",
        choices: ["L'utilisation illimitée des ressources naturelle","La satisfaction des besoins présents sans compromettre ceux des générations futures","L'épuisement rapide des ressources","La croissance économique à tout prix"],
        answer: 1
    
    }
                
];


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";

shuffle(HTMLquestions);

document.querySelector(".choose-lang").addEventListener("click", function () {
    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

    // Masquer la sélection initiale
    document.querySelector(".choose-lang").style.display = "none";
    document.getElementById("language").style.display = "none"

    // Afficher le quiz
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];
    }
});

var quiz = document.querySelector(".quiz");

document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    var selectedOption = document.querySelector('input[name="options"]:checked');
    var correctOption = window[lang][countQues].choices[window[lang][countQues].answer-1];

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";

        document.getElementById("correct-answer").textContent = "Bonne réponse !";
        document.getElementById("feedback").style.display = "block"; // Montrez la feedback box

        quiz.style.backgroundImage = "url('forest.jpg')";

    }else{
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";

        document.getElementById("correct-answer").textContent = "La bonne réponse était : " + correctOption;
        document.getElementById("feedback").style.display = "block"; // Montrez la feedback box

        quiz.style.backgroundImage = "url('fire_forest.jpg')";

    };

    // Cacher la question actuelle et les options
    document.querySelector(".choice").style.display = "none";
    document.querySelector(".question").style.display = "none";
    document.querySelector(".submit-answer").style.display = "none";
});

document.getElementById("next-question").addEventListener("click", function(){
    quiz.style.backgroundImage = "";

    // Affichez la question actuelle et les options
    document.querySelector(".choice").style.display = "block";
    document.querySelector(".question").style.display = "block";
    document.querySelector(".submit-answer").style.display = "inline-block";
  
    // Cacher la feedback box
    document.getElementById("feedback").style.display = "none";

    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    }; /*For loop Closed*/ 

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/