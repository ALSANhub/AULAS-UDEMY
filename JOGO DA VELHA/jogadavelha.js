class ShoppingList extends React.Component {
    render() {
        return (
            <div classname ="shopping-list">
                <h1>Lista de Compras para {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>oculus</li>
                </ul>
            </div>
        );
    }
}


return React.createElement('div', {className: 'shopping-list'},
    react.createElement('h1',),
    react.createElement('ul',)
);