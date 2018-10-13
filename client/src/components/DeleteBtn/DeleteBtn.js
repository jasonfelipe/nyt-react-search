import React from "react";

const DeleteBtn = props => (
    <button onClick={props.handleDelete} type='button' className="btn btn-danger" {...props}>
        ✗ DELETE
    </button>
);

export default DeleteBtn;