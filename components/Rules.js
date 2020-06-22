module.exports=`import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";

const Rules = () => {
  return (
    <Container style={{ marginTop: "100px" }} className="themed-container">
      <ListGroupItemHeading>Basic Intro :</ListGroupItemHeading>
      <ListGroup>
        <ListGroupItem>
          Redux has been linked along with middleware thunk and being persisted
          in local storage named "state"
        </ListGroupItem>
        <ListGroupItem>
          Reactstrap is being used for styling which can be changed based on
          your requirement
        </ListGroupItem>
        <ListGroupItem>
          The components folder contains a collection of UI components like
          button, custom input field, modal, etc that will be shared and used
          across files in the project.
        </ListGroupItem>
        <ListGroupItem>
          The pages folder reflects the routes of the application. Each
          component inside this folder has its own route.
        </ListGroupItem>
        <ListGroupItem>
          The assets folder contains images and css folder should contain css
          files
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default Rules;
`