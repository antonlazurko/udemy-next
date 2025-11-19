export const Button = ({ onClick, children, className = '', variant = 'primary' }) => {
  const variantClass = variant === 'primary' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700';
  return (<button
    className={`${variantClass} text-white font-bold py-2 px-4 rounded cursor-pointer h-min ${className}`}
    onClick={onClick}
  >
    {children}
  </button>)
};