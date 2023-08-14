class CaixaDaLanchonete {
   constructor() {
       this.cardapio = {
         cafe: 3.00,
         chantily: 1.50,
         suco: 6.20,
         sanduiche: 6.50,
         queijo: 2.00,
         salgado: 7.25,
         combo1: 9.50,
         combo2: 7.50
       };
       this.itensPrincipais = {
         chantily: 'cafe',
         queijo: 'sanduiche'
       };
     }
   
     calcularValorDaCompra(metodoDePagamento, itens) {
       if (!['debito', 'credito', 'dinheiro'].includes(metodoDePagamento)) {
         return "Forma de pagamento inválida!";
       }
   
       if (itens.length <= 0) {
         return "Não há itens no carrinho de compra!";
       }
   
       let total = 0;
       const itemsCount = {};
   
       for (const itemInfo of itens) {
         const [item, quantidade] = itemInfo.split(',');
         if (!this.cardapio[item]) {
           return "Item inválido!";
         }
         itemsCount[item] = (itemsCount[item] || 0) + parseInt(quantidade);
         if (this.itensPrincipais[item] && !itemsCount[this.itensPrincipais[item]]) {
           return "Item extra não pode ser pedido sem o principal";
         }
         total += this.cardapio[item] * itemsCount[item];
       }
   
       if (total === 0) {
         return "Quantidade inválida!";
       }
   
       if (metodoDePagamento === 'dinheiro') {
         total *= 0.95; // Aplicando 5% de desconto
       } else if (metodoDePagamento === 'credito') {
         total *= 1.03; // Aplicando 3% de acréscimo
       }
   
       return `R$ ${total.toFixed(2).replace('.', ',')}`;
     }
}

export { CaixaDaLanchonete };
