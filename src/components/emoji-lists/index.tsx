import { useEffect, useState } from "react"
import { Emoji } from "../../app"
import { SearchEmojiParams, searchEmoji } from "../../utils/searchEmoji"

type EmojiListsProps = Omit<SearchEmojiParams, "maxResults">

const EmojiLists: React.FC<EmojiListsProps> = (props) => {
  const [searchResult, setSearchResult] = useState<Emoji[]>([])

  useEffect(() => {
    setSearchResult(searchEmoji(props))
  }, [props.emojiList, props.search])

  console.log(searchResult)

  return <div>EmojiLists</div>
}

export default EmojiLists
