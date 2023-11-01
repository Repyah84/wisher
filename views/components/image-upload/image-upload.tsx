const fileTypes = ["image/jpeg", "image/jpg", "image/png"]

function validFileType(file) {
  return fileTypes.includes(file.type)
}

interface Props {
  title: string
  onImageChange: (image: File) => void
}

export const ImageUploader = ({ title, onImageChange }: Props) => {
  const onChangeImageClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.files[0]

    if (!validFileType(value)) {
      return
    }

    onImageChange(value)
  }

  return (
    <label className="extensions-wisher-image-upload">
      <span>{title}</span>

      <input
        onChange={onChangeImageClick}
        type="file"
        accept=".jpg, .jpeg, .png"
      />
    </label>
  )
}
