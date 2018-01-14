import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button
            style={{ margin: "0 auto", display: "block" }}
            onClick={this.handleOpen}
          >
            <Icon style={{ margin: "0 auto", display: "block" }} size="large" name="info" />
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="info circle" content="Weather card" />
        <Modal.Content>
          <h3>This card will fetch weather data from Weather API and it will display the correct weather in real time.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
