import React from "react";

function AddToDoItem({title,status,id}) {
  return <h3>{title} {" -----> "}{status?"COMPLETED":"NOT COMPLETED"}</h3>;
}

export default AddToDoItem;
