import supabase from "@/app/_utils/supabase/client"

export const getPosts = async () => {
  let {data, error} = await supabase.from("posts").select("*")

  if (error) {
    console.error(error)
    throw error
  }

  return data ?? []
}
