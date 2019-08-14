import React from "react";
class SearchProfile extends React.Component {
  render() {
    return (
      <div className="search--box">
        {/*  <div className="searchbox"> */}
        <form onSubmit={this.handleForm.bind(this)}>
          {/* <label>
            <input
              type="search"
              ref="username"
              placeholder="Type Username + Enter"
            />
          </label> */}
          <input
            ref="username"
            className="searchbox__input"
            type="search"
            placeholder="type username..."
          />

          <input
            type="submit"
            className="searchbox__button"
            value="Search GitHub User"
          />
        </form>
      </div>
    );
  }
  handleForm(e) {
    e.preventDefault();
    // let username = this.refs.username.getDOMNode().value;
    let username = this.refs.username.value;
    this.props.fetchProfile(username);
    // this.refs.username.getDOMNode().value = "";
    this.refs.username.value = "";
  }
}
export default SearchProfile;
