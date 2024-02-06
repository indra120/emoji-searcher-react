import { useEffect, useState } from "react"
import Header from "./components/header"
import EmojiLists from "./components/emoji-lists"

const API_URL = "https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631"

export interface Emoji {
  title: string
  symbol: string
  keywords: string
}

const App = () => {
  const [emojiList, setEmojiList] = useState<Emoji[]>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    ;(async function () {
      const res = await fetch(API_URL)
      const resJson: Emoji[] = await res.json()

      setEmojiList(resJson)
    })()
  }, [])

  return (
    <>
      <Header />

      <main className="container">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <EmojiLists emojiList={emojiList} search={search} />
      </main>
    </>
  )
}

export default App
