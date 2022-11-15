import "./pagination.css";

export default function Pagination({
  itemsAmount,
  itemsPerPage,
  setCurrentPage
}) {
  const pagesAmount = Math.ceil(itemsAmount / itemsPerPage);
  const buttons = [];
  for (let i = 1; i < pagesAmount + 1; i++) {
    buttons.push(
      <button key={i} onClick={() => setCurrentPage(i)}>
        {i}
      </button>
    );
  }
  return <div className="pagination">{buttons}</div>;
}
