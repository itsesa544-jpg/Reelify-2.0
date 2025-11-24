import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // FIX: Replaced the constructor with a class property state initializer.
  // The original constructor-based initialization was causing type errors where `this.props` and `this.state` were not recognized.
  // Using a class property is a more modern and concise approach in React with TypeScript and resolves these typing issues.
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen bg-black text-white flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong.</h1>
          <p className="text-gray-400 text-center">
            The application encountered an error and could not load.
            <br />
            Please try refreshing the page. Check the developer console for more details.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
