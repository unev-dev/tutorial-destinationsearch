import './index.css'

const DestinationIteam = props => {
  const {dItem} = props

  const {name, imgUrl} = dItem
  return (
    <li className="iteamhold">
      <img src={imgUrl} className="img-size" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationIteam
