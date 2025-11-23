import { useState, useRef } from "react";

import Item from "./Item.jsx";

export default function App() {
    const inputRef = useRef();

    const [data, setData] = useState([
		{ id: 3, name: "Apple", done: false },
		{ id: 2, name: "Orange", done: true },
		{ id: 1, name: "Egg", done: false },
	]);

    const add = () => {
        const id = data[0].id + 1;

        const name = inputRef.current.value;
        if(name == "") return false;

        setData([{ id, name, done: false }, ...data]);
    }

    return (
		<div>
			<h1>Hello React</h1>
			<form onSubmit={e => {
                e.preventDefault();
                add();
                e.currentTarget.reset();
            }}>
                <input type="text" ref={inputRef} />
				<button type="submit">Add</button>
			</form>
			<ul>
				{data.map(item => {
					return (
						<Item
							key={item.id}
							item={item}
						/>
					);
				})}
			</ul>
		</div>
	);
}
