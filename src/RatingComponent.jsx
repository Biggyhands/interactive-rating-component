import React, { useState } from 'react'
import { SurveyInfoComponent } from './components/SurveyInfoComponent'
import { SurveyTyComponent } from './components/SurveyTyComponent'
import { useRatingComponent } from './hooks/useRatingComponent'


export const RatingComponent = () => {


const {arraySurvey, selectOptionBy, getSurveySelected, setShowSuccessfullScreen, showSuccessfullScreen} =  useRatingComponent()



  return (
    <>

       {
            showSuccessfullScreen 
           ?  <SurveyTyComponent survey={getSurveySelected().label}/> 
          : <SurveyInfoComponent setShowSuccessfullScreen={setShowSuccessfullScreen} selectOptionBy={selectOptionBy} arraySurvey={arraySurvey} />
        }
        
    </>
  )
}
