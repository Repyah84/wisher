import { CroSvgIcon } from "../icons/cross/cross"
import { LogoSvgIcon } from "../icons/logo/logo"

export const Header = () => (
  <div className="extensions-wisher-header">
    <div
      style={{
        maxWidth: "124px"
      }}>
      <LogoSvgIcon />
    </div>

    <div
      style={{
        maxWidth: "24px"
      }}>
      <button>
        <CroSvgIcon />
      </button>
    </div>
  </div>
)
