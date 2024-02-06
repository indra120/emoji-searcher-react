import styles from "./header.module.css"
import searchIcon from "../../assets/search-icon.svg"
import emojiIcon from "../../assets/emoji-icon.svg"

const Header = () => (
  <header className={styles.header}>
    <img
      style={{ marginRight: 8 }}
      className={styles.icon}
      src={emojiIcon}
      alt="emoji icon"
    />
    <img
      style={{ marginTop: 3 }}
      className={styles.icon}
      src={searchIcon}
      alt="search icon"
    />
    <span className={styles.title}> EmojiSearch </span>
  </header>
)

export default Header
