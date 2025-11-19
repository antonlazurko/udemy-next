export const Input = ({ className, value, onChange, ...props }) => (
  <input
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition"
    value={value ?? ''}
    onChange={onChange}
    {...props}
  />
);
