const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}
//The above computer object will be my input for the new function.
/*
*/
const htmlComputer = (compObject) => {
    const  htmlElements = `<section id="computer--${compObject.id}">
        <h1>${compObject.manufacturer}${compObject.make}</h1>
        <div>Model: ${compObject.model}</div>
        <div>Memory: ${compObject.specs.memory}</div>
        <div>Hard drive space: ${compObject.specs.hardDrive}</div>
        <div>Processor speed: ${compObject.specs.processor} Ghz</div>
</section>`
    return htmlElements
}

const computerWithHTML = htmlComputer(computer)
console.log(computerWithHTML)
