function Article(props) {
  return (
    <div className="article">
      <PlusMinus icon='article' handle={props.handle} />
      <div className="titles">
        Article: {props.data.article}
      </div>
      <Data data={props.data} />
    </div>
  );
}