export const Input = ({ className, value, onChange, error, ...props }) => (
  <div className='w-full'>
    <input
      className={`
        w-full px-3 py-2 border rounded-lg text-sm transition
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        ${error ? 'border-red-500 ring-red-200' : 'border-gray-300'}
        ${className ?? ''}
        `}
        value={value ?? ''}
        onChange={onChange}
        {...props}
        />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
