import styles from "./empty.module.css"

interface EmptyProps {
  text: string
}

const Empty: React.FC<EmptyProps> = (props) => (
  <div className={styles.empty}>{props.text}</div>
)

export default Empty
