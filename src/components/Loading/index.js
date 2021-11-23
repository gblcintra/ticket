
// import Title from '../Title'
import './index.scss'
export default function Loading(){
  document.title = "Loading";
  return(
    <div className="loading">
      <div className="is-mobile is-centered">
        <div className="is-half has-text-centered">
        <progress className="progress is-xxsmall is-muticolor" max="100"/>
        </div>
      </div>
    </div>
  )
}