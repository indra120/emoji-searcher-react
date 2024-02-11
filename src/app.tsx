import { useEffect, useState } from "react"
import Header from "@/components/header"
import EmojiLists from "@/components/emoji-lists"
import Empty from "@/components/empty"

const API_URL = "https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631"

export interface Emoji {
  title: string
  symbol: string
  keywords: string
}

const App = () => {
  const [emojiList, setEmojiList] = useState<Emoji[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)

        const savedList = JSON.parse(localStorage.getItem("emoji-list")!) || []
        if (savedList.length > 0) {
          setEmojiList(savedList)
          return
        }

        const res = await fetch(API_URL)
        const resJson: Emoji[] = await res.json()

        setEmojiList(resJson)
        localStorage.setItem("emoji-list", JSON.stringify(resJson))
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <>
      <Header />

      <main className="container">
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="search" placeholder="Search" />

        {loading && <Empty text="Loading..." />}
        {error && <Empty text="Error!" />}

        {emojiList.length > 0 && <EmojiLists emojiList={emojiList} search={search} />}
      </main>
    </>
  )
}

export default App
