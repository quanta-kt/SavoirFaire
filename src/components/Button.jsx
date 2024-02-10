export default function Button({ children, onClick, id }) {
  return (
    <button
      id={id}
      className=" btn w-full px-5 py-2 min-h-0 outline-none text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
