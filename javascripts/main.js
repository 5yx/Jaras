$(document).ready(function(){
let total_games = 0 
let rps2num = {'r':0,'p':1,'s':2}
let scoreDictSim1 = {'rr': [0, 0], 'rp': [-1, 1], 'rs': [1,-1],  
			     'pr': [1, -1], 'pp': [0, 0], 'ps': [-1,1],
			     'sr': [-1, 1], 'sp': [1,-1], 'ss': [0, 0]}
	
				 
let scoreDictSim2 = {'rr': [-0.1, -0.1], 'rp': [-1, 1], 'rs': [1,-1],  
			         'pr': [1, -1], 'pp': [-0.1, -0.1], 'ps': [-1,1],
			         'sr': [-1, 1], 'sp': [1,-1], 'ss': [-0.1, -0.1]}

let playDict = {'r' : "✊",
				'p' : "🖐️", 
			    's' : "✌️"}

let stratEmoji = {"1,0,0" 				: "🧒",
				"0,1,0" 				: "👩",
				   "0,0,1"				: "👨‍🦳",
				   "0.333,0.333,0.334"  :"🧔",
				   "0.5,0.25,0.25"		: "👳‍♂️",
				   "0.25,0.25,0.5"		: "🧕",
				   "0.25,0.5,0.25"		: "👴" }

function TwoAgentRound(agent1,agent2,sim){
	let scoreDict;
	if (sim){
		scoreDict = scoreDictSim1
	}else{
		scoreDict = scoreDictSim2
	}
	let play = agent1.playStrategy() + agent2.playStrategy()
	let score = scoreDict[play]

	agent1.wins[rps2num[play[0]]] += score[0] //max(0,score)
	agent1.score_current += score[0]

	agent2.wins[rps2num[play[1]]] += score[1] //max(0,score)
	agent2.score_current += score[1]
	total_games++;
}


class Agent{ 
	constructor(id,x,y,strategy,fixedStrategy,canvas,sim,res){
		this.x = x
		this.y = y
		this.id = id 
		this.emojiArray = ["✊","🖐️","✌️"]
		this.wins = Array(3).fill(0).map((x)=>canvas.floor(canvas.random(2)+1))
		// strategy is an array of the probabilities of rock paper scissors 
		this.p = strategy
        this.strategy = strategy + ''
        this.fixedStrategy = fixedStrategy
		this.canvas = canvas
		this.score = 0 
		this.score_current = 0
		this.playedWith = []
		this.sim1 = sim == 1
		this.res = res
		this.roundPlay = "  "
		this.person = stratEmoji[this.strategy] !=undefined ? stratEmoji[this.strategy]: "🤖"
	}
	argMax(array) {
			return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
		}
		

	playStrategy(){
		// let explore = random()
		let play; 
        let r 

		r = this.canvas.random()
		if (r < this.p[0]){
			play = 'r'
		}else if (r < this.p[0]+this.p[1]){
			play = 'p'
		}else{
			play = 's'
		}
		this.roundPlay = playDict[play] 
		return play 
	}
	color(){
		// color the cells based on the probabilities of rock paper scissors
		// rock: red 
		// paper: green 
		// scissors: blue 

		return this.canvas.color(this.canvas.floor(255*this.p[0]),
					 this.canvas.floor(255*this.p[1]),
					 this.canvas.floor(255*this.p[2]))
	}
	draw(){
					
		// p5.noFill()
		// this.canvas.fill(this.color())
		// p5.stroke(5)
		// p5.rect(i*res,j*res,res-1,res-1)
		
		if (this.x <=0){
			
			this.canvas.textSize(20)
			this.canvas.text(this.canvas.round(this.score).toString(),
						     (this.x-1)*this.res,
						 	this.y*this.res+this.res/2)
			
			this.canvas.textSize(25)
		
			this.canvas.text(this.person,
						 (this.x)*this.res,
						 this.y*this.res+this.res/2)
			
			this.canvas.text(this.roundPlay,
						    (this.x+1)*this.res,
						 	this.y*this.res+this.res/2)

		}else{
			
			this.canvas.textSize(25)
			this.canvas.text(this.roundPlay,
						    (this.x+1)*this.res,
						 	this.y*this.res+this.res/2)
			
			this.canvas.text(this.person,
						 (this.x+2)*this.res,
						 this.y*this.res+this.res/2)
			
			this.canvas.textSize(20)
			this.canvas.text(this.canvas.round(this.score).toString(),
							 (this.x+3)*this.res,
						 	this.y*this.res+this.res/2)
			
			
		
		}
		
		// this.canvas.textSize(25)
		// this.canvas.text(text,
		// 				 this.x*this.res+this.res/2,
		// 				 this.y*this.res+this.res/2)
		// this.canvas.textSize(15)
		// this.canvas.fill('Black')
		// this.canvas.text(this.canvas.int(this.score).toString(),
		// 				 this.x*this.res+this.res/2-10,
		// 				 this.y*this.res + this.res/2)
		// this.canvas.textAlign(this.canvas.LEFT,this.canvas.CENTER)
	}
	play(grid){
		// let play,score
		let played
		for (let ii = -1; ii < 2; ii++) {
			for(let jj = -1; jj < 2; jj++){
				//if (abs(ii) + abs(jj) == 1){
				if (this.canvas.abs(ii) == 1 && jj ==0){
					var i = this.x + ii
					var j = this.y + jj
					try{

						played = JSON.stringify(grid[i][j].playedWith).includes(JSON.stringify([this.x,this.y]))
						
						if (!played){
							TwoAgentRound(grid[this.x][this.y],grid[i][j],this.sim1)
							this.playedWith.push([grid[i][j].x,grid[i][j].y]) 
						}
					}
					catch(err){
						// console.log(err,this.x,this.y)
						continue
					}
				}
			}
		}	
		if(this.sim1){
			this.score += this.score_current
		}else{

			this.score = this.score_current
		}

		// this.score += this.score_current
		// console.log(this.x,this.y,this.score)
	}
	playNeighbor(agent){
		return this.playStrategy() + agent.playStrategy()
	}

	afterPlay(grid){
        let r
        if (this.fixedStrategy){
        }else{
			// if (!this.sim1){
			// 	console.log(this.x,this.y,this.wins,this.p,this.score,this.fixedStrategy)
			// }
			this.wins = this.wins.map((x) => this.canvas.max(0,x))
			r = this.wins.reduce((y,x) => y+x)
			if (r<0.1){
				this.wins = Array(3).fill(0).map((x)=>this.canvas.floor(this.canvas.random(5)))
			}
			this.renormalize()
			
		}
		/// zero out the playedWith array 
		this.playedWith = [] 
		this.score_current = 0 
	}

	afterAfterPlay(grid){
		return 	
	}
	renormalize(){
		let s = this.wins.reduce((s,x) => s+x)
		this.p = this.wins.map((x) => x/s)
	}

}
    class sim0{
        constructor(cW,cH,div,sim){
            new p5(function(p5){
    
            
            let stratEmojiChar = ["🧒", "👩","👨‍🦳","🧔","👳‍♂️","🧕","👴"]
    
    
            let counter = 0 
            let cols = 2
            let rows = 7*7
            let res = 40
            let resume = 0;
            let record = [] 
            let fixedStrategies = [[1,0,0],
                                   [0,1,0],
                                   [0,0,1],
                                   [0.333,0.333,0.334],
                                   [0.5,0.25,0.25],
                                   [0.25,0.25,0.5],	
                                   [0.25,0.5,0.25]]
            let counterInput;
            
            let strategyScore;
            let roundScoreByStrategy
            let counterMax = 1000
            
            
            let canvas;
            let div2;
            let grid;	
            
            function init(){
                var grid = new Array(cols)
                
                for(let i = 0; i < cols; i++){
                    grid[i] = new Array(rows)
                }
                
                let id_counter = 0
                let r;
                let fixed;
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
                        
                        fixed = i< cols 
                        if (fixed){
                            // r = fixedStrategies[j% 7]//random(fixedStrategies.slice(0,6))
                            
                        }else{
                            r = Array(3).fill(0).map((x) => random())
                            s = r.reduce((y,x) => y+x)
                            r = r.map((x)=>x/s)
                        }
                        
                        // r = fixedStrategies[5]
                        // r = fixedStrategies.slice(4,7)[(int(j/3)+i*(j%3))%3] 
                        r = fixedStrategies[(p5.int(j/7) + i*(j%7)) %7] 
                        
                        grid[i][j] = new Agent(id_counter,i,j,r,fixed,p5,sim,res)
                        id_counter +=1
                    }
                }
                let strategyScore = {}
                let roundScoreByStrategy = {}
                let strat;
                for(let i = 0; i<fixedStrategies.length; i++){
                    strat = fixedStrategies[i]+''
                    strategyScore[strat] = []
                    roundScoreByStrategy[strat] = 0
                }
                //console.log(roundScoreByStrategy)
                return grid
            }
            
            function drawGrid(){
                p5.textSize(12)
                p5.text('iteration: ' + counter.toString(),10,20)
                p5.translate(cW/3,20)
                p5.stroke('Black')
                let emj;
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
                        grid[i][j].draw()		
                    }
                }
            }
            function Play(){
                let agent;
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
                        agent = grid[i][j]
                        agent.play(grid)
                    }
                }
            }
            
            function afterPlay(){
                let agent;
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
                        agent = grid[i][j]
                        agent.afterPlay(grid)
                    }
                }
            }
            
            function afterAfterPlay(){
                let strategy_score_average = 0
                for (let i = 0; i < rows; i+=7) {
                    strategy_score_average = 0 
                    for (let ii = 0; ii < 7; ii++) {
                        strategy_score_average += grid[0][i + ii].score
                    }
                    strategy_score_average /=7
                    strategy_score_average = p5.round(strategy_score_average,2)
                    
                    // p5.fill(grid[0][i+6].color())
                    // p5.rect(220,(i+2.5)*res,res*2,res*2)
                    p5.textSize(30)
                    p5.text(stratEmojiChar[p5.int(i/7)],220,(i+2.5)*res)
                    p5.fill('Black')
                    p5.text(strategy_score_average.toString(),235,(i+3.5)*res )
                    p5.textAlign(p5.LEFT, p5.CENTER)
                }
            }
            
            function resetSketch(){
                grid = init()
                record = []
                counter = 0
                counterMax = 1000 //p5.int(counterInput.value())
            }
                
            function resumeFlip(){
                    resume = 1 - resume; 
            }
    
    
            p5.setup =function() {
                div2 = document.getElementById('div2'); 
                p5.createCanvas(cW, cH);
                //canvas.parent('div2')
                // createCanvas(windowWidth,res*rows+500);
                // put setup code here
                let button = p5.createButton("reset sketch");
                button.mousePressed(resetSketch);
                button.position(cW-200,20)
                button.size(100,20)
                button//.parent('div2')
                
                // // counterInput = p5.createInput(1000)
                // // counterInput.position(cW-80,20)
                // // counterInput.size(50,20)
                
                let resumeButton = p5.createButton('resume')
                resumeButton.mousePressed(resumeFlip)
                resumeButton.size(150,20)
                resumeButton.position(500,50)
    
    
                p5.background("#ffef9a");
                grid = init()
                drawGrid()
                // frameRate(10)
            }
            
            p5.draw = function(){
                // put drawing code here
                if ((counter < counterMax && resume)){
                    counter++;
                    p5.background("#ffef9a");
                    // p5.background(230,230,250);
                    // p5.background("#ffd700")
                    // background(0,255,150)
                    drawGrid()
                    Play()
                    afterPlay()
                    afterAfterPlay()
                    // console.log('finished the round!')
                }
            }
    
        } , div);
        }
    }
    
    class sim1{
        constructor(cW,cH,fixedStrategy,div,sim){
            new p5(function(p5){
            let resume = 0;
            let counter = 0 
            let cols = 2
            let rows = 7
            let res = 40
            let grid
            let fixedStrategies = [[1,0,0],
                                [0,1,0],
                                [0,0,1],
                                [0.333,0.333,0.334],
                                [0.5,0.25,0.25],
                                [0.25,0.25,0.5],	
                                [0.25,0.5,0.25]]
    
    
            let strategyScore;
            let roundScoreByStrategy
    
            function init(){
                var grid = new Array(cols)
    
                for(let i = 0; i < cols; i++){
                    grid[i] = new Array(rows)
                }
                
                let id_counter = 0
                let r,s;
                let fixed
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
    
                        fixed = i==0
                        if (fixedStrategy && fixed){
                            r = fixedStrategies[j% 7]//random(fixedStrategies.slice(0,6))
                            
                        }else{
                            r = Array(3).fill(0).map((x) => p5.random())
                            s = r.reduce((y,x) => y+x)
                            r = r.map((x)=>x/s)
                            fixed = false
                        }
                        
                        // r = fixedStrategies[5]
                        // r = fixedStrategies.slice(4,7)[(int(j/3)+i*(j%3))%3] 
                        // r = fixedStrategies[(int(j/7) + i*(j%7)) %7] 
                        grid[i][j] = new Agent(id_counter,i,j,r,fixed,p5,sim,res)
                        id_counter +=1
                    }
                }
                strategyScore = {}
                roundScoreByStrategy = {}
                let strat;
                for(let i = 0; i<fixedStrategies.length; i++){
                    strat = fixedStrategies[i]+''
                    strategyScore[strat] = []
                    roundScoreByStrategy[strat] = 0
                }
                //console.log(roundScoreByStrategy)
                return grid
            }
    
            function drawGrid(){
                p5.textSize(15)
                p5.text('iteration: ' + counter.toString(),10,20)
                p5.translate(cW/3,cH/4)
                p5.stroke('Black')
                let emj;
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
                        grid[i][j].draw()
                    }
                }
            }
            function Play(){
                let agent;
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
                        agent = grid[i][j]
                        agent.play(grid)
                    }
                }
            }
    
            function afterPlay(){
                let agent
                for(let i = 0; i < cols; i++){
                    for(let j = 0; j < rows; j++){
                        agent = grid[i][j]
                        agent.afterPlay(grid)
                    }
                }
            }
    
            function afterAfterPlay(){	
            }
    
            function resetSketch(){
                grid = init()
                counter = 0
            }
        
            function resumeFlip(){
                    resume = 1 - resume; 
            }
    
    
            p5.setup = function() {
                p5.createCanvas(cW,cH)//res*rows+500);
                // put setup code hee
                let button = p5.createButton("reset sketch");
                button.mousePressed(resetSketch);
                button.position(cW-200,20)
                
                let resumeButton = p5.createButton('resume')
                resumeButton.mousePressed(resumeFlip)
                resumeButton.size(150,20)
                resumeButton.position(500,50)
    
    
                p5.background("#ffef9a");
                grid = init()
                drawGrid()
    
                // frameRate(10)
            }
    
            p5.draw = function(){
                // put drawing code here
                if (counter < 1000 && resume){
                    counter++;
                    p5.background("#ffef9a");
                    drawGrid()
                    Play()
                    afterPlay()
                    afterAfterPlay()
                }
            }
        },div);
        }
    }


    class AC{ 
        constructor(id,x,y,canvas){
            this.id = id 
            this.x = x 
            this.y = y 
            this.ac_temp = 24;
            this.radius = 0
            this.maxRad = 400
            this.t = 0 
            this.justChanged = true 
            this.counter = 0; 
            this.canvas = canvas;
        }
        draw(){
            this.counter++; 
            if (this.counter % 200 == 0){
                this.justChanged = false; 
                this.counter = 0
            }
            // this.canvas.fill(255,140,0,300)
            // this.canvas.stroke(2)
            // this.canvas.rect(this.x-3,this.y-25,50,50)
            this.canvas.textSize(35)
            this.canvas.text("🌡️",this.x+10,this.y-10)
            this.canvas.fill('Black')
            this.canvas.textSize(15)
            this.canvas.text(this.ac_temp.toString(),this.x+20,this.y+15)
            this.radius += 2
            this.radius = this.canvas.min(this.maxRad,this.radius)
            this.canvas.fill(255*(this.t),0,255*(1-this.t),50)
            this.canvas.circle(this.x+24,this.y,this.radius)
            
        }
        getDist(agent){
            let dist = this.canvas.sq(this.x - agent.x) + this.canvas.sq(this.y - agent.y)
            return this.canvas.sqrt(dist)
        }
        withinRadius(agent){
            return this.getDist(agent) < this.radius
        }
        changeTemp(t){
            if(t==0){
                return 
            }
            if(!this.justChanged){
                this.ac_temp +=t
                this.t = t 
                this.radius = 0
                this.justChanged = true
                this.ac_temp = this.canvas.max(18,this.ac_temp)
                this.ac_temp = this.canvas.min(28,this.ac_temp)
            }
        }
        
    }

    class Worker { 
        constructor(id,
                    x,y,
                    name,
                    temp_tolerance,
                    prob,
                    absent,
                    canvas){
            this.x = x
            this.y = y 
            this.id = id
            this.name = name 
            this.temp_tolerance = temp_tolerance
            this.p = prob
            this.absent = absent
            this.temp = 40 
            this.canvas = canvas
            this.justChanged = 0 
            this.canChange = 1
            this.justChangedCounter = 0
            this.canChangeCounter = 0
            this.changeCounter = 0
            this.status = this.absent ? "🚶":"👨‍💼"
            this.x_prev = 0 
            this.y_prev = 0 
            this.vx = this.canvas.random() - 0.5
            this.vy = this.canvas.random() - 0.5
        }
    
        color(){
            let c;
            if(this.absent){
                c = this.canvas.color(220,20,60)
            }else if(this.justChanged){
                c = this.canvas.color('Yellow')    
                this.justChanged = 0
            }else if (this.temp < this.temp_tolerance[0]){
                c = this.canvas.color('Blue')
            }else if (this.temp > this.temp_tolerance[1]){
                c = this.canvas.color('Red')
            }else{
                c = this.canvas.color('Green')
            }
            return c
        }
     
        draw(){
            // this.canvas.fill(this.color())
            // this.canvas.stroke(2)
            // this.canvas.circle(this.x,this.y,40)
            let text = this.name 
            if(!this.absent){   
                 this.canvas.text(this.canvas.round(this.temp,1).toString(),this.x-5,this.y+20)
            }
    
            this.canvas.textSize(25)
            this.canvas.text(this.status,this.x-10,this.y)
            this.canvas.fill('Black')
            this.canvas.textSize(15)
            // this.canvas.text(this.name + ' ' + this.canvas.round(this.temp,1).toString(),this.x-2,this.y-25)
            this.canvas.text(text,this.x-5,this.y-30)
                
        }
        updateTemp(temp){
            if(!this.absent){
                this.temp = this.temp*0.99 + 0.01*temp  
                // this.temp = this.canvas.round(this.temp,2)
            }
        }
        play(){
            let setTemp = 0 
            this.canChangeCounter++;
            if(this.absent){
                setTemp = 0
                this.status = '🚶'
            }else if (!this.canChange){
                setTemp = 0
                
            }
            else{
                if (this.temp < this.temp_tolerance[0]){
                    setTemp =  this.canvas.random() < this.p ? 1:0;  
                    this.status = '🥶'
                }else if (this.temp > this.temp_tolerance[1]){
                    setTemp = this.canvas.random() < this.p ? -1:0; 
                    this.status = '🥵'
                }else{
                    setTemp = 0
                    this.status = "😋"
                }
                if(setTemp != 0){
                    this.justChanged = 1 
                    this.canChange = 0 
                    this.canChangeCounter = 0 
                }
                
            }
            if (this.canChangeCounter > 500){
                    this.canChange = 1   
                }
    
            if (this.absent){
                if (this.canvas.random() < 0.01){
               
                
                // this.new_vx = this.canvas.random(-1,1)
                // this.new_vy = this.canvas.random(-1,1)
                // let angle = this.new_vx*this.vx + this.new_vy*this.vy
                // angle = angle/this.canvas.sqrt((this.new_vx*this.new_vx+this.new_vy*this.new_vy)*(this.vx*this.vx+this.vy*this.vy))
                // if (this.canvas.abs(angle) <= 0.2){
                //     this.vx = this.new_vx
                //     this.vy = this.new_vy
                // }
                
                this.x +=this.canvas.random(-1,1)
                this.y +=this.canvas.random(-1,1)
                
                this.vx = (this.x - this.x_prev )
                this.vy = (this.y - this.y_prev )
                
                }else{ 
                    this.x += this.vx*0.4
                    this.y += this.vy*0.4
                }
                this.x_prev = this.x 
                this.y_prev = this.y
    
    
            }
            return setTemp
        }
        vote(temp){
            console.log('getting to vote function')
            let vote;
            if (temp > 0){
                if (this.temp < this.temp_tolerance[0]){
                    vote = 1;
                }else if(this.temp > this.temp_tolerance[1]){
                    vote = 0; 
                }else{
                    vote = 'maybe'
                }
            }else if(temp < 0){
                if (this.temp < this.temp_tolerance[0]){
                    vote = 0;
                }else if(this.temp > this.temp_tolerance[1]){
                    vote = 1; 
                }else{
                    vote = 'maybe'
                }
            }else{
                vote = 0 
            }
            if(vote =='maybe'){
                vote = 0;//this.canvas.random() < this.p? 1:0; 
            }
            return vote; 
        }
    }
    

    class acSim{
	constructor(cW,cH,div){
		new p5(function(p5){
	
			let resume = 0
			let ac;
			let agents_array;
			let voteSystem = 0;
			let votesNeeded; 
			let num_acs = 1
			let agents_loc = [[100,90],  [150,90],
						[100,160], [150,160],
						[300,90],  [350,90],
						[300,160], [350,160]
						]

			let num_agents = agents_loc.length
			// let names = Array(8).fill().map((x,i)=>i+65)
			// 					.map((x)=>String.fromCharCode(x))
			
			let names = ["محمد","علي","لينه","حنان","ماجد","عادل","احمد","حسن"]
			let inputArray
			let agentInputs
			let checkbox;
			let counter = 0
			let voteInput; 
			function initAgents(){
				let inputs;
				let lowTol;
				let highTol;
				let prob;
				let absent; 
				for(let i=0; i < num_agents; i++){
					inputs = inputArray[i]
					lowTol = p5.int(inputs[0].value()) - 0.1
					highTol = p5.int(inputs[1].value()) + 0.1
					prob = p5.float(inputs[2].value())
					absent = inputs[3].checked()
					agents_array[i] = new Worker(i,
												agents_loc[i][0],
												agents_loc[i][1],
												names[i],
												[lowTol,highTol],
												prob,absent,p5)
				}
				ac = new AC(0,200,125,p5)

			}

			function init(){

				// for each agent, create a 
				inputArray = new Array(names.length)
				for (let i = 0;  i< inputArray.length; i++) {
					agentInputs = new Array(4)
					agentInputs[0] = p5.createInput(p5.floor(p5.random(18,24)))
					agentInputs[1] = p5.createInput(p5.floor(p5.random(20,25)))
					agentInputs[2] = p5.createInput(p5.round(p5.random(),3))
					agentInputs[3]  = p5.createCheckbox('', false);
					
					agentInputs[0].size(40)
					agentInputs[1].size(40)
					agentInputs[2].size(40)
					agentInputs[3].size(40)

					agentInputs[0].position(500, 50 + 30*i)
					agentInputs[1].position(550, 50 + 30*i)
					agentInputs[2].position(600, 50 + 30*i)
					agentInputs[3].position(650, 50 + 30*i)
					inputArray[i] = agentInputs
				}
				let button = p5.createButton("reset sketch");
				button.mousePressed(resetSketch);
				button.position(500,300)
				button.size(90,25)
				
				let button2 = p5.createButton("vote");
				button2.mousePressed(vote);
				button2.position(600,300)
				button2.size(40,25)

        		let resumeButton = p5.createButton('resume')
				resumeButton.mousePressed(resumeFlip)
				resumeButton.size(150,20)
				resumeButton.position(500,350)

				voteInput = p5.createInput(4)
				voteInput.size(30,20)
				voteInput.position(655,300)
				votesNeeded =voteInput.value()
				agents_array = new Array(num_agents)

				initAgents()
			}
			function resumeFlip(){
				resume = 1 - resume; 
			}

			function vote(){
				voteSystem = 1 - voteSystem; 
				drawAgents()
			}

			function resetSketch(){
				votesNeeded = voteInput.value()
				console.log(votesNeeded)
				counter = 0
				initAgents()
				drawAgents()
			}
			function drawAgents(){
				p5.background("#ffef9a");
				p5.fill('Black')
				p5.text('iteration: ' + counter.toString(),10,20)

				p5.textSize(12)
				for (let i = 0; i < names.length; i++) {
					p5.fill('Black')
					p5.text(names[i],470,65+30*i)
				}

				['low tol.','high tol.','prob.','absent'].forEach((t,x)=>{
					p5.text(t,500 + 50*x,40)
				})
				p5.textSize(15)
				if(voteSystem){
					p5.text('ON',610,340)
				}else{
					p5.text('OFF',610,340)
				}
				p5.translate(0,100)
				// rotate(45)
				// translate(100,-200)
				for (let i = 0; i < num_agents; i++) {
					agents_array[i].draw()
				}
				ac.draw()
			}

			function play(){
				// update temperatures
				let setTemp = 0; 
				agents_array.forEach(agent => {
					if(ac.withinRadius(agent)){
						agent.updateTemp(ac.ac_temp)
					}
				});
				
				
				agents_array.forEach(agent => {
					let vote_tally = 0; 
					setTemp = agent.play()
					
					if (setTemp != 0){
						if(voteSystem){
							agents_array.forEach(agent =>{
								vote_tally += agent.vote(setTemp)
							})
						
							if (vote_tally > votesNeeded){	
								ac.changeTemp(setTemp)
							}
						}else{
							ac.changeTemp(setTemp)
						}
					}
				});


			}

			function afterPlay(){

			}

			function afterAfterPlay(){
			}

			p5.setup = function() {
				p5.createCanvas(cW, cH);
				p5.background("#ffef9a");
				p5.fill('Black')
				p5.text('iteration: ' + counter.toString(),10,20)
				
				// put setup code here
				init()
				// p5.frameRate(2)
				drawAgents()
			}
			function sim(){
				drawAgents()


			}
			p5.draw = function() {
				if(resume){
					if (counter < 5000){
						counter++;
						sim()
						play()
					}
				}
			}
		},div);
	}
}

let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let div4 = document.getElementById('div4')

new sim0(div1.offsetWidth,div1.offsetHeight,'div1',1)
new sim1(div2.offsetWidth,div2.offsetHeight,true,'div2',1)
new sim1(div3.offsetWidth,div3.offsetHeight,false,'div3',0)
new acSim(div4.offsetWidth,div4.offsetHeight,'div4')

})
