import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";

const CreditCardBox = styled.div`
  display: flex;
  justify-content: flex-start;
  form {
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
    width: 300px;
    label {
      color: #ccc;
    }
    input {
      margin-top: 1rem;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      input:first-child {
        width: 175px;
        margin-right: 25px;
      }
      input:last-child {
        width: 100px;
      }
    }
  }
`;

export default class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputFocus(e) {
    this.setState({ focus: e.target.name });
  }

  handleInputChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <CreditCardBox>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          ></Cards>
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <label for="number">eg... 35,36,49,53,65...</label>
            <input
              name="name"
              placeholder="Owner Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <div>
              <input
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
          </form>
        </CreditCardBox>
      </>
    );
  }
}
