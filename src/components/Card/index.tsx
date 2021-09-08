import './styles.css';

interface IPropsCard {
  item: {
    id: number;
    name: string;
    image: string;
    type: string;
  }
}

export function Card({ item }: IPropsCard) {
  return (
    <div className="container-card">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <strong>{item.type}</strong>
    </div>
  );
}