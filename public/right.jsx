function Right(props) {
  return (
    <div className="right">
      <PlusMinus icon='right' handle={props.handle} />
      <div className="titles">
        Right: {props.data.right}
      </div>
      <Data data={props.data} />
    </div>
  );
}