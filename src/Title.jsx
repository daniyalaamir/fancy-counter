export default function Title({ locked }) {
  return (
    <h1 className="title">
      {!locked ? (
        "Fancy Counter"
      ) : (
        <span>Limit! Buy <b>Pro</b> for &gt;5</span>
      )}
    </h1>
  )
}
