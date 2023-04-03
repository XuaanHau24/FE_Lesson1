class Position {
    private id: number;
    private name: string;


    /**
     * Getter id
     * @return {number}
     */
	public getId(): number {
		return this.id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public getName(): string {
		return this.name;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public setId(id: number) {
		this.id = id;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public setName(name: string) {
		this.name = name;
	}


	constructor(id: number, name: string) {
        this.id = id;
        this,name = name;
	}

}
export{Position}
