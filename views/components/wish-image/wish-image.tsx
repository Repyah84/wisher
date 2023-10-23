import emptyImage from "data-base64:~assets/garage.png"

interface Props {
  image: string
}

export const WishImage = ({ image }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`
      }}
      className="extension-wisher-wish-image">
      {!image ? (
        <img
          width={100}
          height={100}
          src={emptyImage}
          alt="Default item image"
        />
      ) : (
        <img
          src={image}
          className="extension-wisher-wish-image__image"
          alt="image"
        />
      )}
    </div>
  )
}
