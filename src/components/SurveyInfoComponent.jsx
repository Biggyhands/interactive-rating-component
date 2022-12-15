


export const SurveyInfoComponent = ({setSurveyToggle, setSurvey}) => {
  


    const handleVote1 = () => {
        setSurvey(1);

    };
    const handleVote2 = () => {
        setSurvey(2);

    };
    const handleVote3 = () => {
        setSurvey(3);

    };
    const handleVote4 = () => {
        setSurvey(4);
    };
    const handleVote5 = () => {
        setSurvey(5);

    };
    const handleSwitcher = () =>{
        setSurveyToggle(false)
    }


    return (
    <>
        <div className='main-card-container'>
    <section className='main-card-container-info'>
      <div className='main-card-container-info-flex'>
        <div className='card-start-container' >
            <svg className='start-svg'  width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
        </div>
        <div>
        <h2 className='card-title'>How did we go?</h2>
        <p className='card-text'>  Please let us know how we did with your support request. All feedback is appreciated  to help us improve our offering!      
        </p>
        </div>
        <form className='card-form-container'>
         <div className='option-container'>

         <button type="button" onClick={handleVote1} className='option-button'>1</button>
         <button type="button" onClick={handleVote2} className='option-button'>2</button>
         <button type="button" onClick={handleVote3} className='option-button'>3</button>
         <button type="button" onClick={handleVote4} className='option-button'>4</button>
         <button type="button" onClick={handleVote5} className='option-button'>5</button>

          </div> 
        <div className='card-submit-button-container'>
        <button type="button" onClick={handleSwitcher} className='card-submit-button'>SUBMIT</button>
        </div>
        </form >
        </div>
    </section>
    </div>
    </>
  )
}
