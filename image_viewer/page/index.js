import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";
import {
  FETCH_IMAGE_LIST_BUTTON,
  IMAGE_SCROLL_LIST,
} from "zosLoader:./index.[pf].layout.js";

const logger = Logger.getLogger("image_viewer");

Page(
  BasePage({
    state: {
	  scroll_list: null
	},
    build() {
      hmUI.createWidget(hmUI.widget.BUTTON, {
        ...FETCH_IMAGE_LIST_BUTTON,
        click_func: (button_widget) => {
          logger.log("click button");
          this.fetchImageList();
        },
      });
	  // this.updateList([]);
    },
    fetchImageList() {
	  logger.log("Getting image list");
      this.request({
        method: "GET_IMAGE_LIST",
      })
        .then((result) => {
		  logger.log("Got Data " + result);
          const dataList = result.map((d) => ({ name: d }));
		  logger.log("Data is " + dataList);
		  this.updateList(dataList);
        })
        .catch((res) => {});
    },
	updateList(dataList) {
      if (this.state.scrollList) {
        this.state.scrollList.setProperty(prop.UPDATE_DATA, {
          data_array: dataList,
          data_count: dataList.length,
          data_type_config: [{ start: 0, end: dataList.length, type_id: 2 }],
          data_type_config_count: dataTypeConfig.length,
          on_page: 1
        })
      } else {
        this.state.scrollList = createWidget(hmUI.widget.SCROLL_LIST, {
          ...(IMAGE_SCROLL_LIST || {}),
          data_array: dataList,
          data_count: dataList.length,
          data_type_config: dataTypeConfig,
          data_type_config_count: dataTypeConfig.length,
          on_page: 1
        })
      }
	},
	/*fetchImage(imageName) {
      this.request({
		 method: "GET_IMAGE",
		 params: { imageName }
	  }).then((data) -> {
		  logger.log("Got image" + imageName);
	  })
	  .catch((res) -> {});
	} */
  })
);
