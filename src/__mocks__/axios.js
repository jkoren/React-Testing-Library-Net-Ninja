const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Tom",
          last: "Jones"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/30.jpg"
        },
        login: {
          username: "thephonyGOAT"
        }
      }
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}