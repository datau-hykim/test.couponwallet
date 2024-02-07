interface ResponseHeaderType {
  CmdType: CmdType
  ErrCode: number
  ErrMsg: string
}
interface ResponseDataType<T> {
  Header: ResponseHeaderType
  Body: T
}
