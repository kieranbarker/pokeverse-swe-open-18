import Card from "react-bootstrap/Card";
import useSWR, { fetcher } from "./swr";

function PokemonCard({ name, url }) {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Card className="align-items-center">
      <Card.Img
        variant="top"
        src={data.sprites.front_default}
        className="w-auto"
        alt={name}
      />
      <Card.Body>
        <Card.Title className="text-capitalize">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
