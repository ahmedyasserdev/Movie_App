import { useContext } from "react"
import { Input } from '@mui/material'
import { Stack } from '@mui/material';
import { MovieContext } from "../context/ContextProvider";
const SearchBar = () => {
  const { search, setSearch } = useContext(MovieContext)
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }



  return (
    <Stack direction={"row"} alignItems={"flex-end"} gap={2} py = {3}  >

      <Input id="standard-basic" label="Search Movie..." variant="standard" fullWidth
        placeholder="Search Movie..."
        value={search}
        onChange={handleChange}
      />

    </Stack>


  )
}

export default SearchBar