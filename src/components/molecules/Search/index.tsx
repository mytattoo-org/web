import { useSearch } from './logic'
import { SearchStyle } from './styles'

import SearchIcon from 'components/atoms/Icon/icons/Search'
import Input from 'components/atoms/Input'

const Search = () => {
  const { formik } = useSearch()

  return (
    <SearchStyle onSubmit={formik.handleSubmit} role='search'>
      <SearchIcon />

      <Input
        name='search'
        spellCheck='false'
        aria-label='Pesquise por postagens'
        placeholder='Procure as melhores tatuagens!'
      />
    </SearchStyle>
  )
}

export default Search
