export class Items{
    public itemName: string;
    public itemPrice: number;
    
    constructor(itemName: string, itemPrice: number){
    this.itemName = itemName;
    this.itemPrice = itemPrice;
}
public setItemName(product: string){
    this.itemName = product;
}
public setItemPrice(product: number){
    this.itemPrice = product;
}
public getItemName(): string {
    return this.itemName;
}
public getItemPrice(): number {
    return this.itemPrice;
} 
}
function add(){
    var name = document.getElementById("myBtn").nodeValue;
    console.log(name)
    document.getElementById('myBtn').innerHTML=name;
    let shoppingCart1 = new indexsample();
    shoppingCart1.add(name);

}
    export class indexsample{
    private cartItems: Array<Items>=[]
    private totalPrice: number = 0;
        add: any;
    public addProducts(itemName:string, itemPrice: number){
        let cartItem = new Items(itemName,itemPrice);
        let test = sessionStorage.getItem("shoppingCart");
            if(test !=null){
            this.cartItems=<Array<Items>>JSON.parse(test);
        }
        this.cartItems.push(cartItem);
        sessionStorage.setItem("shoppingCart", JSON.stringify(this.cartItems));
        console.log(this.cartItems);
    }
}
    const button = document.querySelector("button");
    button.addEventListener("click", function(){
        alert("Hello.")
        console.log("Working.");
    });