const { Component, mount, xml, useEnv, reactive, useState } = owl;

class Result extends Component {
    static template = xml`
        <div class="row">
            <div class="col-sm-6">
                <div class="h2"><t t-esc="this.props.state.statement"/><div><t t-esc="this.props.state.result"/></div></div>
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
                            <td><t t-esc="this.props.state.player"/></td>
                            <td><t t-esc="this.props.state.computer"/></td>
                            <td><t t-esc="this.props.state.tie"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    static props = ["state"]
}

class Button extends Component {
    static template = xml`
    <center>
        <button t-on-click="ABC" class="btn btn-primary m-2" id="rock">Rock</button>
        <button t-on-click="ABC" class="btn btn-primary m-2"  id="paper">Paper</button>
        <button t-on-click="ABC" class="btn btn-primary"  id="scissor">Scissor</button>
    </center>
    `;
    ABC(ev) {
        let value = ev.target.id;
        var rand = compute(['rock', 'paper', 'scissor']);
        this.props.state.playerChoice = value
        this.props.state.computerChoice = rand

        this.props.state.statement = `You choose ${value} computer choose ${rand}.`;

        if (value == 'rock' && rand == "scissor" || value == "paper" && rand == "rock" || value == "scissor" && rand == "paper") 
        {
            this.props.state.player += 1;
            this.props.state.result = `You Win`;
           
        } 
        else if (rand == 'rock' && value == "scissor" || rand == "paper" && value == "rock" || rand == "scissor" && value == "paper") 
        {
            this.props.state.computer += 1;
            this.props.state.result = `Computer Win`;

        } 
        else
        {
            this.props.state.tie += 1;
            this.props.state.result = `it's a Tie`;
        }
    }
    static props = ["state"]
}


class Header extends Component {
    static template = xml`
        <div class="page-header">
            <center>
                <h1>Rock, Paper and Scissor</h1>
            </center>
        </div>
        `;
}

class Root extends Component {
    static template = xml`
    <div class="container">
        <Header/>
        <Result state="this.state" />
        <Button state="this.state" />
    </div>
    `;

    setup() {
        this.state = useState({
            statement: "",
            player: 0,
            computer: 0,
            tie:0,
            result: "Let's Play",
        });
    }

    static components = { Header, Result, Button };
}

function compute(arr) {
    return arr[Math.floor(Math.random() * 3)];
}

mount(Root, document.body);
