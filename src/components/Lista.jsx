export const Lista = ({odas }) =>{
return(
    <>
    <div className="div2">
    <p className="odas"> {odas.length} odas </p>
    {odas.map((oda) => (
    <div key={oda.id} className="div3">
        <h1 className="nome">nome: {oda.nome} </h1>
        <p className="user"> usuario: {oda.usuario} </p>
        <p className="desc"> descricao: {oda.descricao} </p>
        <p className="submit">data de inclusao: {oda.data_inclusao}</p>
        <p className="chave">palavra chave: {oda.palavras_chave}</p>
    </div>))}    
    </div>
    </>
)
}