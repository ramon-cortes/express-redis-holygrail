function Header(props) {
  return (
    <div className="header">
      <PlusMinus icon='header' handle={props.handle} />
      <div className="titles">
        Header: {props.data.header}
      </div>
      <Data data={props.data} />
    </div>
  );
}