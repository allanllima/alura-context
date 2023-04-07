import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useCarrinhoContext } from "context/Carrinho";

function Produto({ nome, foto, id, valor, unidade }) {
  const { carrinho, adicionarProduto } = useCarrinhoContext();
  const produtoCarrinho = carrinho.find(
    (itemCarrinho) => itemCarrinho.id === id
  );

  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary">
          <RemoveIcon />
        </IconButton>
        {produtoCarrinho?.quantidade}
        <IconButton
          onClick={() => {
            adicionarProduto({ nome, foto, id, valor });
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
