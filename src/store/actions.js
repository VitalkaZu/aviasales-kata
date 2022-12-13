// export const ADD_TICKETS = 'REQUEST_POSTS'
export const REQUEST_TICKETS = 'REQUEST_POSTS'
export const RECEIVE_TICKETS = 'RECEIVE_POSTS'
export const GET_SEARCH_ID = 'GET_SEARCH_ID'

export const addTickets = (tickets) => ({
  type: RECEIVE_TICKETS,
  payload: tickets,
})

// const fetchPosts = (subreddit) => (dispatch) => {
//   dispatch(requestPosts(subreddit))
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then((response) => response.json())
//     .then((json) => dispatch(receivePosts(subreddit, json)))
// }
