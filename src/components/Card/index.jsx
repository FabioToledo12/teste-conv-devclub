/* eslint-disable react/prop-types */
import { Container } from "./styles";
import MovieIcon from "./../../assets/local_movies.svg";
import AwardIcon from "./../../assets/Academy award.svg";


function Card({ movieData }) {

    return (
        <Container>
            <div className="wraper-image-logo">
                <img src={MovieIcon} alt="" />
            </div>

            <div className="container-items">
                
                <div className="wraper-items">
                    <h3>{movieData.name}</h3>
                    <p>{movieData.runtimeInMinutes}</p>
                </div>

                <div className="wraper-award-icon">
                    <img src={AwardIcon} alt="" />
                    <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Norminations</p>
                </div>

                <div className="wraper-budget" >
                    
                    <div>
                        <h4>Budget</h4>
                        <p>${movieData.budgetInMillions}</p>
                    </div>

                    <div >
                        <h4>Revenue</h4>
                        <p>${movieData.boxOfficeRevenueInMillions} M</p>
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default Card