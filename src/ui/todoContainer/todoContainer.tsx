import styled from '@emotion/styled';
import { useBloCState } from 'poc-core-system';
import React  from 'react';
import { AddForm } from '../addForm/addForm';
import { Todos } from '../todos/todos';
import { Todo } from '../../domain';
import { TodoProvider } from '../../infrastructure';

const TodoLayout = styled.div`
  padding: 30px 20px;
  display: grid;
  gap: 1rem;
  max-width: 50rem;
  margin: 0 auto;
`;

export const TodoContainer = (): JSX.Element => {
  const todoService = TodoProvider.provide().TodoService;
  const todos = useBloCState<Todo[]>(todoService);

  const addTodo = (task: string) => {
    if (!task) return
    todoService.add(new Todo(new Date(), false, task));
  };

  return (
    <TodoLayout>
      <AddForm onSubmit={addTodo} />
      <Todos todos={todos}/>
    </TodoLayout>
  );
};
