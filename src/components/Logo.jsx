const Logo = ({ className = "w-8 h-8" }) => {
    return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="12" className="fill-primary-600" />
            <path d="M12 28V20" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M20 28V14" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M28 28V10" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <circle cx="28" cy="10" r="2" fill="white" />
        </svg>
    );
};

export default Logo;
