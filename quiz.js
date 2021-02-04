class Quiz{
    constructor(){}

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant()
            var contestantCountRef = await database.ref('contestantCount').once("value")
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val()
                contestant.getCount()
            }

            question = new Question()
            question.display()
        }
    }

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
           gameState = data.val()
        })
    }

    play(){
        question.hide()

        background("lightblue")
        textSize(15)
        fill("black")
        
        text("The contestants who answered correct are highlighted in green", 100,220)

        textSize(25)
        fill("black")
        text("Results of the Quiz", 340,50)
        Contestant.getContestantInfo()
       
        var displayAnswer = 230

        if(allContestants !== undefined){

            for(var plr in allContestants){
               
                var correctAns = "2"
               

                if(correctAns === allContestants[plr].answer){
                    fill("green")
                }

                else{
                    fill("red")
                }
                
            }
            
                text(allContestants[plr].name + ":" + allContestants[plr].answer, 270,displayAnswer)
                displayAnswer = displayAnswer + 40
            
        }
}

}