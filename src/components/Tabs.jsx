export default function Tabs({ children, buttons, buttonsContainer }) {
  // needs to start with a capital letter to be a valid component
  // to pass built-in elements, use strings, to pass custom components, pass the component name as dynamic value
  const ButtonsContainer = buttonsContainer ?? 'menu';

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
