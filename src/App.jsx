import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./Header.jsx";
import PokemonCard from "./PokemonCard.jsx";
import useSWR, { fetcher } from "./swr.js";
import { chunkArray } from "./utils.js";

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const { data, error, isLoading } = useSWR(POKE_API, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Header />
      <Container className="my-4">
        {chunkArray(data.results, 6).map((row, index) => (
          <Row key={`row-${index}`}>
            {row.map((pokemon) => (
              <Col key={pokemon.name} className="py-3">
                <PokemonCard name={pokemon.name} url={pokemon.url} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </>
  );
}

export default App;
