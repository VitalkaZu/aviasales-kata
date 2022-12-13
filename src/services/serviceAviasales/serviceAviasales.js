/* eslint-disable */
export default class ServiseAviasales {
  _baseUrl = 'https://aviasales-test-api.kata.academy'

  getSearchId = async () => {
    const res = await fetch(`${this._baseUrl}/search`)
    if (!res.ok) {
      throw new Error(`Error, status ${res.status}`)
    }
    const body = await res.json()
    return body.searchId
  }

  getTickets = async (searchId) => {
    for (let i = 0; i < 5; i += 1) {
      const res = await fetch(`${this._baseUrl}/tickets?searchId=${searchId}`)
      if (!res.ok && i === 4) {
        throw new Error(`Error, status ${res.status}`)
      }
      if (res.ok) {
        return await res.json()
      }
    }
    // const res = await fetch(`${this._baseUrl}/tickets?searchId=${searchId}`)
    // if (!res.ok) {
    //   throw new Error(`Error, status ${res.status}`)
    // }
    // const body = await res.json()
    // return body
  }

  // getRepeatableData(getData, key, maxRequestsNumber) {
  //   try {
  //     return getData(key)
  //   } catch (e) {
  //     if (e.name === 'NotFoundError') {
  //       throw e
  //     } else if (e.name === 'TemporaryError') {
  //       if (maxRequestsNumber === 1) throw new AttemptsLimitExceeded()
  //       if (maxRequestsNumber === null || maxRequestsNumber === undefined) {
  //         return this.getRepeatableData(getData, key)
  //       }
  //       return this.getRepeatableData(getData, key, maxRequestsNumber - 1)
  //     }
  //   }
  //   return null
  // }
}

export const AviaSalesService = new ServiseAviasales()
