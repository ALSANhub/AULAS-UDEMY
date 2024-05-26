import {useState} from 'react';


export default function MyApp(params) {
    return (
        <div>
            <h1>Contadores que atualiza separadamente</h1>
            <MyButton />
            <MyButton />

        </div>
    );
}


function MyButton(params) {
    const [count, setCount] = useState(0);
    function handleClick(params) {
        setCount (count + 1);
        alert('VOCE CLICOU NO BOTÃO!')
        
    }
    return (
        <button>Eu sou um botão</button>,
        <button onClick={handleClick}></button>
    );
}

export default function MyAppname(params) {
    return (
        <div>
            <h1>Bem-Vindo ao meu aplicativos</h1>
            <MyButton />
        </div>
    );
}


const user = {
    name: 'HedyLamarr',
    imegeUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name} </h1>
            <img
            className="avatar"
            src={user.imageUrl}
            alt={'Foto de' + user.name}
            style={{
                width: user.imageSize,
                height:user.imageSize
            }}
            />
        </>
    );
 }

 const products = [
    { title: 'Repolho', isFruit: false, id: 1 },
    { title: 'Alho', isFruit: false, id: 2 },
    { title: 'Maçã', isFruit: true, id: 3 },
  ];

  export default function ShoppingList(params) {
    const listeItems = products.map(product =>
        <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgree'
        }}
        >
        {product.title}
        </li>
    );
  }

  function name(params) {
    
  }