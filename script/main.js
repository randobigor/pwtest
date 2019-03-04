document.addEventListener('DOMContentLoaded', function(){
    let worker1 = new Worker("Igor", "Bodnar", 20, 10)
    getInfo(worker1);

    console.log("----------------------------------");

    let worker2 = new Worker("Victor", "Emciuc", 15, 24);
    getInfo(worker2);

    console.log("----------------------------------")

    highlyPaid(worker1, worker2)

    console.log("SECOND METHOD---------------------")

    let workMod = new Worker();
    console

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

    getHourRate(){
        return this.hourRate;
    }

    getHours(){
        return this.hours;
    }

    getSalary(){
        return "Salary of " + this.surname + " " + this.name + ": " + (parseInt(this.hourRate) * parseInt(this.hours))
    }
}

function getInfo(worker){
    console.log(worker.name);
    console.log(worker.surname);
    console.log(worker.hourRate);
    console.log(worker.hours);
    console.log(worker.getSalary());
}

function highlyPaid(work1, work2){
    if(work1.getSalary() > work2.getSalary){
        console.log(work1.surname + " " + work1.name + " primeste salariu mai mare")
    }else{
        console.log(work2.surname + " " + work2.name + " primeste salariu mai mare")
    }
}