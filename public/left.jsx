function Left(props) {
  return (
    <div className="left">
      <PlusMinus icon='left' handle={props.handle} />
      <div className="titles">
        Left: {props.data.left}
      </div>
      <Data data={props.data} />
    </div>
  );
}