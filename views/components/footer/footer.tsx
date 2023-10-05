import { AddSvgIcon } from "../icons/add/add"
import { HeartSvgIcon } from "../icons/heart/heart"
import { OptionsSvgIcon } from "../icons/options/options"
import { Ripple } from "../ripple/ripple"

export const Footer = () => (
  <div className="extensions-wisher-footer">
    <button>
      <Ripple>
        <HeartSvgIcon />
      </Ripple>
    </button>

    <button>
      <Ripple>
        <AddSvgIcon />
      </Ripple>
    </button>

    <button>
      <Ripple>
        <OptionsSvgIcon />
      </Ripple>
    </button>
  </div>
)
