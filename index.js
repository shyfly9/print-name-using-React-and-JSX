const className = "greeting";
const name = "World!";
const user = { firstName: "Shyam", lastName: "Kumar" };
const fullName = (user) => user.firstName + " " + user.lastName;
const rootElement = document.getElementById("root");
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}</h1>
    <p>Good to see you</p>
  </div>
);
ReactDOM.render(element, rootElement);
