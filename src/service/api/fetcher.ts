import axios, { AxiosInstance, AxiosResponse } from 'axios'
// import { Utils } from 'src/utils'
// import { CmdType } from 'src/service/constant/cmdtype'
// import { ResponseDataType } from 'src/types/fetchData'
const s = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)

const RequestID = `${s()}${s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`

const httpData = (CmdType: any, Body?: any) => {
  return JSON.stringify({
    Header: {
      CmdType,
      RequestID: RequestID,
      Language:
        typeof navigator !== 'undefined' ? (navigator.language?.substring(0, 2) as string) : 'en',
    },
    Body,
  })
}

class CustomAxios {
  private axiosInstance: AxiosInstance
  private readonly baseURL: string

  constructor() {
    this.baseURL = `https://wcrs.mfinder.ai`

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    })
  }

  //T : request Body Type
  //U : response Body Type
  async post(CmdType: number, Body?: any) {
    try {
      return await this.axiosInstance
        .post('', httpData(CmdType, Body), { withCredentials: true })
        .then((res: AxiosResponse<any>) => {
          const { data } = res
          return data
        })
    } catch (error) {
      console.error('Error POST request:', error)
      throw error
    }
  }
}

export const fetch = new CustomAxios()
