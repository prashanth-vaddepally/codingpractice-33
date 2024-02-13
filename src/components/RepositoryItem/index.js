// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {cardData} = props
  const {avatarUrl, name, issuesCount, forksCount, starsCount} = cardData
  return (
    <div className="the-card">
      <img src={avatarUrl} alt={name} className="image-size" />
      <h1 className="name">{name}</h1>
      <div>
        <div className="little-row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="little-image"
          />
          <p className="little-heads">{starsCount}stars</p>
        </div>
        <div className="little-row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="little-image"
          />
          <p className="little-heads">{forksCount}forks</p>
        </div>
        <div className="little-row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="little-image"
          />
          <p className="little-heads">{issuesCount}open issues</p>
        </div>
      </div>
    </div>
  )
}
export default RepositoryItem
