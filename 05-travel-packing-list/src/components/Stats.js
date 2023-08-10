export default function Stats({ items }) {
  const numItems = items.length;

  if (!numItems) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚚</em>
      </p>
    );
  }

  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 💨"
          : `🎒 You have ${numItems} items on your list, and you already packed
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
