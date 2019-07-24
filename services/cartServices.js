const cartItem = require('../dbs/cart').cartItem;
const Email= require('./email.service').Email;
const setContentHeader = require('../services/utils').setContentHeader;
const utils= require('../services/utils').utils;

const emailService = new Email();
class CartItem {
    // users=[];
    constructor(){
        this.cartItem = cartItem;
    }
    _all(){
        return this.cartItem;
    }
    _add(cart){
        this.cart.push(cart);
        return this.cart;
    }
    // _nextId(){
    //     return this.users.length + 1;
    // }
    buy(user){
        let userObj ={
            subject : "User Registration",
            body : `<div>Dear <b>${user.name}</b></div>
                    <div>Thank you for registering</div>`,
            from : null,
            to : user.email
        }
        emailService.email(userObj);
    }
}
module.exports.CartItem=CartItem;