import './App.css';
import React, {useState} from 'react';
import Articles from './components/Articles';
import Panier from './components/Panier';

function App() {
  const [all, setAll] = useState({
    argent: 20,
    panier: [],
    articles: [
      {produit: "Coca Cola", prix: 1, stock: 5, image: '../../img/coca.jpg'},
      {produit: "Fanta", prix: 1.50, stock: 5, image: '../../img/fanta.jpg'},
      {produit: "Fanta", prix: 1.50, stock: 5, image: '../../img/fanta.jpg'},
    ]
  });

  let ajouteArticle = (i) => {
    let {argent, panier, articles} = all;
    if (argent < articles[i].prix || articles[i].stock === 0) {
      return null;
    }
    argent -= articles[i].prix;
    panier.push(articles[i]);
    articles[i].stock--;

    setAll({
      argent, panier, articles
    });
  }

  let rendreArticle = (i) => {
    let {argent, panier, articles} = all;

    argent += panier[i].prix;
    articles[articles.indexOf(panier[i])].stock++;
    panier.splice(i, 1);

    setAll({
      argent, panier, articles
    });
  }
  return (
    <div className="e-shop">
        <h1 className='titre'>E-SHOP</h1>
        <h2 className='titre2'>Argent: {all.argent}€</h2>
        <div className="articles">
            {all.articles.map((el, i) => {
              return(
                <Articles key={i} article={el} acheter={() => ajouteArticle(i)} />
              )
            })}
        </div>
        <h2 className='titre2'>Mon panier: </h2>
        <div>
            {all.panier.map((el, i) => {
              return(
                <Panier key={i} article={all} remettre={() => rendreArticle(i)}/>
              )
            })}
        </div>
      </div>
  );
};

export default App;
