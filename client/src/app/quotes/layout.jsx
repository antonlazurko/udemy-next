export default function QuotesLayout({ children, modal }) {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <div className="mb-4">{children}</div>
      {modal && <div className="modal">{modal}</div>}
    </div>
  );
}