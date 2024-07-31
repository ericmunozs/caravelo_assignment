import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios'
import { saveQuota, SaveQuotaData } from '@/services/quotaService'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const API_URL = 'https://httpstat.us/200'
const mockData: SaveQuotaData = {
  quota: 5,
  reason: 'Customer compensation',
}

describe('saveQuota', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should save quota successfully', async () => {
    const mockResponse: AxiosResponse<SaveQuotaData> = {
      data: mockData,
      status: 200,
      statusText: 'OK',
      headers: {} as AxiosRequestHeaders,
      config: {
        headers: {} as AxiosRequestHeaders,
      },
    }

    mockedAxios.post.mockResolvedValue(mockResponse)

    const result = await saveQuota(mockData)

    expect(result).toEqual(mockData)
    expect(mockedAxios.post).toHaveBeenCalledWith(API_URL, mockData)
  })

  it('should throw an error if the response status is not 200', async () => {
    const mockResponse: AxiosResponse<SaveQuotaData> = {
      data: mockData,
      status: 500,
      statusText: 'Internal Server Error',
      headers: {} as AxiosRequestHeaders,
      config: {
        headers: {} as AxiosRequestHeaders,
      },
    }

    mockedAxios.post.mockResolvedValue(mockResponse)

    await expect(saveQuota(mockData)).rejects.toThrow('Failed to save quota')
    expect(mockedAxios.post).toHaveBeenCalledWith(API_URL, mockData)
  })

  it('should throw an error if the request fails', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Network Error'))

    await expect(saveQuota(mockData)).rejects.toThrow('Network Error')
    expect(mockedAxios.post).toHaveBeenCalledWith(API_URL, mockData)
  })
})
