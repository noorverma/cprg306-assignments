import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-indigo-200">
      <h1 className="text-3xl font-bold text-black mb-6 ml-9">Shopping List</h1>
      <ItemList />
    </main>
  );
}