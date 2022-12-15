import { useState } from "react";

export const useRatingComponent = () => {
    
    const listOfSurvey = Array.from({length: 5}, (_, i) => {
        return{
            value: i+1,
            label: (i+1).toString(),
            selected: false
       } 
    })
    const [showSuccessfullScreen, setShowSuccessfullScreen] = useState(false)
    const [arraySurvey, setArraySurvey] = useState(listOfSurvey)
    const selectOptionBy = (survey) => {
        const {value} = survey;
        const newArraySurvey = arraySurvey.map(surveyElement => {
            if(surveyElement.value === value){
                return {
                    ...surveyElement,
                    selected: true,
                }
            }else{
                return {
                    ...surveyElement,
                    selected: false,
                }
            }
         })
         setArraySurvey(newArraySurvey);
    }


    const getSurveySelected = () => {
        const surveySelected = arraySurvey.find(survey => survey.selected === true);
        return surveySelected
    };


    return {
        arraySurvey, 
        selectOptionBy,
        getSurveySelected,
        showSuccessfullScreen,
        setShowSuccessfullScreen
    }

};

