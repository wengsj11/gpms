import http from 'helper/http'
import service from 'helper/service'

const host = service.host;

export const getProposalListData = (params) => {
  return async () => {
    const result = await http.get(host + '/getProposalList', {
      params
    })
    if(result && result.data.errmsg === 0) {
      console.log(result.data.list);
      return result.data.list;
    }
  }
}