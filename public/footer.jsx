function Footer(props) {
  return (
    <div className="footer">
      <PlusMinus icon='footer' handle={props.handle} />
      <div className="titles">
        Footer: {props.data.footer}
      </div>
      <Data data={props.data} />
    </div>
  );
}