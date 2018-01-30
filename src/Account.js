import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 1000.0
    }
  }
  handleButtonClick(e, operator) {
    // It is good practice to still prevent default behavior
    e.preventDefault();
    // set a local variable to the amount entered in the text box.
    let amount = Number(this.inputBox.value);
    !isNaN(amount) ? amount = Math.round(parseFloat(this.inputBox.value) * 100)/100 : amount = 0;
    // set a local variable to the new balance based off of the original balance + amount
    let newBalance = this.state.balance
    switch (operator) {
      case "Deposit":
        newBalance += amount;
        break;
      case "Withdraw":
        newBalance -= amount;
        break;        
      default:
    }
    // set the balance to the newBalance using the setState method (necessary)
    this.setState({
      balance: newBalance
    })
    // empty out the text box in this component
    this.inputBox.value = '';
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <div>
          <input type="button" value="Deposit" onClick={(e) => this.handleButtonClick(e, "Deposit")} />
          <input type="button" value="Withdraw" onClick={(e) => this.handleButtonClick(e, "Withdraw")} />
          <input type="button" value="Transfer" onClick={(e) => console.log()} />
        </div>
      </div>
    )
  }
}
