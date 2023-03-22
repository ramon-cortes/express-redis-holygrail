function PlusMinus(props) {
  return (
    <div>
      <img src={`./img/plus-${props.icon}.jpg`} alt="+" onClick={() => props.handle(props.icon, '+')} />
      &nbsp;
      <img src={`./img/minus-${props.icon}.jpg`} alt="-" onClick={() => props.handle(props.icon, '-')} />
    </div>
  );
}