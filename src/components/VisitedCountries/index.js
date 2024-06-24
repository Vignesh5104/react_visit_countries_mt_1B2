import './index.css'

const VisitedCountries = props => {
  const {VisitedCountryDetails, clickDeleteCountry} = props
  const {id, name, imageUrl} = VisitedCountryDetails

  const onClickRemove = () => {
    clickDeleteCountry(id)
  }

  return (
    <li className="visited-country-list">
      <img className="country-flag-image" src={imageUrl} alt="thumbnail" />
      <div className="country-item">
        <p className="country-name">{name}</p>
        <button onClick={onClickRemove} type="button" className="remove-button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries