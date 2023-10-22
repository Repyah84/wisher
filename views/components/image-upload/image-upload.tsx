import emptyImage from "data-base64:~assets/garage.png"
import { useState } from "react"

const fileTypes = ["image/jpeg", "image/png", "image/webp"]

function validFileType(file) {
  return fileTypes.includes(file.type)
}

interface Props {
  image: string
  onImageChange: (image: File) => void
}

export const ImageUploader = ({ image, onImageChange }: Props) => {
  const [file, setFile] = useState<File | null>(null)

  const onChangeImageClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.files[0]

    if (!validFileType(value)) {
      return
    }

    setFile(value)

    onImageChange(value)
  }

  return (
    <div className="extensions-wisher-image-upload">
      {image || file ? (
        <></>
      ) : (
        <img
          className="extensions-wisher-image-upload__image-default"
          width={100}
          height={100}
          src={emptyImage}
          alt="image"
        />
      )}

      <label className="extensions-wisher-image-upload__label">
        <span>Change image</span>

        <input
          onChange={onChangeImageClick}
          type="file"
          accept=".jpg, .jpeg, .png"
        />
      </label>
    </div>
  )
}
