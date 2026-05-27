function Input({ label, ...rest }) {
  return (
    <div className="space-y-2">
      <label htmlFor={`${label.toLowerCase()}`}>{label}</label>
      <input {...rest} />
    </div>
  );
}
export default Input;
