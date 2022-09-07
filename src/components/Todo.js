import { useState } from "react";
import styles from "./Todo.module.css";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        } else if (toDos.includes(toDo)) {
            alert("This 'To Do' already exists");
            return;
        }

        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    const deleteAll = (event) => {
        event.preventDefault();
        setToDos((currentArray) => []);
    };
    const deleteTodo = (event) => {
        const targetItem = event.target.id;
        setToDos((currentArray) =>
            currentArray.filter((item) => {
                return item !== targetItem;
            })
        );
    };
    return (
        <div>
            <h1 className={styles.head}>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit} className={styles.form}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder="Wirte your to do"
                />
                <button>Add To Do</button>
                <button onClick={deleteAll}>Delete All</button>
            </form>
            <hr />
            <ul className={styles.ul}>
                {toDos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button
                            className={styles.btn_todo}
                            id={item}
                            onClick={deleteTodo}
                        >
                            ✓
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
