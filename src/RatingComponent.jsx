import React, { useState } from 'react'
import { SurveyInfoComponent } from './components/SurveyInfoComponent'
import { SurveyTyComponent } from './components/SurveyTyComponent'

export const RatingComponent = () => {
  const [survey, setSurvey] = useState(0)  
  const [surveyToggle, setSurveyToggle] = useState(true)


  
  return (
    <>

       {
            surveyToggle 
           ?   <SurveyInfoComponent setSurveyToggle={setSurveyToggle} setSurvey={setSurvey} />
          : <SurveyTyComponent survey={survey}/>
        }
        
    </>
  )
}
