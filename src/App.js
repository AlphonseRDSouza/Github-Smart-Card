import React from "react";
import SearchProfile from "./components/SearchProfile";
import Profile from "./components/Profile";

const API = "https://api.github.com/users";
const userName = "alphonserdsouza"; //Intial value can be changed
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: userName,
      name: "",
      avatar: "",
      location: "",
      repos: "",
      bio: "",
      gists: "",
      followers: "",
      following: "",
      homeUrl: "",
      notFound: ""
    };
  }

  fetchProfile(username) {
    let url = `${API}/${username}`;
    // let urlString = API + username;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          bio: data.bio,
          gists: data.public_gists,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        });
      })
      .catch(error => console.log("Oops! . There Is A Problem"));
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div>
        <section id="card">
          <SearchProfile fetchProfile={this.fetchProfile.bind(this)} />
          <Profile data={this.state} />
        </section>
        {/* <span className="dsouza">
          GitHub Card With ReactJs - Created By{" "}
          <a
            href="https://twitter.com/theham3d"
            target="_blank"
            title="Hamed Esmaili"
          >
            Hamed Esmaili
          </a>
        </span> */}
      </div>
    );
  }
}

export default App;
