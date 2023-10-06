import { AddSvgIcon } from "../icons/add/add"
import { HeartSvgIcon } from "../icons/heart/heart"
import { OptionsSvgIcon } from "../icons/options/options"

export const Footer = () => (
  <div className="extensions-wisher-footer">
    <button>
      <HeartSvgIcon />
    </button>

    <button>
      <AddSvgIcon />
    </button>

    <button>
      <OptionsSvgIcon />
    </button>
  </div>
)
