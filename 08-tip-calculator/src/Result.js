export default function Result({ bill, yourRating, friendsRating }) {
  const tipPercentage = Number((friendsRating + yourRating) / 2);
  const tip = bill * tipPercentage;
  const total = Number(tip + bill);
  return (
    <div>
      <b>
        You pay {total}$ ({bill}$ + {tip}$)
      </b>
    </div>
  );
}
