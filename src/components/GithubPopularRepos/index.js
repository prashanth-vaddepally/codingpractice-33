import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    cards: [],
    isLoading: false,
    activeOptionId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getCardsDetails()
  }

  getCardsDetails = async () => {
    this.setState({isLoading: true})
    const {activeOptionId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeOptionId}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(product => ({
        name: product.name,
        id: product.id,
        issuesCount: product.issues_count,
        forksCount: product.forks_count,
        starsCount: product.stars_count,
        avatarUrl: product.avatar_url,
      }))
      this.setState({
        cards: updatedData,
        isLoading: false,
      })
    }
  }

  updateActiveOptionId = activeOptionId => {
    this.setState({activeOptionId}, this.getCardsDetails)
  }

  renders = () => {
    const {cards} = this.state
    return (
      <div>
        <ul className="allcardsRow">
          {cards.map(eachCard => (
            <RepositoryItem key={eachCard.id} cardData={eachCard} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading, activeOptionId} = this.state
    return (
      <div className="overall">
        <h1>Popular</h1>
        <ul className="row-heads">
          {languageFiltersData.map(eachDetail => (
            <LanguageFilterItem
              key={eachDetail.id}
              eachDetail={eachDetail}
              activeOptionId={activeOptionId}
              languageFiltersData={languageFiltersData}
              updateActiveOptionId={this.updateActiveOptionId}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoadingView() : this.renders()}
      </div>
    )
  }
}
export default GithubPopularRepos
