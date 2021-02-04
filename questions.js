class Question{
    constructor(){
        this.answer = createInput("Answer")
        this.name = createInput("Name")
        
        this.title = createElement("h1")
        this.question = createElement("h2")
        this.button = createButton("Submit")

        this.option1 = createElement("h3")
        this.option2 = createElement("h3")

    }
    hide(){
        this.name.hide()
        this.button.hide()
        this.answer.hide()
        this.option1.hide()
        this.option2.hide()
        this.title.hide()
        this.button.hide()
        this.question.hide()
        
    }

    display(){

        this.title.html("MyQuiz Game")
        this.title.position(350,0)


        this.question.html("Question - What starts and ends with the letter 'E', but only has one letter? ")
        this.question.position(150,80)

        this.option1.html("1: Everyone ")
        this.option1.position(150,130)

        this.option2.html("2: Envelope ")
        this.option2.position(150,150)

        this.answer.position(150,230)

        this.name.position(300,230)

        this.button.position(500,300)

        this.button.mousePressed(()=>{

            this.name.hide()
            this.answer.hide()
            this.button.hide()

            contestant.name = this.name.value()
            contestant.answer = this.answer.value()
            contestantCount +=1
            contestant.index = contestantCount
            contestant.update()
            contestant.updateCount(contestantCount)
        })
    }
}