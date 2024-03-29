import { useState, useEffect } from "react"
import styles from "./emoji-box.module.css"
import type { Emoji } from "@/app"

const EmojiBox = (props: Omit<Emoji, "keywords">) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 600)
    return () => clearTimeout(timer)
  }, [selected])

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(props.symbol)
        setSelected(true)
      }}
      className={`${styles.emojiBox} ${selected ? styles.selected : ""}`}
    >
      <p
        className={styles.emoji}
        dangerouslySetInnerHTML={{
          __html: `&#${props.symbol.codePointAt(0)};`,
        }}
      />
      
      <p className={`${styles.emojiText} ${selected ? styles.selectedText : ""}`}>
        {selected ? "Copied!" : props.title}
      </p>
    </div>
  )
}

export default EmojiBox
