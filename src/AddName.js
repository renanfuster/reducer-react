import React, { Component } from "react";
import { connect } from "react-redux";
import { addName, clear } from "./Actions";

class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: ""
    };
    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
    this.clear = this.clear.bind(this);
  }

  onChange(e) {
    this.setState({ newName: e.target.value });
  }

  add() {
    this.props.addName(this.state.newName);
  }

  clear() {
    this.props.clear();
  }

  render() {
    const { newName } = this.state;
    return (
      <div className="addnewname__container">
        <p>Add new</p>
        <div>
          <input type="text" value={newName} onChange={this.onChange} />
          <button type="button" name="send" id="send" onClick={this.add}>
            Add
          </button>
          <button type="button" name="send" id="send" onClick={this.clear}>
            Clear
          </button>
        </div>
        <div className="addnewname__container-details">
          {this.props.name.map(e => (
            <div>{e}</div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProsps = state => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = {
  addName,
  clear
};

export default AddName;
