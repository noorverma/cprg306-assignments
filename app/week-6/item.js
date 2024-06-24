export default function Item({ name, quantity, category }) {
    return (
      <li className="flex flex-col justify-between p-4 bg-white rounded mb-4 shadow-md transition-transform transform w-64 mx-7 hover:underline">
        <div className="text-lg font-bold text-black hover:underline">
          {name}
        </div>
        <div className="text-sm text-black">
          Buy {quantity} in {category}
        </div>
      </li>
    );
  }