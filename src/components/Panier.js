import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/panier.css';

function Panier({article, remettre}) {
    return (
        <div className="panier">
            <div className='panierBody' style={{ width: '20rem' }}>
                <h5>Produit: {article.produit}</h5>
                <h5>Unités: 1</h5>
                <Button className="bouton" onClick={() => remettre()} variant="outline-danger">Rendre</Button>{' '}
            </div>
        </div>
    )
};

export default Panier;