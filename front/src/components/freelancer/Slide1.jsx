import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Slide1 = (props) => {


    const data = props.data

    return (

        <div>
            <h2 className='competences-title'>Outils</h2>
            <div className='competences'>
                {data.map(x =>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Excel</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.excel}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.powerpoint}
                                emptyStarColor={`#C4C4C4`} />
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft 365</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.microsoft_365}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Word</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.word}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Hubspot</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.crm_hubspot}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Salesforce</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.crm_salesforce}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Pipedrive</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.crm_pipedrive}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.crm}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Suite Adobe </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.suite_adobe}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Illustrator </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.illustrator}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>In Design </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.in_design}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Photoshop </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.photoshop}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Marketing FB </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.marketing_fb}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Google adwards </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.google_adwards}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Instagram </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.insta}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Reseaux sociaux </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.reseaux_sociaux}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Keynote </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.keynote}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Pages </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.pages}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>G Suite Google </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.gsuite_google}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Numbers </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.numbers}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Erp sap </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.erp_sap}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Ciel Gestion </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.ciel_gestion}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Cegid </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.cegid}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sage gestion commercial </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.sage_gestion_commercial}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sage comptabilité </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.sage_comptabilite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Quadra </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={x.quadra}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    )
}
export default Slide1;