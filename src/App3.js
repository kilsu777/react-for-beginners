import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => {
        setToDo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((data) => [toDo, ...data]);
        setToDo("");
    }
    const removeItem = (e) => {
        const li = e.target.parentElement;
        const idx = li.getAttribute("idx");
        toDos.splice(idx, 1);
        setToDos((data) => [...toDos]);
    }
    console.log(toDos);
    return (
        <div>
            <h2>My To Dos ({toDos.length})</h2>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) =>
                    <li key={index} idx={index}>
                        {item}&nbsp;
                        <button onClick={removeItem}>❌</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
