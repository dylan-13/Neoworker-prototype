import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


const Slide2 = (props) => {


    const data = props.data

    return (

        <div>
            <h2 className='competences-title'>Soft Skills</h2>
            <div className='competences'>
                {data.map(x =>
                    <div className='cards'>
                        <div className='competences-card'>
                            <p>Résolution de problèmes</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.reso_pb}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Confiance</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.confiance}
                                emptyStarColor={`#C4C4C4`} />
                        </div>
                        <div className='competences-card'>
                            <p>Empathie</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.empathie}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>

                        <div className='competences-card'>
                            <p>Intelligence Emotionnelle</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.intelligence_emo}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Communication</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.communication}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Gestion du temps</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.gestion_temps}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Gestion du stress</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.gestion_stress}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Créativité</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.creativite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Esprit d'entreprise </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.esprit_entre}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Audace</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.audace}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Vision</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.vision_visu}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Motivation</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.motivation}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Présence </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.presence}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Sens collectif</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.sens_collectif}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Curiosité</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.curiosite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Sens de l'effort </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.sens_effort}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='competences-card'>
                            <p>Autres skills</p>
                            <nput type="textaera" name="text" id="autres_skills" value={x.autres_softskill} />
                        </div>
                    </div>
                )
                }
            </div>
        </div >
    )
}


export default Slide2

