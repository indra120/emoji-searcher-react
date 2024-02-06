import { useState } from "react"
import Header from "./components/header"

const App = () => {
  const [search, setSearch] = useState<string>("")

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
      </main>
    </>
  )
}

export default App
