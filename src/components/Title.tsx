
import '../css/title.css'

interface ITitle {
     title : string,
     subTitle : string
}

export const Title = (props : ITitle) => {

     const {title , subTitle} = props

     return (
          <div className = 'title'>
               <h3>{title}</h3>
               <p>{subTitle}</p>
          </div>
     )
}
