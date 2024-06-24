import './index.css'

const CountriesList = props => {
  const {countryDetails, clickVisitButton} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitButton = () => {
    clickVisitButton(id)
  }

  return (
    <li className="country-list">
      <p className="country-item-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button
          onClick={onClickVisitButton}
          type="button"
          className="visit-button"
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList