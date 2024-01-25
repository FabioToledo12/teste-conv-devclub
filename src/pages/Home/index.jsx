import { useEffect, useState } from "react"
import api from "../../services/api"
import Header from "../../components/Header"
import { Container, Containeritems } from "./styles";
import Card from "../../components/Card"


function Home() {

    const [ movies, setMovies ] = useState();
    const [ filteredMovies, setFilteredMovies ] = useState();

    useEffect(() => {
        async function loadData() {
            const { data: { docs }, } = await api.get("movie")

            setMovies(docs)
            setFilteredMovies(docs)
            console.log(docs)
        }

        loadData()
    }, []);

    return (
        <Container>
            <Header movies = { movies } setFilteredMovies = {setFilteredMovies} />

            <Containeritems>
                { 
                    filteredMovies && filteredMovies.map( (movie) => 
                        <Card movieData = { movie } key = { movie._id } />)
                }
            </Containeritems>
        
        </Container>
    )
}

export default Home