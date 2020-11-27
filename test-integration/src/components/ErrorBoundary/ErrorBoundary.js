import React from 'react';
import { Redirect } from "react-router-dom";
export default class ErrorBoundary extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      //console.log(error);
    }

    render() {
      if (this.state.hasError) {
       return <h1>{this.state.hasError}</h1>;
      }

      return this.props.children;
    }
}