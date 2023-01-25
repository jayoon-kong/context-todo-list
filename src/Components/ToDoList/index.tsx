import React, { useContext } from 'react';
import Styled from 'styled-components';
import ToDoItem from 'Components/ToDoItem';
import { ToDoListContext } from 'Contexts/ToDoList';

const Container = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

const ToDoList = () => {
  const { toDoList, deleteToDo } = useContext(ToDoListContext);
  
  return (
    <Container data-testid="toDoList">
      {toDoList.map((item, index) => (
        <ToDoItem key={item} label={item} onDelete={() => deleteToDo(index)} />
      ))}
    </Container>
  );
};

export default ToDoList;