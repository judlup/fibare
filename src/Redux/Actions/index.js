import { ADD_ARTICLE } from "../Constants/actions-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}