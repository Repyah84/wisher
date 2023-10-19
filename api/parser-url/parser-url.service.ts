export interface ParserUrl {
  AMAZON_API_TEST?: string
  availability: boolean
  description: string
  icon: string
  image: string[]
  name: string
  price: number | null
  priceCurrency: string
  success: boolean
}

export class ParserUrlService {
  private static readonly _href = process.env.PLASMO_PUBLIC_PARS_URL_HREF

  public static async getDataByUrl(
    url: string,
    signal: AbortSignal
  ): Promise<ParserUrl> {
    const headers = {
      "Content-Type": "application/json"
    }

    const data = { url }

    const response = await fetch(`${this._href}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
      signal
    })

    const parsedUrlData = await response.json()

    return parsedUrlData
  }
}
