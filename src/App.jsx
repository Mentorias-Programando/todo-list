import { useState } from "react";
import List from "./components/List";

function App() {
  //Hook
  const [list, setList] = useState([
    { key: 1, descripcion: "Practicar React", estado: "En proceso" },
  ]);
  const [tarea, setTarea] = useState("");
  const handleOnClick = () => {
    setList([
      ...list,
      { key: list.length + 1, descripcion: tarea, estado: "En proceso" },
    ]);
  };

  return (
    <main className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold py-7"> TO-DO LIST EN REACT :)</h1>

        <div className="flex items-center space-x-4 py-4">
          <input
            value={tarea}
            type="text"
            name="tarea"
            id="tarea"
            placeholder="Agrega descripción de la tarea"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 bg-gray-100 rounded-full"
            onChange={(e) => {
              setTarea(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
          cursor-pointer"
            onClick={() => handleOnClick()}
          >
            +
          </button>
        </div>
        <List list={list} />
      </div>
    </main>
  );
}

export default App;
