import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr className={css.transactionTableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionTableBody}>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
