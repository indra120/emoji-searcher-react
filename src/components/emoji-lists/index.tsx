import { useEffect, useState } from "react"
import styles from "./emoji-lists.module.css"
import EmojiBox from "@/components/emoji-box"
import Empty from "@/components/empty"
import { type SearchEmojiParams, searchEmoji } from "@/utils/searchEmoji"
import type { Emoji } from "@/app"

type Props = Omit<SearchEmojiParams, "maxResults">

const EmojiLists: React.FC<Props> = (props) => {
  const [searchResult, setSearchResult] = useState<Emoji[]>([])

  useEffect(() => {
    setSearchResult(searchEmoji(props))
  }, [props.emojiList, props.search])

  if (searchResult.length > 0) {
    return (
      <div className={styles.emojiLists}>
        {searchResult.map((data, index) => (
          <EmojiBox key={index} title={data.title} symbol={data.symbol} />
        ))}
      </div>
    )
  }

  return <Empty text="Oops, zero finding. Let's try another keyword!" />
}

export default EmojiLists