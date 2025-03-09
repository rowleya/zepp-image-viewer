import { BaseSideService } from '@zeppos/zml/base-side'
import { settingsLib } from '@zeppos/zml/base-side'
import { convertLib } from '@zeppos/zml/base-side'

import { DEFAULT_TODO_LIST } from './../utils/constants'

async function getImageList(res) {
  response = await fetch({
    url: 'http://localhost:5000/',
    method: 'GET'
  });
  res(null, {
	result: response.body
  })
}

async function serve(filePath, res, this_ptr) {
  console.log("Downloading " + filePath);
  const dl_url = encodeURI('http://localhost:5000/' + filePath);
  const dl_task = network.downloader.downloadFile({
    url: dl_url,
    headers: {},
    timeout: 60000
  })

  dl_task.onProgress = (ev) => {
    console.log(ev.progress)
    console.log(ev.total)
    console.log(ev.loaded)
  }

  dl_task.onSuccess = (event) => {
    console.log("File download complete")
    console.log(event.filePath) // data://download/1.png
    console.log(event.tempFilePath) // undefined
    console.log(event.statusCode) // 200
  }
  dl_task.onFail = (event) => {
    console.log("File download error")
    console.log(event.code)
    console.log(event.message)
  }
  /*console.log("Download result=>" + dl_result);
  const conv_result = await convertLib.convert({
    filePath: filePath,
    targetFilePath: filePath,
  });

  console.log("ConvertImage result=>%j", conv_result);
  res(null, {
    result: "success"
  })
  this_ptr.sendFile(filePath, { type: "png", name: filePath }); */
}

AppSideService(
  BaseSideService({
    onInit() {},
    onRequest(req, res) {
      if (req.method === 'GET_IMAGE_LIST') {
        getImageList(res)
      } else if (req.method === 'GET_IMAGE') {
        serve(req.params, res, this)
      }
    },
    onRun() {},
    onDestroy() {}
  })
)
