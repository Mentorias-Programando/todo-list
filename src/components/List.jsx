import trashIcon from "../assets/trash.svg";

const List = ({ list, eliminarItem, completarTarea }) => {
  const handleCompletarTarea = (key) => {
    completarTarea(key);
  };

  return (
    <ul>
      {list.map((item) => (
        <li
          className={`pb-3 p-5 ${
            item.estado === "Completado" ? "bg-green-50" : "bg-blue-50"
          }`}
          key={item.key}
        >
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncat">
                {item.descripcion}
              </p>
              <p className="text-sm text-gray-500">{item.estado}</p>
            </div>
            <button
              type="button"
              className={`cursor-pointer ${
                item.estado === "Completado" ? "bg-green-500" : "bg-gray-500"
              } py-2 px-4 rounded-full`}
              onClick={() => handleCompletarTarea(item.key)}
            >
              {item.estado === "Completado" ? "X" : "/"}
            </button>
            <button
              className="cursor-pointer"
              onClick={() => eliminarItem(item.key)}
            >
              <img src={trashIcon} width={20} height={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
