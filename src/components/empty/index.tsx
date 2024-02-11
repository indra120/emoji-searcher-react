import styles from "./empty.module.css"

const Empty = ({ text = "" }) => (
  <div className={styles.empty}>{text}</div>
)

export default Empty
