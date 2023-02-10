const { Component, mount, xml, useEnv,reactive, useState } = owl;
var wins = 0;
var losses = 0;
var ties = 0;
class Button extends Component {
    static template = xml`
    <center>
        <button t-on-click="ABC" class="btn btn-primary m-2" id="rock">Rock</button>
        <button t-on-click="ABC" class="btn btn-primary m-2"  id="paper">Paper</button>
        <button t-on-click="ABC" class="btn btn-primary"  id="scissor">Scissor</button>
    </center>
    `;
    
    ABC(ev){
        let value = ev.target.id;
        console.log(value)
        var rand = compute(['rock', 'paper', 'scissor']);
        document.getElementById("print_result").innerHTML = `You choose ${value}, computer choose ${rand}.<br/><br/>`;
    
        if (value == 'rock' && rand == "scissor" ||
            value == "paper" && rand == "rock" ||
            value == "scissor" && rand == "paper") {
            document.getElementById("win").innerHTML = wins += 1;
            document.getElementById("print_result").innerHTML += `You Win`;
    
        } else if (rand == 'rock' && value == "scissor" ||
            rand == "paper" && value == "rock" ||
            rand == "scissor" && value == "paper") {
            document.getElementById("lose").innerHTML = losses += 1;
            document.getElementById("print_result").innerHTML += `Computer Win`;
    
        } else {
            document.getElementById("tie").innerHTML = ties += 1;
            document.getElementById("print_result").innerHTML += `it's a Tie`;
    
        }
    }
}

class Result extends Component {
    static template = xml`
        <div class="row">
            <div class="col-sm-6">
                <div class="h2" id="print_result">Let's Play</div>
            </div>
            <div class="col-sm-6">
                <h3><center>Result</center></h3>    
                <table class="table">
                    <thead>
                        <tr>
                            <td>Win</td>
                            <td>Lose</td>
                            <td>Tie</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="win">0</td>
                            <td id="lose">0</td>
                            <td id="tie">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Button />
    `;
    static components = { Button };
}

class Header extends Component {
    static template = xml`
    <div class="container">
        <div>
            <div class="page-header">
                <center>
                    <h1>Rock, Paper and Scissor</h1>
                </center>
            </div>
        </div>
        <Result />
    </div>
    `;

    static components = { Result };

}

function compute(arr) {
    return arr[Math.floor(Math.random() * 3)];
}


mount(Header, document.body);
