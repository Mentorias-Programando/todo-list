const List = ({ list }) => {
  return (
    <ul className="max-w">
      {list.map((item) => (
        <li className="pb-3 bg-blue-50 p-5" key={item.key}>
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {item.descripcion}
              </p>
              <p className="text-sm text-gray-500">{item.estado}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
