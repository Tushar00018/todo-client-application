import React from 'react';

const ErrorFallback: React.FC<any> = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert" style={{ padding: 20 }}>
            <h2>Something went wrong.</h2>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

export default ErrorFallback;
