import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Button } from '@mui/material';

interface ErrorPageProps {
    statusText?: string;
    message?: string;
}

const ErrorPage: React.FC = () => {
    const error = useRouteError() as ErrorPageProps;

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-sm">
            <i>{error.statusText || error.message}</i>
        </p>
            <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.replace('/')}
            label="Go to home"
        />


        </div>
    );
};

export default ErrorPage;
