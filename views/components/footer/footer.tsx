import { ButtonNav } from "../button-nav/button-nav"
import { AddSvgIcon } from "../icons/add/add"
import { HeartSvgIcon } from "../icons/heart/heart"
import { OptionsSvgIcon } from "../icons/options/options"

export const Footer = () => (
  <div className="extensions-wisher-footer">
    <ButtonNav link="/wisher/wishes">
      <HeartSvgIcon />
    </ButtonNav>

    <ButtonNav link="/login">
      <AddSvgIcon />
    </ButtonNav>

    <ButtonNav link="/login">
      <OptionsSvgIcon />
    </ButtonNav>
  </div>
)
