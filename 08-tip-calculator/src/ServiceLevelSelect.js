export default function ServiceLevelSelect({
  tipPercentage,
  setTipPercentage,
}) {
  return (
    <select
      value={tipPercentage}
      onChange={(e) => {
        console.log("service level changed " + e.target.value);
        setTipPercentage(Number(e.target.value));
      }}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="0.05">It was ok (5%)</option>
      <option value="0.1">It was good (10%)</option>
      <option value="0.2">Amazing (20%)</option>
    </select>
  );
}
