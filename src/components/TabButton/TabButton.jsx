export default function TabButton({ children, onClick, isSelected }) {
  function handleClick() {
    onClick(children.toLowerCase());
  }

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
