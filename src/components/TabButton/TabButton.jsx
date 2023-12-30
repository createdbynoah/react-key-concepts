export default function TabButton({ children, onClick }) {
  function handleClick() {
    onClick(children.toLowerCase());
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
