import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSeach'
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../Todosloading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmpyTodos } from '../EmpyTodos/EmpyTodos';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoForm } from '../TodoForm/index';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading &&
                    (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    )}
                {error && <TodosError />}
                {(!loading
                    && searchedTodos.length === 0)
                    && <EmpyTodos
                    />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() =>
                            deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />

            { openModal && (
                <Modal>
                   <TodoForm />
                </Modal>
            )}          
            </>
    )
}

export { AppUI };