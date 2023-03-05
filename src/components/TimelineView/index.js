import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  const renderViews = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} pritemDetails={item} />
    }
    return <CourseTimelineCard key={item.id} critemDetails={item} />
  }
  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF
            <br />
            <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(each => renderViews(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
