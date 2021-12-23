import React from "react";
import { Link } from "react-router-dom";


function Main() {
  return (
    <>
      <Link to="/test">
        <button>메인 화면으로</button>
      </Link>
    </>
  );
}

export default Main;

function exchangePage() {
  return <div> 환율페이지</div>;
}

export default exchangePage;

function App() {
  return (
    <>
      <Router>
        <exchangePage />
      </Router>
    </>
  );
}

export default App;

