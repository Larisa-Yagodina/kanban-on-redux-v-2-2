import React, {useState} from 'react';
import {connect} from "react-redux";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";




function Task(props) {

    const {task} = props;
    const [openModal, setOpenModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)


    return (
       <div>
           <Card>
               <CardHeader>{task.status}</CardHeader>
               <CardBody>
                   <CardTitle><b> {task.name}</b></CardTitle>
                   <CardText>{task.description}</CardText>
               </CardBody>
               <CardFooter>
                   <Button disabled={props.columns.indexOf(task.status) === 0} onClick={() => props.moveCard(task.id, 'left')} outline color="info">←</Button>
                   <Button disabled={props.columns.indexOf(task.status) === props.columns.length - 1} onClick={() => props.moveCard(task.id, 'right')} outline color="info">→</Button>
                   <hr />
                   <Button onClick={() => setOpenEditModal(!openEditModal)} outline color="success">Edit</Button>
                   { openEditModal &&
                       <EditModal
                           task={task}
                           openEditModal={openEditModal}
                           setOpenEditModal={setOpenEditModal}
                       />
                   }
                   <Button onClick={() => setOpenModal(!openModal)} outline color="danger">Delete</Button>
                   {openModal &&
                      <DeleteModal
                            task={task}
                            openModal={openModal}
                            setOpenModal={setOpenModal}/>
                   }
               </CardFooter>
           </Card>

       </div>
    )
}


const mapStateToProps = (state) => ({
    tasks: state.tasks,
    columns: state.statuses,
});

const mapDispatchToProps = (dispatch) => ({
    moveCard: (taskId, direction) => dispatch({ type: 'MOVE_CARD', payload: {
        taskId: taskId,
        direction: direction,
    } }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Task);


