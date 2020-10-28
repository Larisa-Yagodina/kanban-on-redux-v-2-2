import React from 'react';
import { Col } from "reactstrap";
import {connect} from "react-redux";
import Task from "./Task";

 function Column(props) {
    return (
        <Col>
            <h2> {props.column} </h2>
            {props.tasks.filter(el => el.status === props.column).map(el => <Task
                task={el}
                taskId={el.id}
                key={el.id}
            />)}
        </Col>
    )
}





const mapStateToProps = (state) => ({
    tasks: state.tasks,
    columns: state.statuses,
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({ type: 'TODO_ADD', payload: todo })
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);


