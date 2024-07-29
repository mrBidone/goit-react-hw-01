import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={styles.transTable}>
        <thead className={styles.transTableTitle}>
          <tr className={styles.transTableTitleStroke}>
            <th className={styles.transTableTitleCell}>Type</th>
            <th className={styles.transTableTitleCell}>Amount</th>
            <th className={styles.transTableTitleCell}>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.transTableMain}>
          {items.map(({ type, amount, currency, id }) => (
            <tr className={styles.transTableMainStroke} key={id}>
              <td className={styles.transTableMainCell}>{type}</td>
              <td className={styles.transTableMainCell}>{amount}</td>
              <td className={styles.transTableMainCell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
