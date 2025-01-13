import supabase from "@/app/_utils/supabase/client"

export const getPost = async (id: number) => {
  const {data, error} = await supabase.from("post").select("*").eq("id", id).single()

  if (error) {
    console.error(error)
    throw error
  }

  return data
}
