document.addEventListener('DOMContentLoaded', function(){

    let workers = [];

    // First worker
    let worker1 = new Worker("Igor", "Bodnar", 20, 10)
    getInfo(worker1);
    console.log("----------------------------------");


    // Second worker
    let worker2 = new Worker("Victor", "Emciuc", 15, 24);
    getInfo(worker2);
    console.log("----------------------------------")

    // Mai mare salariu (ex 3)
    highlyPaid(worker1, worker2)


    // Second Method (ex4 + )
    console.log("SECOND METHOD---------------------")

    let workMod = new Worker("Ion", "Creanga", 10, 176);
    console.log(workMod.getName());
    console.log(workMod.getSurname());
    console.log(workMod.getRate());
    console.log(workMod.getHours());
    
    // Increasing salary (ex 5)
    workMod.increaseSalary(2);
    console.log(workMod.getSalary());

    // Setting tax (ex 6)
    workMod.setTax(18);
    console.log(workMod.getSalaryNetto());


    // Array with workers (ex 7)
    console.log("GETTING INFO--------------------------------")

    workers.push(worker1);
    workers.push(worker2);
    workers.push(workMod);

    workers.forEach(worker => {
        getInfo(worker)
    });

})

class Worker{
    constructor(name, surname, hourRate, hours){
        this.name = name;
        this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours;
    }

    getName(){
        return this.name;
    }

    getSurname(){
        return this.surname;
    }

    getRate(){
        return this.hourRate;
    }

    getHours(){
        return this.hours;
    }

    increaseSalary(num){
        this.hourRate += 2;
    }

    setTax(percent){
        this.percent = 1-(percent/100);
    }

    getSalary(){
        // console.log("Salary of " + 
        //         this.surname + " " + 
        //         this.name + ": " + 
        //         (parseInt(this.hourRate) * parseInt(this.hours)) + " = " + 
        //         this.hourRate + " + " + 
        //         this.hours)
        return this.hourRate * this.hours
    }

    getSalaryNetto(){
        return this.getSalary() + " - " + this.percent + " = " + (this.getSalary() * this.percent)
    }
}

function getInfo(worker){
    console.log("Name : " + worker.name);
    console.log("Surname: " + worker.surname);
    console.log("Hour rate: " + worker.hourRate);
    console.log("Hours: " + worker.hours);
    console.log("Salary: " + worker.getSalary());
}

function highlyPaid(work1, work2){
    if(work1.getSalary() > work2.getSalary){
        console.log(work1.surname + " " + work1.name + " primeste salariu mai mare")
    }else{
        console.log(work2.surname + " " + work2.name + " primeste salariu mai mare")
    }
}