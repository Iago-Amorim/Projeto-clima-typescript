import style from './style/Error.module.css'

const Error = () => {
  return (
    <div className={ style.error }>
        <p>Cidade não encontrada!</p>
    </div>
  )
}

export default Error