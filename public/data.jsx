function Data(props) {
  let datos = JSON.stringify(props.data);
  datos = datos.replace('{', '');
  datos = datos.replace('}', '');
  datos = datos.replaceAll(',', ', ');
  
  return (
    <div className="div-data">
      {datos}
    </div>
  );
}