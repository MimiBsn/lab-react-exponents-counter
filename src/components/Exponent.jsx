export default function Exponent({ num, exponent }) {
  const totalExponent = () => {
    return num ** exponent;
  };
  return (
    <div className="exponent-counter-container">
      {exponent === 2 && (
        <>
          <p className="exponent-label">{num}²</p>
          <p className="exponent-result">
            {num} * {num} = <span className="total">{totalExponent()}</span>
          </p>
        </>
      )}

      {exponent === 3 && (
        <>
          <p className="exponent-label">{num}³</p>
          <p className="exponent-result">
            {num} * {num} * {num} =
            <span className="total"> {totalExponent()}</span>
          </p>
        </>
      )}

      {exponent === 4 && (
        <>
          <p className="exponent-label">{num}⁴</p>
          <p className="exponent-result">
            {num} * {num} * {num} * {num} =
            <span className="total"> {totalExponent()}</span>
          </p>
        </>
      )}

      {exponent === 5 && (
        <>
          <p className="exponent-label">{num}⁵</p>
          <p className="exponent-result">
            {num} * {num} * {num} * {num} * {num} =
            <span className="total"> {totalExponent()}</span>
          </p>
        </>
      )}

      {exponent === 6 && (
        <>
          <p className="exponent-label">{num}⁶</p>
          <p className="exponent-result">
            {num} * {num} * {num} * {num} * {num} * {num} =
            <span className="total"> {totalExponent()}</span>
          </p>
        </>
      )}
    </div>
  );
}
