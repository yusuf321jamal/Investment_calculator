const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractiomDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yeardata) => (
            <tr>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.savingsEndOfYear)}</td>
              <td>{formatter.format(yeardata.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yeardata.savingsEndOfYear -
                    props.InitialInvestment -
                    yeardata.yearlyContribution * yeardata.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.InitialInvestment +
                    yeardata.yearlyContribution * yeardata.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ResultsTable;
