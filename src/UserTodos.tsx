import React, { FC, useState, useEffect } from "react";

interface UserTdosProps {
    username: string
}

const UserTodos: FC<UserTdosProps> = ({ username }) => {
    const [todos, setTodos] = useState<Array<JSX.Element>>();

    const setUserTodos = async () => {
        const userResponse = await fetch('http://jsonplaceholder.typicode.com/users')
        if (userResponse.ok) {
            const users = await userResponse.json()
            //console.log('users', users)
            const userByName = users.find((usr: any) => {
                return usr.username.toLowerCase() === username
            })
            console.log('user by username', userByName)

            const todosResponse = await fetch('http://jsonplaceholder.typicode.com/todos')
            if(todosResponse.ok) {
                const todos = await todosResponse.json()
                console.log('todos: ', todos)
                const usersTodos = await todos.filter((todo: any) => {
                    return todo.userId === userByName.id
                })
                const todoList = usersTodos.map((todo: any) => {
                    return <li key={todo.id}>{todo.title}</li>
                })
                setTodos(todoList)
                console.log('user todos', usersTodos)
            }
        }
    }

    useEffect(() => {
        if (username) {
            setUserTodos()
        }
    }, [username])

    return <ul style={{marginTop: '1rem', listStyleType: 'none'}}>{todos}</ul>;
}

export default UserTodos