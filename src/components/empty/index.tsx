import styles from "./empty.module.css"

interface Props {
  text: string
}

const Empty: React.FC<Props> = ({ text }) => (
  <div className={styles.empty}>{text}</div>
)

export default Empty