import { useMemo } from "react"

const useAPI = () => {

  return useMemo (() =>({
    fetchUser: (userId) =>
        fetch(`https://api.company.invalid/users/${userId}`),
  }),[]
   
  )
}

export default useAPI