// mostly code from reactjs.org/docs/error-boundaries.html
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  //lifecycle method.
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error: ", error, info);
  }

  //All class component munst has a renden function.
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          there was an error. <Link to="/">Click here</Link> home page
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
