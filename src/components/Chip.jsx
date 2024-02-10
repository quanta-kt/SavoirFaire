const Chip = ({ children }) => {
  return (
    <div className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 mb-2 mr-2">
      <span className="text-sm font-semibold text-gray-700">{children}</span>
    </div>
  );
};

export default Chip;
