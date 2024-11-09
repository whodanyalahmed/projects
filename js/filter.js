// Car data
let currentPage = 1;
var totalCars = []; // Store the total cars for filtering
const cars = [
    {
        year: 2016,
        name: "Porsche Cayenne Turbo S",
        brand: "Porsche",
        model: "Cayenne Turbo S",
        bodyType: "SUV",
        condition: "First Hand",
        engine: "4.8L V8",
        color: "Black",
        images: [
            "img/cars/car-1.jpg",
            "img/cars/car-8.jpg",
            "img/cars/car-6.jpg",
            "img/cars/car-3.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Rent",
        price: "$218<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2020,
        name: "Toyota Camry ASV50L-JETEKU",
        brand: "Toyota",
        model: "Camry",
        bodyType: "Sedan",
        condition: "Second Hand",
        engine: "2.5L I4",
        color: "White",
        images: [
            "img/cars/car-2.jpg",
            "img/cars/car-8.jpg",
            "img/cars/car-6.jpg",
            "img/cars/car-4.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Sale",
        price: "$73,900"
    },
    {
        "year": 2021,
        "name": "Toyota Corolla LE",
        "brand": "Toyota",
        "model": "Corolla",
        "bodyType": "Sedan",
        "condition": "New",
        "engine": "1.8L I4",
        "color": "Blue",
        "images": [
            "img/cars/corolla-1.jpg",
            "img/cars/corolla-2.jpg",
            "img/cars/corolla-3.jpg"
        ],
        "mileage": "0",
        "transmission": "CVT",
        "horsepower": "139",
        "status": "For Sale",
        "price": "$20,000"
    },
    {
        "year": 2020,
        "name": "Honda Civic EX",
        "brand": "Honda",
        "model": "Civic",
        "bodyType": "Sedan",
        "condition": "Second Hand",
        "engine": "2.0L I4",
        "color": "Black",
        "images": [
            "img/cars/civic-1.jpg",
            "img/cars/civic-2.jpg"
        ],
        "mileage": "25,000",
        "transmission": "Auto",
        "horsepower": "158",
        "status": "For Sale",
        "price": "$25,000"
    },
    {
        "year": 2019,
        "name": "Ford Mustang GT",
        "brand": "Ford",
        "model": "Mustang",
        "bodyType": "Coupe",
        "condition": "Second Hand",
        "engine": "5.0L V8",
        "color": "Red",
        "images": [
            "img/cars/mustang-1.jpg",
            "img/cars/mustang-2.jpg"
        ],
        "mileage": "15,000",
        "transmission": "Manual",
        "horsepower": "450",
        "status": "For Sale",
        "price": "$40,000"
    },

    {
        year: 2017,
        name: "BMW S1000RR 2019 M",
        brand: "BMW",
        model: "S1000RR",
        bodyType: "Motorcycle",
        condition: "First Hand",
        engine: "999cc I4",
        color: "Blue",
        images: [
            "img/cars/car-3.jpg",
            "img/cars/car-8.jpg",
            "img/cars/car-6.jpg",
            "img/cars/car-5.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Rent",
        price: "$299<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2018,
        name: "Audi Q8 2020",
        brand: "Audi",
        model: "Q8",
        bodyType: "SUV",
        condition: "First Hand",
        engine: "3.0L V6",
        color: "Gray",
        images: [
            "img/cars/car-5.jpg",
            "img/cars/car-8.jpg",
            "img/cars/car-7.jpg",
            "img/cars/car-2.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Rent",
        price: "$319<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2016,
        name: "Mustang Shelby GT500",
        brand: "Ford",
        model: "Shelby GT500",
        bodyType: "Coupe",
        condition: "Second Hand",
        engine: "5.2L V8",
        color: "Red",
        images: [
            "img/cars/car-6.jpg",
            "img/cars/car-8.jpg",
            "img/cars/car-3.jpg",
            "img/cars/car-1.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Sale",
        price: "$730,900"
    },
    {
        year: 2019,
        name: "Lamborghini Huracan EVO",
        brand: "Lamborghini",
        model: "Huracan EVO",
        bodyType: "Coupe",
        condition: "First Hand",
        engine: "5.2L V10",
        color: "Green",
        images: [
            "img/cars/car-4.jpg",
            "img/cars/car-8.jpg",
            "img/cars/car-2.jpg",
            "img/cars/car-1.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Rent",
        price: "$319<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2020,
        name: "Lamborghini Huracan EVO",
        brand: "Lamborghini",
        model: "Huracan EVO",
        bodyType: "Coupe",
        condition: "First Hand",
        engine: "5.2L V10",
        color: "Yellow",
        images: [
            "img/cars/car-7.jpg",
            "img/cars/car-2.jpg",
            "img/cars/car-4.jpg",
            "img/cars/car-1.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Sale",
        price: "$120,000"
    },
    {
        year: 2017,
        name: "Porsche Cayenne Turbo S",
        brand: "Porsche",
        model: "Cayenne Turbo S",
        bodyType: "SUV",
        condition: "Second Hand",
        engine: "4.8L V8",
        color: "White",
        images: [
            "img/cars/car-8.jpg",
            "img/cars/car-3.jpg",
            "img/cars/car-5.jpg",
            "img/cars/car-2.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Rent",
        price: "$319<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2020,
        name: "Toyota Camry ASV50L-JETEKU",
        brand: "Toyota",
        model: "Camry",
        bodyType: "Sedan",
        condition: "Second Hand",
        engine: "2.5L I4",
        color: "Blue",
        images: [
            "img/cars/car-8.jpg",
            "img/cars/car-3.jpg",
            "img/cars/car-5.jpg",
            "img/cars/car-2.jpg"
        ],
        mileage: "35,000",
        transmission: "Auto",
        horsepower: "700",
        status: "For Sale",
        price: "$73,900"
    },
    {
        year: 2024,
        name: "Mercedes-AMG GT 63 S",
        brand: "Mercedes-Benz",
        model: "AMG GT",
        bodyType: "Coupe",
        condition: "New",
        engine: "4.0L V8",
        color: "Selenite Grey",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "630",
        status: "For Sale",
        price: "$165,900"
    },
    {
        year: 2023,
        name: "BMW M5 Competition",
        brand: "BMW",
        model: "M5",
        bodyType: "Sedan",
        condition: "New",
        engine: "4.4L V8",
        color: "Marina Bay Blue",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "1,200",
        transmission: "Auto",
        horsepower: "617",
        status: "For Sale",
        price: "$142,000"
    },
    {
        year: 2024,
        name: "Audi RS e-tron GT",
        brand: "Audi",
        model: "RS e-tron GT",
        bodyType: "Sedan",
        condition: "New",
        engine: "Electric",
        color: "Daytona Gray",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "637",
        status: "For Sale",
        price: "$147,100"
    },
    {
        year: 2023,
        name: "Porsche 911 GT3 RS",
        brand: "Porsche",
        model: "911",
        bodyType: "Coupe",
        condition: "New",
        engine: "4.0L Flat-6",
        color: "Guards Red",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "500",
        transmission: "PDK",
        horsepower: "518",
        status: "For Sale",
        price: "$223,800"
    },
    {
        year: 2023,
        name: "Tesla Model S Plaid",
        brand: "Tesla",
        model: "Model S",
        bodyType: "Sedan",
        condition: "New",
        engine: "Electric",
        color: "Midnight Silver",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "1,020",
        status: "For Sale",
        price: "$135,990"
    },
    {
        year: 2024,
        name: "Lexus LC 500",
        brand: "Lexus",
        model: "LC",
        bodyType: "Coupe",
        condition: "New",
        engine: "5.0L V8",
        color: "Structural Blue",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "471",
        status: "For Rent",
        price: "$299<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2023,
        name: "McLaren 720S",
        brand: "McLaren",
        model: "720S",
        bodyType: "Coupe",
        condition: "New",
        engine: "4.0L V8",
        color: "Papaya Spark",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "150",
        transmission: "Auto",
        horsepower: "710",
        status: "For Sale",
        price: "$299,000"
    },
    {
        year: 2024,
        name: "Range Rover Sport SVR",
        brand: "Land Rover",
        model: "Range Rover Sport",
        bodyType: "SUV",
        condition: "New",
        engine: "5.0L V8",
        color: "Santorini Black",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "575",
        status: "For Sale",
        price: "$133,000"
    },
    {
        year: 2023,
        name: "Chevrolet Corvette Z06",
        brand: "Chevrolet",
        model: "Corvette",
        bodyType: "Coupe",
        condition: "New",
        engine: "5.5L V8",
        color: "Accelerate Yellow",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "670",
        status: "For Sale",
        price: "$105,000"
    },
    {
        year: 2024,
        name: "Maserati MC20",
        brand: "Maserati",
        model: "MC20",
        bodyType: "Coupe",
        condition: "New",
        engine: "3.0L V6",
        color: "Bianco Audace",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "621",
        status: "For Rent",
        price: "$399<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2023,
        name: "Aston Martin DBS",
        brand: "Aston Martin",
        model: "DBS",
        bodyType: "Coupe",
        condition: "New",
        engine: "5.2L V12",
        color: "British Racing Green",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "100",
        transmission: "Auto",
        horsepower: "715",
        status: "For Sale",
        price: "$316,000"
    },
    {
        year: 2024,
        name: "Genesis G90",
        brand: "Genesis",
        model: "G90",
        bodyType: "Sedan",
        condition: "New",
        engine: "3.5L V6",
        color: "Makalu Gray",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "375",
        status: "For Sale",
        price: "$89,000"
    },
    {
        year: 2023,
        name: "Ferrari SF90 Stradale",
        brand: "Ferrari",
        model: "SF90",
        bodyType: "Coupe",
        condition: "New",
        engine: "4.0L V8 Hybrid",
        color: "Rosso Corsa",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "50",
        transmission: "Auto",
        horsepower: "986",
        status: "For Sale",
        price: "$507,300"
    },
    {
        year: 2024,
        name: "Bentley Continental GT Speed",
        brand: "Bentley",
        model: "Continental GT",
        bodyType: "Coupe",
        condition: "New",
        engine: "6.0L W12",
        color: "Beluga",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "650",
        status: "For Rent",
        price: "$499<span>/Month</span>",
        class: "sale"
    },
    {
        year: 2023,
        name: "Rolls-Royce Ghost",
        brand: "Rolls-Royce",
        model: "Ghost",
        bodyType: "Sedan",
        condition: "New",
        engine: "6.75L V12",
        color: "Arctic White",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "563",
        status: "For Sale",
        price: "$343,000"
    },
    {
        year: 2024,
        name: "Lamborghini Revuelto",
        brand: "Lamborghini",
        model: "Revuelto",
        bodyType: "Coupe",
        condition: "New",
        engine: "6.5L V12 Hybrid",
        color: "Verde Mantis",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "1001",
        status: "For Sale",
        price: "$608,000"
    },
    {
        year: 2023,
        name: "Lucid Air Sapphire",
        brand: "Lucid",
        model: "Air",
        bodyType: "Sedan",
        condition: "New",
        engine: "Electric",
        color: "Sapphire Blue",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Auto",
        horsepower: "1,234",
        status: "For Sale",
        price: "$249,000"
    },
    {
        year: 2024,
        name: "Bugatti Chiron Super Sport",
        brand: "Bugatti",
        model: "Chiron",
        bodyType: "Coupe",
        condition: "New",
        engine: "8.0L W16",
        color: "Atlantic Blue",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "50",
        transmission: "Auto",
        horsepower: "1,577",
        status: "For Sale",
        price: "$3,825,000"
    },
    {
        year: 2023,
        name: "Pagani Utopia",
        brand: "Pagani",
        model: "Utopia",
        bodyType: "Coupe",
        condition: "New",
        engine: "6.0L V12",
        color: "Silver",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Manual",
        horsepower: "852",
        status: "For Sale",
        price: "$2,190,000"
    },
    {
        year: 2024,
        name: "Koenigsegg CC850",
        brand: "Koenigsegg",
        model: "CC850",
        bodyType: "Coupe",
        condition: "New",
        engine: "5.0L V8",
        color: "Swedish Racing Green",
        images: [
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png",
            "https://placehold.co/800x600/png"
        ],
        mileage: "0",
        transmission: "Manual/Auto",
        horsepower: "1,385",
        status: "For Sale",
        price: "$3,650,000"
    }
];
function populateTransmissions() {
    let transmissions = [...new Set(cars.map(car => car.transmission))];

    let $selectTransmission = $("#transmission");

    // Clear existing options
    $selectTransmission.empty();

    // Append the default option with data-display attribute
    $selectTransmission.append($('<option></option>').val("").text("Select Transmission").attr("data-display", "Transmission"));

    // Append new options
    $.each(transmissions, function (index, transmission) {
        $selectTransmission.append($('<option></option>').val(transmission).text(transmission));
    });

    // Refresh Nice Select
    $selectTransmission.niceSelect('update');
}
// create a function that populate brands options using cars
function populateBrands() {
    let brands = [...new Set(cars.map(car => car.brand))];

    let $selectBrand = $("#brand");

    // Clear existing options
    $selectBrand.empty();

    // Append the default option with data-display attribute
    $selectBrand.append($('<option></option>').val("").text("Select Brand").attr("data-display", "Brand"));

    // Append new options
    $.each(brands, function (index, brand) {
        $selectBrand.append($('<option></option>').val(brand).text(brand));
    });

    // Refresh Nice Select
    $selectBrand.niceSelect('update');
}
function populateMileage() {
    let mileages = [...new Set(cars.map(car => car.mileage))];

    let $selectMileage = $("#mileage");

    // Clear existing options
    $selectMileage.empty();

    // Append the default option with data-display attribute
    $selectMileage.append($('<option></option>').val("").text("Select Mileage").attr("data-display", "Mileage"));

    // Append new options
    $.each(mileages, function (index, mileage) {
        $selectMileage.append($('<option></option>').val(mileage).text(mileage));
    });

    // Refresh Nice Select
    $selectMileage.niceSelect('update');
}

function populateEngine() {
    let engines = [...new Set(cars.map(car => car.engine))];

    let $selectEngine = $("#engine");

    // Clear existing options
    $selectEngine.empty();

    // Append the default option with data-display attribute
    $selectEngine.append($('<option></option>').val("").text("Select Engine").attr("data-display", "Engine"));

    // Append new options
    $.each(engines, function (index, engine) {
        $selectEngine.append($('<option></option>').val(engine).text(engine));
    });

    // Refresh Nice Select
    $selectEngine.niceSelect('update');
}

function populateColors() {
    let colors = [...new Set(cars.map(car => car.color))];

    let $selectColor = $("#color");

    // Clear existing options
    $selectColor.empty();

    // Append the default option with data-display attribute
    $selectColor.append($('<option></option>').val("").text("Select Color").attr("data-display", "Color"));

    // Append new options
    $.each(colors, function (index, color) {
        $selectColor.append($('<option></option>').val(color).text(color));
    });

    // Refresh Nice Select
    $selectColor.niceSelect('update');
}
function populateModels(selectedBrand) {

    // Filter cars by the selected brand to get unique models
    let models = [...new Set(cars.filter(car => car.brand.toLowerCase().includes(selectedBrand.toLowerCase())).map(car => car.model))];

    let $selectModel = $("#model");

    // Clear existing options
    $selectModel.empty();

    // Append the default option with data-display attribute
    $selectModel.append($('<option></option>').val("").text("Select Model").attr("data-display", "Model"));

    // Append new options
    $.each(models, function (index, model) {
        $selectModel.append($('<option></option>').val(model).text(model));
    });

    // Refresh Nice Select
    $selectModel.niceSelect('update');
}
function populateBodyType() {
    let bodyTypes = [...new Set(cars.map(car => car.bodyType))];

    let $selectBodyType = $("#body_style");

    // Clear existing options
    $selectBodyType.empty();

    // Append the default option with data-display attribute
    $selectBodyType.append($('<option></option>').val("").text("Select Body Style").attr("data-display", "Body Style"));

    // Append new options
    $.each(bodyTypes, function (index, bodyType) {
        $selectBodyType.append($('<option></option>').val(bodyType).text(bodyType));
    });

    // Refresh Nice Select
    $selectBodyType.niceSelect('update');
}
function capitalizeFirstChar(str) {
    if (!str) return str; // Check if the string is empty
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// Function to generate HTML for each car
function renderCars(cars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';
    cars.forEach(car => {
        // Create car item HTML
        const carItem = document.createElement('div');
        carItem.className = 'col-lg-4 col-md-4';

        carItem.innerHTML = `
            <div class="car__item">
                <div class="car__item__pic__slider owl-carousel">
                    ${car.images.map(img => `<img class="car__item__pic__slider" src="${img}" alt="">`).join('')}
                </div>
                <div class="car__item__text">
                    <div class="car__item__text__inner">
                        <div class="label-date">${car.year}</div>
                        <h5><a href="#">${capitalizeFirstChar(car.name)}</a></h5>
                        <ul>
                            <li><span>${car.mileage}</span> mi</li>
                            <li>${car.transmission}</li>
                            <li><span>${car.horsepower}</span> hp</li>
                        </ul>
                    </div>
                    <div class="car__item__price">
                        <span class="car-option ${car.class ?? ''}">${car.status}</span>
                        <h6>${car.price}</h6>
                    </div>
                </div>
            </div>
        `;

        carList.appendChild(carItem);
    });

    // Initialize Owl Carousel for each car slider
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
    });
}

if (window.location.pathname.endsWith("car.html")) {
    obj = getFilterValues();
    console.log("going to filter");
    
    filterCars(obj);
}
function filterCars(filter = {}) {
    const brand = filter.brand?.trim().toLowerCase() || (document.querySelector("#brand")?.value ?? "").toLowerCase();
    const model = filter.model?.trim().toLowerCase() || (document.querySelector("#model")?.value ?? "").toLowerCase();
    const condition = (document.querySelector("#condition")?.value ?? "").toLowerCase();
    const transmission = (document.querySelector("#transmission")?.value ?? "").toLowerCase();
    const mileage = filter.mileage?.trim().toLowerCase() || (document.querySelector("#mileage")?.value ?? "");
    const engine = (document.querySelector("#engine")?.value ?? "").toLowerCase();
    const color = (document.querySelector("#colors")?.value ?? "").toLowerCase();
    const bodyType = filter.bodyStyle?.trim().toLowerCase() || (document.querySelector("#body_style")?.value ?? "").toLowerCase();
    const searchName = (document.querySelector("#search_car")?.value ?? "").toLowerCase();
    const perPage = parseInt(document.querySelector("#per_page_cars")?.value ?? "10");
    const sortOption = document.querySelector("#sort_cars")?.value ?? "";

    console.log({
        brand,
        model,
        condition,
        transmission,
        mileage,
        engine,
        color,
        bodyType,
        searchName,
        perPage,
        sortOption,
    });
    
    var filterSlider = $(".filter-price-range");
    var currentMinValue = filterSlider.slider("values", 0);
    var currentMaxValue = filterSlider.slider("values", 1);

    const filteredCars = cars.filter(car => {
        const carPrice = parseFloat(car.price.replace(/[^0-9.]/g, ''));

        const isBrandValid = brand !== null && brand.trim() !== "";
        const isModelValid = model !== null && model.trim() !== "";
        const isConditionValid = condition !== null && condition.trim() !== "";
        const isTransmissionValid = transmission !== null && transmission.trim() !== "";
        const isMileageValid = mileage !== null && mileage.trim() !== ""; // Check for mileage validity
        const isEngineValid = engine !== null && engine.trim() !== ""; // Check for engine validity
        const isColorValid = color !== null && color.trim() !== ""; // Check for color validity
        const isBodyTypeValid = bodyType !== null && bodyType.trim() !== ""; // Check for body type validity
        const isSearchNameValid = searchName !== null && searchName.trim() !== ""; // Check for search name validity

        const brandMatch = isBrandValid ? car.brand.toLowerCase().includes(brand) : true;
        const modelMatch = isModelValid ? car.name.toLowerCase().includes(model) : true;
        const conditionMatch = isConditionValid ? car.condition.toLowerCase() === condition.toLowerCase() : true;
        const transmissionMatch = isTransmissionValid ? car.transmission.toLowerCase() === transmission.toLowerCase() : true;
        const mileageMatch = isMileageValid ? car.mileage.toLowerCase() === mileage.toLowerCase() : true; // Check for mileage match
        const engineMatch = isEngineValid ? car.engine.toLowerCase() === engine.toLowerCase() : true; // Check for engine match
        const colorMatch = isColorValid ? car.color.toLowerCase() === color.toLowerCase() : true; // Check for color match
        const bodyTypeMatch = isBodyTypeValid ? car.bodyType.toLowerCase() === bodyType.toLowerCase() : true; // Check for body type match
        const searchNameMatch = isSearchNameValid ? car.name.toLowerCase().includes(searchName) : true; // Check for search name match

        return (
            brandMatch &&
            modelMatch &&
            conditionMatch &&
            transmissionMatch &&
            mileageMatch &&
            engineMatch &&
            colorMatch &&
            bodyTypeMatch &&
            searchNameMatch &&
            carPrice >= currentMinValue &&
            carPrice <= currentMaxValue
        );
    });
    // Sort the filtered cars based on the selected sort option
    if (sortOption === "price_highest") {
        
        filteredCars.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
    } else if (sortOption === "price_lowest") {
        filteredCars.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
    }
    // Limit the number of cars displayed based on the "per page" selection
    totalCars = filteredCars; // Store the filtered results
    console.log("totalCars");
    console.log(totalCars);
    
    renderPagination(totalCars.length, perPage);
    // renderCars(carsToDisplay);
    displayCars(currentPage, perPage);

}
function sortCars(){
    currentPage = 1; // Reset to the first page when sorting changes
    filterCars(); // Re-filter cars
}
function renderPagination(totalCarsCount, perPage) {
    const paginationContainer = document.getElementById("pagination__option");
    paginationContainer.innerHTML = ""; // Clear previous pagination

    const totalPages = Math.ceil(totalCarsCount / perPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = i;
        pageLink.className = (i === currentPage) ? "active" : ""; // Set active class for current page

        // Add click event to change the page
        pageLink.addEventListener("click", (event) => {
            event.preventDefault();
            currentPage = i; // Update current page
            displayCars(currentPage, perPage); // Display cars for the selected page
            renderPagination(totalCarsCount, perPage); // Re-render pagination
        });

        paginationContainer.appendChild(pageLink);
    }
}
function displayCars(page, perPage) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const carsToDisplay = totalCars.slice(start, end);    
    // Call your render function to display the cars
    renderCars(carsToDisplay);
}
$(document).ready(function () {
    populateTransmissions();
    populateBrands();
    populateMileage();
    populateEngine();
    populateColors();
    populateBodyType();
    populateModels("");
    // Update model dropdown when a brand is selected
    $("#brand").on("change", function () {
        const selectedBrand = $(this).val();
        populateModels(selectedBrand);
    });
});

function resetFilters() {
    // Clear the search input
    document.getElementById('search_car').value = '';

    // Reset all select dropdowns to their default values
    const selectIds = ['brand', 'model', 'body_style', 'condition', 'transmission', 'mileage', 'engine', 'colors'];
    selectIds.forEach(id => {
        const selectElement = document.getElementById(id);
        selectElement.selectedIndex = 0; // Reset to the first option
        $(selectElement).niceSelect('update'); // Update Nice Select if used
    });

    // Clear the price range input
    document.getElementById('filterAmount').value = '';

    // Reset the price range slider
    var filterSlider = $(".filter-price-range");

    filterSlider.slider("values", [1, 1200000]); // Reset the slider values
    $("#filterAmount").val("[ " + "$" + 1 + " - $" + 1200000 + " ]"); // Update displayed range

    // Optionally, you can call a function to refresh the car listing
    // refreshCarListing();
}
// Function to retrieve URL parameters
function getFilterValues() {
    const urlParams = new URLSearchParams(window.location.search);

    const brand = urlParams.get("brand") ?? "";
    const model = urlParams.get("model") ?? "";
    const mileage = urlParams.get("mileage") ?? "";
    const bodyStyle = urlParams.get("body_style") ?? "";

    return {
        brand,
        model,
        mileage,
        bodyStyle
    }

}