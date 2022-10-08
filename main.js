const questions = [
    {
        question:"Who is your girlfriend",
        a:'Fatimah',
        b:"Suraju",
        c:'Rekiah',
        d:'Merlin',
        answer:'Fatimah',
    },
    {
        question:"How old are you?",
        a:16,
        b:78,
        c:45,
        d:89,
        answer:45,
    },
    {
        question:"What is the name of your school?",
        a:'Uni-Ilorin',
        b:"UniLag",
        c:'Lautech',
        d:'Osu',
        answer:'UniLag',
    },
    {
        question:"When did Nigeria get independent",
        a:'August 21 1990',
        b:"August 23 1991",
        c:'October 21 1960',
        d:'October 1 1960',
        answer:'October 1 1960',
    },
    {
        question:"The capital of Nigeria is?",
        a:'Lagos',
        b:"Abuja",
        c:'Ibadan',
        d:'Kaduna',
        answer:'Abuja',
    },
];

let question = document.getElementById('question')
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let d = document.getElementById('d')
let currentQuiz =0
let btn = document.getElementById('next')
let message =  document.querySelector('.message')
let score =0

// let updateQuiz =questions[currentQuiz]
// console.log(typeof(updateQuiz))

function loadResult(){
    let radio = document.querySelectorAll('input[name="question"]:checked')
    if(radio.value === questions[currentQuiz].answer){
        console.log(radio.value)
        score++;
    }
}

const loadQuestion =()=>{
question.innerHTML= questions[currentQuiz].question
a.innerHTML= questions[currentQuiz].a
b.innerHTML= questions[currentQuiz].b
c.innerHTML= questions[currentQuiz].c
d.innerHTML= questions[currentQuiz].d
}

loadQuestion()


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    currentQuiz++
    loadQuestion();
    loadResult()
   if(currentQuiz === questions.length -1){
    btn.innerHTML= "Submit Question"
    btn.style.background='red'
    alert('This is the last question')
    btn.disabled =true


    if(currentQuiz === questions.length -1){
      let display = document.querySelector('.quiz-container')
      message.style.display = 'block'
      display.style.display = 'none'
      btn.style.display='none'
    setTimeout(()=>{
        // loadResult()
        message.innerHTML = score

    }, 5000)
    }
   }
})
