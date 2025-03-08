import { BaseSideService } from "@zeppos/zml/base-side";

async function fetchImageList() {
  try {
    // Requesting network data using the fetch API
    // The sample program is for simulation only and does not request real network data, so it is commented here
    // Example of a GET method request
    // const { body: { data = {} } = {} } = await fetch({
    //   url: 'https://xxx.com/api/xxx',
    //   method: 'GET'
    // })
    // Example of a POST method request
    // const { body: { data = {} } = {} } = await fetch({
    //   url: 'https://xxx.com/api/xxx',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     text: 'Hello Zepp OS'
    //   })
    // })

    // A network request is simulated here, Reference documentation: https://jsonplaceholder.typicode.com/
    const response = await fetch({
      url: 'http://localhost:5000/',
      method: 'GET'
    });
	console.log("Response body" + response.body);

    return response.body;
  } catch (error) {
	return "ERROR";
  }
}

function getTodoList() {
  return [['Learn']]
}

AppSideService(
  BaseSideService({
    onInit() {},

    onRequest(req, res) {
      console.log("=====>,", req.method);
      if (req.method === "GET_IMAGE_LIST") {
		res(null, {
          result: getTodoList()
        })
      }
    },

    onRun() {},

    onDestroy() {},
  })
);
