export const Busca = ({busca, buscaODA}) =>{
    return (
        <form role='search' className = 'busca search'>
            <input
            name='busca'
            type ='text'
            value={busca}
            placeholder='O que deseja buscar'
            onChange={buscaODA}
            />
        </form>
    )
}