import Item from "./Item";

export default function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <Item number={i} title={item.title} text={item.text} key={item.title} />
      ))}
    </div>
  );
}
