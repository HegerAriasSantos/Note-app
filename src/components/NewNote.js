import React from "react";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: null,
    };
  }
  Close() {
    this.setState({
      focus: false,
    });
  }

  handleClick = () => {
    this.setState({
      focus: true,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit} className="Form">
          {this.state.focus && (
            <div id="close" className="Form__close">
              <button onClick={(e) => this.Close(e)} className="btn">
                Close
              </button>
            </div>
          )}

          {this.state.focus === true && (
            <div className="Form__section Form__section-title ">
              <textarea
                // disabled="false"
                autoComplete="off"
                className="input"
                onChange={this.props.onChange}
                name="title"
                value={this.props.formValues.title}
                placeholder="Title..."
                type="text"
              />
            </div>
          )}
          <div className=" Form__section Form__section-description">
            <textarea
              className="input"
              autoComplete="off"
              onChange={this.props.onChange}
              name="description"
              value={this.props.formValues.description}
              onClick={this.handleClick}
              placeholder="Take a note..."
              type="text"
            />
          </div>
          {this.state.focus === true && (
            <div className="Form__section--icons">
              <button>Create</button>
            </div>
          )}
        </form>
        <button className="DeleteAll" onClick={this.props.onClick}>
          Delete all
        </button>
      </>
    );
  }
}

export default NewNote;
