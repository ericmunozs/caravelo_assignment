import axios from 'axios'

export interface SaveQuotaData {
  quota: number
  reason: string
}

export const saveQuota = async (
  data: SaveQuotaData
): Promise<SaveQuotaData> => {
  try {
    const response = await axios.post('https://httpstat.us/200', data)
    if (response.status !== 200) {
      throw new Error('Failed to save quota')
    }
    return data
  } catch (error) {
    throw error
  }
}
