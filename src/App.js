import { useState } from "react";
import Header from "./Components/Header/Header";
import ResultsTable from "./Components/ResultsTable/ResultsTable";
import UserInput from "./Components/UserInput/UserInput";

function App() {
  const [appInput, setAppInput] = useState(null);
  const calculateHandler = (userInput) => {
    setAppInput(userInput);
    console.log(userInput);
  };

  const yearlyData = []; // per-year results

  if (appInput) {
    let currentSavings = +appInput["current-savings"];
    const yearlyContribution = +appInput["yearly-contribution"]; //as mentioned: feel free to change the shape...
    const expectedReturn = +appInput["expected-return"] / 100;
    const duration = +appInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(appInput);
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!appInput && <p>No investments calculated yet!</p>}
      {appInput && <ResultsTable data={yearlyData} InitialInvestment={appInput["current-savings"]} />}
    </div>
  );
}

export default App;
