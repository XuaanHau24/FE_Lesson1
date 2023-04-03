import { Person } from "./Person";

class Mentor extends Person{
    private yearOfExperience: number;
    private company: string;


	constructor(id: number, name: string, address: string,yearOfExperience: number, company: string) {
        super(id, name, address);
		this.yearOfExperience = yearOfExperience;
		this.company = company;
	}


    /**
     * Getter yearOfExperience
     * @return {number}
     */
	public getYearOfExperience(): number {
		return this.yearOfExperience;
	}

    /**
     * Getter company
     * @return {string}
     */
	public getCompany(): string {
		return this.company;
	}

    /**
     * Setter yearOfExperience
     * @param {number} value
     */
	public setYearOfExperience(value: number) {
		this.yearOfExperience = value;
	}

    /**
     * Setter company
     * @param {string} value
     */
	public setCompany(value: string) {
		this.company = value;
	}


}

export {Mentor}