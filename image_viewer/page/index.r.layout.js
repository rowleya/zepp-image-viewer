import { align, text_style } from '@zos/ui'
import { px } from "@zos/utils";

import {
  DEFAULT_COLOR,
  DEFAULT_COLOR_TRANSPARENT,
} from "../utils/config/constants";
import { DEVICE_WIDTH, DEVICE_HEIGHT } from "../utils/config/device";

export const FETCH_IMAGE_LIST_BUTTON = {
  x: (DEVICE_WIDTH - px(360)) / 2,
  y: px(300),
  w: px(360),
  h: px(80),
  text_size: px(36),
  radius: px(12),
  normal_color: DEFAULT_COLOR,
  press_color: DEFAULT_COLOR_TRANSPARENT,
  text: "Fetch Images",
}

export const IMAGE_SCROLL_LIST = {
  item_height: px(80),
  item_space: px(6),
  item_config: [
    {
      type_id: 1,
      item_bg_color: 0x333333,
      item_bg_radius: px(10),
      text_view: [
        {
          x: px(80),
          y: px(0),
          w: px(360),
          h: px(80),
          key: 'name',
          color: 0xffff00,
          text_size: px(36),
          align_h: align.LEFT,
        },
      ],
      text_view_count: 1,
      item_height: px(80)
    },
    {
      type_id: 2,
      item_bg_color: 0x333333,
      item_bg_radius: px(10),
      text_view: [
        {
          x: px(80),
          y: px(0),
          w: px(360),
          h: px(80),
          key: 'name',
          color: 0xff0000,
          text_size: px(36),
          align_h: align.LEFT,
        },
      ],
      text_view_count: 1,
      item_height: px(80)
    }
  ],
  item_config_count: 2,
  x: px(30),
  y: px(120),
  h: DEVICE_HEIGHT - px(180),
  w: DEVICE_WIDTH - px(30) * 2
}
