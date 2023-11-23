//yahan mera Form stored hai jisse hum userinput keh rhe hain
import { useState } from "react";
const initialUserinput = {
  "current-savings": 1000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  //single state object with one key per input
  const [userInput, setUserInput] = useState(initialUserinput);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///managing the states so that we submit them when the form is submitted and also we want them as state to reset them when the reset button is clicked
  //and now the ques is which state value do we want to manage  ..and the ans is ..one state for every input,because we need to store and use all these input values that are inputted in our input feilds
  //and its your personal prefrence whethter you want multiple state slices or the single state object with multiple keys inside of it
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput); //i want a function as a value for  this prop because we wanna trigger this function when a submit event occours which will pass the current submitted value to the function in resultsTable and after some tasks done by that function the results will be showcased in the Table
  };

  const resetHandler = () => {
    setUserInput(initialUserinput);
  }; ///resetting our state to inital state matlab purana saara value UI par show hoga reset karne par//lekin usko reflect karaane k liye UI par apne saare inputs mey jaakr two -way binding set karo

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value, //here we are acessing the property name dynamically by wrapping the identifier [input] that contains the property name we want to acess
      };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};
export default UserInput;

//so now here as we have gathered all the user input values and the values which remain on the input after reset ..we now need to derive the results that should ultimately be output in the resultsTable
//in other words we have some state(values) in the userInput which is recieved in the above function components .
//in Such situations we LIFT STATE UPP
//That could be by----accepting props in  the userInput component bcz u wll need to accept a function as a prop.A function that u can call inside of userInput but which will be defined in appjs or in the app component
