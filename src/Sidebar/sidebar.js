import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import ContainerExampleContainer from '../Readtest/readtest.js';
import Recc from '../Reccomendations/reccomendations.js';
import FormExampleField from '../Readtimeform/readtimeform.js';
import Submitbutton from '../Timesubmit/timesubmit.js';
import ButtonExampleHorizontallyAttached from '../Startstop/startstop.js'

class SidebarLeftOverlay extends Component {

  constructor() {
    super();
    this.state = {clicked: false, inputPanel: <Segment>
    <h1>Reading Test </h1>
    <ContainerExampleContainer>
    </ContainerExampleContainer>
    <ButtonExampleHorizontallyAttached>
    </ButtonExampleHorizontallyAttached>

    <div class="ui hidden divider"></div>

    <FormExampleField>
    </FormExampleField>
    <Submitbutton>
    </Submitbutton>
    </Segment>};
    this.handleItemClick1 = this.handleItemClick1.bind(this);
    this.handleItemClick2 = this.handleItemClick2.bind(this);
    this.handleItemClick3 = this.handleItemClick3.bind(this);
  }

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Home Page' onClick={this.handleItemClick1} />
          <Menu.Item name='Reccomendations' onClick={this.handleItemClick2} />
          <Menu.Item name='Starred' onClick={this.handleItemClick3} />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>

        {this.state.inputPanel}


      </div>
    )
  }
  handleItemClick1() {
    this.setState({clicked: true,inputPanel: 
    <Segment>
      <h1>Reading Test </h1>
    <ContainerExampleContainer>
    </ContainerExampleContainer>
    <ButtonExampleHorizontallyAttached>
    </ButtonExampleHorizontallyAttached>
    <FormExampleField>
    </FormExampleField>
    <Submitbutton>
    </Submitbutton>
    </Segment>});
}
handleItemClick2() {
  this.setState({clicked: true,inputPanel: 
    <Segment>
      <Recc>
      </Recc>
  </Segment>});
}
handleItemClick3() {
  this.setState({clicked: true,inputPanel: 
  <Segment>

  </Segment>});
}
}

export default SidebarLeftOverlay