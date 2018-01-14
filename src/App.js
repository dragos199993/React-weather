import React, { Component } from "react";
import { Card, Form, Button, Message, Input, Icon } from "semantic-ui-react";
import DisplayWeather from "./components/DisplayWeather";
import InformationModal from "./components/InformationModal";
import { config } from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      temp: 0,
      input: ""
    };
  }

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  updateRequest = () => {
    let api = config.base + this.state.location + config.units + config.key;
    this.setState({
      location: this.state.input
    });
    fetch(api)
      .then(res => res.json())
      .then(data => {
        this.setState({
          location: data.name,
          temp: data.main.temp
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { location, temp } = this.state;
    return (
      <div>
        <Card centered style={{ marginTop: 150, padding: 20, minHeight: 250 }}>
          <Icon
            name="cloud"
            size="huge"
            style={{ display: "block", margin: "0 auto" }}
          />
          <Form onSubmit={this.updateRequest}>
            <Form.Field>
              <label>City: </label>
              <Input onChange={this.onChange} type="text" />
            </Form.Field>
            <Button fluid onClick={this.updateRequest}>
              Update
            </Button>
          </Form>
          {!location ? (
            <Message info>
              Please enter on the upper field the name of the city.
            </Message>
          ) : (
            <DisplayWeather location={location} temp={temp} />
          )}
        </Card>
        <InformationModal />
      </div>
    );
  }
}

export default App;
