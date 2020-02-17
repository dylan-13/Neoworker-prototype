import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


const Slide5 = (props) => {
  const data = props.data

return(
    <div>
    <h2 className='competences-title'>Langues</h2>
    <div className='competences'>
      {data.map(x =>
        <div className='cards'>
          <div className='mission-card'>
            <p>Français</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.francais}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Anglais</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.anglais}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Espagnol</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.espagnol}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Allemand</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.allemand}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Russe</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.russe}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Italien</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.italien}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Chinois</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.chinois}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Arabe</p>
            <StarRatingComponent
              name="rate1"
              starCount={3}
              value={x.arabe}
              emptyStarColor={`#C4C4C4`}
            />
          </div>
          <div className='mission-card'>
            <p>Autres langues : {x.autres_langue}</p>

          </div>
        </div>
      )}

    </div>
</div >
)
}

export default Slide5;