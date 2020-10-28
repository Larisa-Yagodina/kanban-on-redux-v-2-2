import React, {useState} from 'react'
import {connect} from "react-redux";
import {Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Label from "reactstrap/es/Label";


function CreateModal (props) {

    const {statuses, openCreateModal, setOpenCreateModal, createCard} = props;

    const toggle = () => {
        setOpenCreateModal(!openCreateModal)
    }

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskStatus, setTaskStatus] = useState('todo')

    const createNewCard = () => {
        createCard(taskName, taskDescription, taskStatus)
        setOpenCreateModal(!openCreateModal)
    }



    return (
        <div>
            <Modal isOpen={openCreateModal}
                   toggle={toggle} >
                <ModalHeader toggle={toggle}>Create new task:</ModalHeader>
                <ModalBody>

                    <Label>Name: </Label>
                    <Input value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder='name of task'/>

                    <Label>Description: </Label>
                     <Input value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}  placeholder='description of task'/>

                    <Label>Status: </Label>
                    <Input value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}  type="select">
                        {statuses.map(el => <option value={el}> { el } </option>)}
                    </Input>


                </ModalBody>
                <ModalFooter>
                    <Button outline color="success" onClick={createNewCard}>SAVE</Button>{' '}
                    <Button outline color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    statuses: state.statuses
});

const mapDispatchToProps = (dispatch) => ({
    createCard: (taskName, taskDescription, taskStatus) => dispatch({type: 'CREATE_CARD', payload:
            {name: taskName,
             description: taskDescription,
             status: taskStatus,
             id: Math.random(),
            }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);

