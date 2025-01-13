import supabase from "@/app/_utils/supabase/client"

export const getPost = async (postId: number) => {
  const {data, error} = await supabase.storage.from("posts").download(`${postId}.md`)

  if (error) {
    console.error(error)
    throw error
  }

  return data.text()
}

export const postPost = async ({path, fileBody}: {path: string; fileBody: Blob}) => {
  const {data, error} = await supabase.storage.from("posts").upload(path, fileBody)

  if (error) {
    console.error(error)
    throw error
  }

  return data
}

export const putPost = async ({path, fileBody}: {path: string; fileBody: Blob}) => {
  const {data, error} = await supabase.storage.from("posts").update(path, fileBody)

  if (error) {
    console.error(error)
    throw error
  }

  return data
}

export const deletePost = async (path: string) => {
  const {data, error} = await supabase.storage.from("posts").remove([path])

  if (error) {
    console.error(error)
    throw error
  }

  return data
}
