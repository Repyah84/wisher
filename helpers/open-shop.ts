export const OpenShop = (param: string) => {
  const params = new URLSearchParams()

  params.set("params_url", param)

  window.open(`https://tds.wishr-click.com/redrct?${params}`, "_blank")
}
