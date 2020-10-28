import React from 'react'
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function DeleteModal (props) {

    const {task, openModal, setOpenModal} = props;

    const toggle = () => {
        setOpenModal(!openModal)
    }

    const deleteCard = () => {
        props.deleteCardById(task.id)
        setOpenModal(!openModal)
    }


    return (
        <div>
            <Modal isOpen={openModal}
                   toggle={toggle} >
                <ModalHeader toggle={toggle}>Delete this task?</ModalHeader>
                <ModalBody>
                    {task.name} <br />
                    {task.description}
                </ModalBody>
                <ModalFooter>
                    <Button outline color="danger" onClick={deleteCard}>Delete</Button>{' '}
                    <Button outline color="success" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    deleteCardById: (taskId) => dispatch({type: 'DELETE_CARD', payload: taskId})
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);

