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
    },
    Body,
  })
}

class CustomAxios {
  private axiosInstance: AxiosInstance
  private readonly baseURL: string

  constructor() {
    this.baseURL = `/`
    // this.baseURL = `https://wcrs.mfinder.ai`
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    })
  }

  //T : request Body Type
  //U : response Body Type
  async post<T, U>(url: string, CmdType: number, Body?: T): Promise<ResponseDataType<U>> {
    try {
      return await this.axiosInstance
        .post(url, httpData(CmdType, Body), { withCredentials: true })
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
