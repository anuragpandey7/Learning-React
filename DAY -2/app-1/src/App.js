import "./App.css";
import Button from "./components/Button";
import Avatar from "./components/Avatar";

const user = [
  {
    name: "Aashu",
    src: "https://avatars.githubusercontent.com/u/89124956?v=4",
    rounded: false,
  },
  {
    name: "Aanshi",
    src: "https://navbharattimes.indiatimes.com/thumb/96080928/avatar-2-first-review-96080928.jpg?imgsize=126202&width=700&height=525&resizemode=75",
    rounded: true,
  },
  {
    name: "Dhoni",
    src: "https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/187808682_319108719581857_7985260120139155171_n.jpg?stp=dst-jpg_p640x640&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=fVSxAGoSe-4AX8Szr3E&_nc_ht=scontent.flko7-1.fna&oh=00_AfAQuRE1umbKPDv6ZYSgJU0YKYOi-wCiqNzIFv4R1K6nEg&oe=6454AD30",
    rounded: false,
  },
];

const userAvatar = user.map((user) => (
  <Avatar name={user.name} src={user.src} rounded = {user.rounded}/>
));

function App() {
  const college = "BBDEC";
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Button text="hey there" />
      <h2>{college}</h2>
      <h2>{3 + 4 > 6 ? "true" : "false"}</h2>
      <h2>{3 + 4 > 8 ? "true" : "false"}</h2>
      {userAvatar}
    </div>
  );
}

export default App;
