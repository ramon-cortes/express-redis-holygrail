//---------------------SUPERAGENT---------------------
function update(section, value) {
  return new Promise((resolve, reject) => {
    let url = `/update/${section}/${value}`;
    superagent
      .get(url)
      .end((err, res) => {
        err ? reject(null) : resolve(res.body);
      });
  });
}

function read() {
  return new Promise((resolve, reject) => {
    let url = `/data`;
    superagent
      .get(url)
      .end((err, res) => {
        err ? reject(null) : resolve(res.body);
      });
  });
}
//---------------------SUPERAGENT---------------------

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const response = read()
      .then(res => {
        setData(res)
      });
  }, []);
 

  function add(section, operation) {        
    let value = data[section];
    if (operation === '+') {
      value++;
    } else {
      value--;
    }
    const sobreEscribe = {[section]: value};
    //console.log(`section ${section}, value ${value}`);
    const response = update(section, value)
      .then(res => {
        console.log(res);
      }
    );
    setData({...data, ...sobreEscribe});    
  }

  return (
    <div className='wrapper-main'>
      
      <Header data={data} handle={add} />
      
      <Left data={data} handle={add}/>

      <Article data={data} handle={add}/>

      <Right data={data} handle={add}/>

      <Footer data={data} handle={add}/>
      
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

/* old add

function add(section, operation) {    
    let value = data[section];
    if (operation === '+') {
      value++;
    } else {
      value--;
    }
    const sobreEscribe = {[section]: value};
    setData({...data, ...sobreEscribe});
  }

*/