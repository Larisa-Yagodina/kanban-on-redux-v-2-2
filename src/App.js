import React, {useState} from 'react'
import './App.css';
import Column from "./Column";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row} from "reactstrap";
import {Button} from "reactstrap";
import CreateModal from "./CreateModal";


function App(props) {

    const [openCreateModal, setOpenCreateModal] = useState(false)

    return (
    <Container>
     <h1> Kanban bord (redux) V2-2 </h1>
        <hr />
        <Button onClick={() => setOpenCreateModal(!openCreateModal)} outline color="info"> Create Card </Button>
        {openCreateModal &&
          <CreateModal setOpenCreateModal={setOpenCreateModal} openCreateModal={openCreateModal}/>
        }

        <hr />
         <Row>
        {props.columns.map(el => <Column column={el} key={el}/> )}
         </Row>
    </Container>
  );
}



const mapStateToProps = (state) => ({
    tasks: state.tasks,
    columns: state.statuses,
});

const mapDispatchToProps = (dispatch) => ({
    createCard: (todo) => dispatch({ type: 'TODO_ADD', payload: todo })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);