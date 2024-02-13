import { http, HttpResponse } from 'msw'

export interface Coupon {
  id: number
  name: string
}

const couponList = Array.from(Array(1024).keys()).map(
  (id): Coupon => ({
    id,
    name: `denis${id}`,
  }),
)

// const BASE_URL = 'http://localhost:3000';
export const tempApi = [
  http.post('/test', async ({ request }) => {
    const req: any = await request.json()
    console.log('req : ', req)
    switch (req.Header.CmdType) {
      case 1020:
        return HttpResponse.json(
          { test: 'test' },
          {
            status: 202,
            statusText: 'Mocked status',
          },
        )
    }
    // const size = Number(req.Body.size)
    // const page = Number(req.Body.page)
    // const totalCount = couponList.length
    // const totalPages = Math.round(totalCount / size)
    //
    // return HttpResponse.json(
    //   {
    //     contents: couponList.slice(page * size, (page + 1) * size),
    //     pageNumber: page,
    //     pageSize: size,
    //     totalPages,
    //     totalCount,
    //     isLastPage: totalPages <= page,
    //     isFirstPage: page === 0,
    //   },
    //   {
    //     status: 202,
    //     statusText: 'Mocked status',
    //   },
    // )
  }),
]
