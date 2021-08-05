import "./styles.css";
import React from "react";
import Home from "./home";
import Nav from "./NavTo";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter as Rt, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    loading: true,
    person: null,
    person1: null,
    meanings0: null,
    meanings1: null,
    meanings2: null
  };

  async componentDidMount() {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data[0].phonetics,
      meanings1: data[0].meanings[0],
      person1: data[0].word,
      meanings2: data[0].meanings[1],
      meanings0: data[0].meanings[2],
      loading: false
    });
  }

  render() {
    return (
      <div>
        {/* navigation */}
        <Rt>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Rt>
        <div>
          {/* api fetching and display */}
          {this.state.loading || !this.state.person ? (
            <div>loading...</div>
          ) : (
            <div>
              <div>
                <h1>word:</h1>
                {this.state.person1}
              </div>

              <h1>phonetics:</h1>
              <div>
                <p>
                  1)
                  <u>text:</u>
                </p>
                {this.state.person[0].text}
              </div>
              <div>
                <p>
                  <u>audio:</u>
                </p>
                {this.state.person[0].audio}
              </div>
              <div>
                <p>
                  2)
                  <u>text:</u>
                </p>
                {this.state.person[1].text}
              </div>
              <div>
                <p>
                  <u>audio:</u>
                </p>
                {this.state.person[1].audio}
              </div>

              <h1>meanings</h1>

              <p>----------------------------------------</p>
              <p>1</p>
              <div>
                <p>
                  <u>part of speech</u>
                </p>
                {this.state.meanings1.partOfSpeech}
              </div>
              <div>
                <p>
                  <u>definition</u>
                </p>
                {this.state.meanings1.definitions[0].definition}
              </div>
              <div>
                <p>
                  <u>example</u>
                </p>
                {this.state.meanings1.definitions[0].example}
              </div>
              <div>
                <p>
                  <u>synonym</u>
                </p>
                {this.state.meanings1.definitions[0].synonyms.join(" * ")}
              </div>
              <p>----------------------------------------</p>
              <p>2</p>
              <div>
                <p>
                  <u>part of speech</u>
                </p>
                {this.state.meanings2.partOfSpeech}
              </div>
              <div>
                <p>
                  <u>definition</u>
                </p>
                {this.state.meanings2.definitions[0].definition}
              </div>
              <div>
                <p>
                  <u>example</u>
                </p>
                {this.state.meanings2.definitions[0].example}
              </div>
              <p>----------------------------------------</p>
              <p>3</p>
              <div>
                <p>
                  <u>part of speech</u>
                </p>
                {this.state.meanings0.partOfSpeech}
              </div>
              <div>
                <p>
                  <u>definition</u>
                </p>
                {this.state.meanings0.definitions[0].definition}
              </div>
              <div>
                <p>
                  <u>example</u>
                </p>
                {this.state.meanings0.definitions[0].example}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
