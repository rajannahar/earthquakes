export default {
  get: jest.fn().mockResolvedValue({
    data: {
      data: {
        features: [
          {
            "properties": {
              "mag": 1.29,
              "place": "10km SSW of Idyllwild, CA",
              "magType": "ml",
            },
            "id": "ci11408890"
          }
        ],
        loading: true
      }
    }
  })
}