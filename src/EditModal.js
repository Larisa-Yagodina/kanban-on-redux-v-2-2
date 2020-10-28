import React, {useState} from 'react'
import {connect} from "react-redux";
import {Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Label from "reactstrap/es/Label";


function EditModal (props) {

    const {statuses, setOpenEditModal, openEditModal, editCardById, task} = props;

    const toggle = () => {
        setOpenEditModal(!openEditModal)
    }

    const [taskName, setTaskName] = useState(task.name)
    const [taskDescription, setTaskDescription] = useState(task.description)
    const [taskStatus, setTaskStatus] = useState(task.status)

    const editCard = () => {
        editCardById(taskName, taskDescription, taskStatus, task.id)
        setOpenEditModal(!openEditModal)
    }

    return (
        <div>
            <Modal isOpen={openEditModal}
                   toggle={toggle} >
                <ModalHeader toggle={toggle}>Create new task:</ModalHeader>
                <ModalBody>

                    <Label>Name: </Label>
                    <Input value={taskName} onChange={(e) => setTaskName(e.target.value)} />

                    <Label>Description: </Label>
                     <Input value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />

                    <Label>Status: </Label>
                    <Input value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}  type="select">
                        {statuses.map(el => <option value={el}> { el } </option>)}
                    </Input>


                </ModalBody>
                <ModalFooter>
                    <Button outline color="success" onClick={editCard}>SAVE</Button>{' '}
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
    editCardById: (taskName, taskDescription, taskStatus, taskId) => dispatch({type: 'EDIT_CARD', payload:
            {name: taskName,
             description: taskDescription,
             status: taskStatus,
             id: taskId,
            }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);

