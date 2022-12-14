import { REPLACE_TEXT } from './types'

// export const addTickets = (tickets) => ({
//   type: RECEIVE_TICKETS,
//   payload: tickets,
// })

export const replaceText = () => ({
  type: REPLACE_TEXT,
})

// const fetchPosts = (subreddit) => (dispatch) => {
//   dispatch(requestPosts(subreddit))
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then((response) => response.json())
//     .then((json) => dispatch(receivePosts(subreddit, json)))
// }
