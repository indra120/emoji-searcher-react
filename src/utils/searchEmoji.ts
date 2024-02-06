import { Emoji } from "../app"

export interface SearchEmojiParams {
  emojiList: Emoji[]
  search: string
  maxResults?: number
}

export const searchEmoji = (params: SearchEmojiParams) => {
  const searchEmojisBySearchText = params.emojiList.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(params.search.toLowerCase())) {
      return true
    }

    if (emoji.keywords.includes(params.search.toLowerCase())) {
      return true
    }

    return false
  })

  return searchEmojisBySearchText.splice(0, params.maxResults || 20)
}
