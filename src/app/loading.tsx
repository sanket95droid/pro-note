import React from 'react';

const LoadingAnimation: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#BD0E32]"></div>
        </div>
    );
};

export default LoadingAnimation;