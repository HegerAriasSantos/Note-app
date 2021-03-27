import Delete from "../img/icons/Delete.svg";
import Modify from "../img/icons/Modify.svg";
import React, { Component } from "react";
class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Edit: null,
      NewNote: {
        title: this.props.Notes[this.props.id].title,
        description: this.props.Notes[this.props.id].description,
      },
    };
  }

  handleSubmit() {}
  handleChange = (e) => {
    this.setState({
      NewNote: { ...this.state.NewNote, [e.target.name]: e.target.value },
    });
  };

  handleClick = (i, title, description) => {
    setTimeout(() => {
      this.props.Edit(i, title, description);
    });
    this.setState({
      Edit: null,
    });
  };
  Edit = () => {
    if (this.state.Edit) {
      return (
        <form className="Edit" onSubmit={this.handleSubmit}>
          <textarea
            name="title"
            onChange={this.handleChange}
            className="Edit__title"
            placeholder="Title..."
            value={this.state.NewNote.title}
          ></textarea>
          <textarea
            name="description"
            placeholder="Decription"
            onChange={this.handleChange}
            value={this.state.NewNote.description}
            className="Edit__description"
          ></textarea>
          <div className="Edit__btn">
            <button
              className="Edit__btn-b"
              onClick={() =>
                this.handleClick(
                  this.props.id,
                  this.state.NewNote.title,
                  this.state.NewNote.description
                )
              }
            >
              Confirm
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <>
          <div className="Note__title">{this.props.title}</div>
          <div className="Note__description">{this.props.description}</div>
          <div className="Note__buttons">
            <div
              onClick={() => this.props.Delete(this.props.id)}
              className="button-delete"
            >
              <img src={Delete} alt="delete" />
            </div>
            <div
              onClick={() => {
                this.setState({
                  Edit: true,
                });
              }}
              className="button-modify"
            >
              <img src={Modify} alt="modify" />
            </div>
          </div>
        </>
      );
    }
  };

  render() {
    return <div className="Note">{this.Edit()}</div>;
  }
}

export default NewItem;
