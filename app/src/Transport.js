import React from 'react';

class Transport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ' ',
      sum: 0,
    };

    console.log(this.props.basePrice);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState(({ sum }) => ({
      sum: 0
    }));
   
    for (let i = 0; i < this.state.value ; i++) { 

      if (i < 10) {
        this.setState(({ sum }) => ({
          sum: sum + this.props.basePrice - 4
        }));
      }
      else if (i >= 10 && i < 20) {
        this.setState(({ sum }) => ({
          sum: sum + this.props.basePrice - 5
        }));
      }
      else if (i >= 20 && i < 30) {
        this.setState(({ sum }) => ({
          sum: sum + this.props.basePrice - 6
        }));
      }
      else if (i >= 30 && i < 40) {
        this.setState(({ sum }) => ({
          sum: sum + this.props.basePrice - 7
        }));
      }
      else if (i >= 40) {
        this.setState(({ sum }) => ({
          sum: sum + this.props.basePrice - 8
        }));
      }
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.typeOfTransport + ": "}
          <input type="number" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          <p>{this.state.sum}</p>
        </label>
      </form>
    );
  }
}

export default Transport;
