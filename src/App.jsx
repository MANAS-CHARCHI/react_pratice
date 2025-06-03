import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
// just tetsing and remove
function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();
  function startClock() {
    if (timer.current) return;
    const value = setInterval(() => {
      setCurrentCount((prevCount) => prevCount + 1);
    }, 1000);
    timer.current = value;
  }
  function stopClock() {
    clearInterval(timer.current);
    timer.current = null;
  }
  function reset() {
    stopClock();
    setCurrentCount(0);
  }
  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
      <button onClick={reset}>Reset</button>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route path="/about/team" element={<h1>Team</h1>} />
            <Route path="/about/contact" element={<h1>Contact</h1>} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

function AboutLayout() {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
    </div>
  );
}

// BLACK BOX UI FOR ERROR HANDLE
class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default App;
