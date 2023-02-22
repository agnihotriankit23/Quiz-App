/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.getElementById('quiz-form')
const answers = Array.from(document.querySelectorAll('.answer'))
const questionItems = document.querySelectorAll('.question-item')
const alert = document.getElementById('alert')




// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener('submit', e =>{
//    1. Prevent the default behaviour
      e.preventDefault()

      //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
      questionItems.forEach(ques=>{
        ques.classList.add('incorrect')
        ques.classList.remove('correct')
      })


//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
      const checkedAnswers = answers.filter(answer => answer.checked)
      //console.log(checkedAnswers);
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
      checkedAnswers.forEach(ans => {
        const isCorrectAns = ans.value === "true"

        const questionItem = ans.closest('.question-item')

        if(isCorrectAns){
          //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.

          questionItem.classList.add('correct')
          questionItem.classList.remove("incorrect")
        }else{
          //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
          questionItem.classList.add('incorrect')
          questionItem.classList.remove("correct")
        }
  })
  //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

  let flag = true
  const allAnswered = checkedAnswers.length === questionItems.length
        checkedAnswers.forEach(ans=>{
          if(ans.value === "false"){
            flag = false
          }
        })

        if(flag === true && allAnswered){
          alert.classList.add('active')
          setTimeout(()=>{
            alert.classList.remove('active')
          },1000)
        }
})
 