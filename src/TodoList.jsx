export function TodoList(props) {

    const toggleTodo = (id, completed) => {
        props.setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id == id) {
                    return { ...todo, completed };
                }

                return todo;
            })
        })
    }

        return (
            <ul className='list'>
                {props.todos.length === 0 && "No Todos"}
                {props.todos.map((todo) => {
                    return (
                        <li key={todo.id} className='todo'>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={e => toggleTodo(todo.id, e.target.checked)}
                            />
                            <label>
                                {todo.title}
                            </label>
                            <button
                                onClick={() => props.deleteTodo(todo.id)}
                                className='deleteBtn'>X
                            </button>
                        </li>
                    )
                })}
            </ul>
        );
    }