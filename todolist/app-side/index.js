import { BaseSideService } from '@zeppos/zml/base-side'
import { settingsLib } from '@zeppos/zml/base-side'

import { DEFAULT_TODO_LIST } from './../utils/constants'

async function getTodoList(res) {
  /*const lst = settingsLib.getItem('todoList')
    ? JSON.parse(settingsLib.getItem('todoList'))
    : [...DEFAULT_TODO_LIST] */
  response = await fetch({
    url: 'http://localhost:5000/',
    method: 'GET'
  });
  res(null, {
	result: response.body
  })
}
AppSideService(
  BaseSideService({
    onInit() {},
    onRequest(req, res) {
      if (req.method === 'GET_TODO_LIST') {
        getTodoList(res)
      }
    },
    onRun() {},
    onDestroy() {}
  })
)
