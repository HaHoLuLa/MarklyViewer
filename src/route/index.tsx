import { EditorContent, useEditor } from "@tiptap/react"
import { extensions } from "../utils/extensions"
import { useParams } from "react-router"
import { decompressFromEncodedURIComponent } from "lz-string"
import { ChangeEvent } from "react"

export default function Index() {
  const { content } = useParams()
  const contentJson = JSON.parse(decompressFromEncodedURIComponent(content || ""))

  const editor = useEditor({
    extensions: extensions,
    content: contentJson,
    editable: false
  })

  const fileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]

    if (file) {
      const allowedExtensions = [".memo", ".mky"];
      const fileExtension = file.name.slice(file.name.lastIndexOf("."));

      if (!allowedExtensions.includes(fileExtension)) {
        return;
      }
      const reader = new FileReader()
      reader.onload = () => {
        const content = JSON.parse(reader.result as string)
        editor?.commands.setContent(content)
        document.title = editor?.getText().split("\n")[0] || "Markly Viewer"
      }
      reader.readAsText(file)
    }
  }

  // useEffect(() => {
  // }, [editor])


  return (
    <>
      <label htmlFor="file" style={{ position: "fixed", bottom: "1rem", right: "1rem", padding: "0.5rem", cursor: "pointer", width: "2rem", height: "2rem", borderRadius: "50%", backgroundColor: "var(--color-primary)", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ fontSize: "1.5rem" }}>+</span>
      </label>
      <input id="file" type="file" accept=".memo, .mky" onChange={fileChange} style={{ display: "none" }} />
      <main>
        <EditorContent editor={editor} />
      </main>
    </>
  )
}