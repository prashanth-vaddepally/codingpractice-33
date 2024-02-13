// Write your code here
const LanguageFilterItem = props => {
  const {
    eachDetail,
    activeOptionId,
    languageFiltersData,
    updataActiveOptionId,
  } = props
  const {language} = eachDetail

  const onChangeSortBy = id => {
    updateActiveOptionId(activeOptionId)
  }

  return (
    <div>
      <li>
        <button type="button" onClick={onChangeSortBy}>
          {language}
        </button>
      </li>
    </div>
  )
}
export default LanguageFilterItem
