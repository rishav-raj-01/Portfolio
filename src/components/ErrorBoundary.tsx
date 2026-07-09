import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Standard React Error Boundary
 * Catches JavaScript errors anywhere in their child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // TODO: Connect this to a logging service like Sentry or LogRocket in the future
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-4">
          <h1 className="text-3xl font-bold mb-4">Oops, something went wrong.</h1>
          <p className="text-gray-400 mb-8">We're experiencing a little technical difficulty.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 rounded hover:bg-[#D7E2EA]/20 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
