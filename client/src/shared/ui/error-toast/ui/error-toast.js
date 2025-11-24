export const ErrorToast = ({ errors = [] }) => (
  <div className="bg-red-50 border border-red-400 text-red-800 px-4 py-3 rounded-md shadow-md">
    <p className="font-semibold mb-2">Errors:</p>
    <ul className="list-disc list-inside space-y-1">
      {errors.map(({ value, msg, path }) => (
        <li key={value}>
          <span className="font-medium">{path}</span>{value && <span className="italic"> - {value}</span>}: {msg}
        </li>
      ))}
    </ul>
  </div>
);
