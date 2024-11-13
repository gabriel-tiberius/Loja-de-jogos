
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CardProduto({produto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imagem/the_witcher.jpg" />
      <Card.Body>
        <Card.Title>{produto.nome}</Card.Title>
        <Card.Text>
          {produto.text}
        </Card.Text>
        <Button variant="primary">{produto.preco}</Button>
      </Card.Body>
    </Card>
  );
}

export {CardProduto};