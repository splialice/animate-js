const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《彬法导论》',
                data: '2007-6',
                price: 91.00,
                count: 1
            },
            {
                id: 3,
                name: '《火法导论》',
                data: '2012-4',
                price: 72.00,
                count: 1 
            },
            {
                id: 4,
                name: '《规则法导论》',
                data: '2009-6',
                price: 100.00,
                count: 1 
            }
        ]
    },
    methods: {
       increment(index) {
           this.books[index].count++
       },
       decrement(index) {
        this.books[index].count--
       },
       removeHandler(index) {
           this.books.splice(index,1)
       },
       computed:{
           totalprice() {
               let totalprice = 0
               for(let i =0; i< this.books.length; i++)
               totalprice += this.books[i].price * this.books[i].count
           }
           return totalprice
       },
    },
    filters: {
        showprice(price){
            return '$' + price.toFixed(2)
        }
    }
})