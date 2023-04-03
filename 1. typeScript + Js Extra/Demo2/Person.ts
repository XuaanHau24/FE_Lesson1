class Person {
    //khai bao cac thuoc tinh
   private id: number;
   private name: string;
   private address: string;

    public setId(id:number){
        this.id = id;

    }

    public getId():number{
        return this.id;

    }

    //cmd shift p

    /**
     * Getter name
     * @return {string}
     */
	public getName(): string {
		return this.name;
	}

    /**
     * Getter address
     * @return {string}
     */
	public getAddress(): string {
		return this.address;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public setName(name: string) {
		this.name = name;
	}

    /**
     * Setter address
     * @param {string} value
     */
	public setAddress(address: string) {
		this.address = address;
	}



	constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address
	}

   

   public go(): void {
        console.log("i can go")
    }     
}



var myName = "aaa"
export{Person, myName}



// var person1 = new Person();
// person1.id = 1;
// person1.name = "A";
// person1.address = "A11";

// console.log("person1: ", person1);
