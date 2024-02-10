export default function Button({ children, onClick, id, classes }) {
  return (
    <button
      id={id}
      className={" btn px-5 py-2 min-h-0 outline-none text-xl " + classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
