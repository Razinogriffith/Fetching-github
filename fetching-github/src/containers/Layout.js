import React from 'react'
import {
  Container,
  Header,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import { Link} from "react-router-dom";

const Layout = (props) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item  header>
          Fetching GitHub
        </Menu.Item>
        <Link to ='/'><Menu.Item >Home</Menu.Item></Link>
        <Link to ='/projects'> <Menu.Item >Projects</Menu.Item></Link>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Simple Project</Header>

        {props.children}
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <List horizontal inverted divided link size='small'>
          <List.Item  href='#'>
            Site Map
          </List.Item>
          <List.Item  href='#'>
            Contact Us
          </List.Item>
          <List.Item  href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item  href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default Layout