import React from 'react';
import '../css/articles.css';
import Button from 'react-bootstrap/Button';
import { Fragment } from 'react';
import { Card } from 'react-bootstrap';

function Articles({article, acheter}) {
    return(
        <div>
            <Fragment>
                <Card className='carte' style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={article.image} />
                    <Card.Body className={`carteBody ${article.stock === 1 ? "bg-warning" : article.stock === 0 ? "bg-danger" : ""}`}>
                        <Card.Title><h3>{article.produit}</h3></Card.Title>
                        <Card.Text>
                            <h5>Prix: {article.prix}€</h5> 
                            <h5>Stock: {article.stock === 0 ? "Rupture de stock" : `${article.stock} unités`}</h5>
                        </Card.Text>
                        <Button onClick={() => acheter()} variant="outline-success">Acheter</Button>{' '}
                    </Card.Body>
                </Card>
            </Fragment>
        </div>
    )
}

export default Articles;