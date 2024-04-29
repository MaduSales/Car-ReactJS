import './Carro.css'

function Carro(props) {
  return (
    <div className='container'>
      <p>Nome: {props.nome}</p>
      <p>Marca: {props.marca}</p>
      <p>Ano: {props.ano}</p>
      <hr />
      <br /><br />
    </div>
  )
}

export default Carro
