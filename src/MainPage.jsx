import React from 'react'
import Header from './Header'
import Card from './Card'
const MainPage = () => {
    const carDetailsArray = [
        { carname: "Toyota", carcolor: "Red", carrating: 4.5, carmanufacturer: "Japan", countryoforigin: "Japan" },
        { carname: "Honda", carcolor: "Blue", carrating: 4.2, carmanufacturer: "USA", countryoforigin: "USA" },
        { carname: "Ford", carcolor: "Silver", carrating: 4.8, carmanufacturer: "Germany", countryoforigin: "Germany" },
        { carname: "BMW", carcolor: "Black", carrating: 4.0, carmanufacturer: "South Korea", countryoforigin: "South Korea" },
        { carname: "Audi", carcolor: "White", carrating: 4.3, carmanufacturer: "Italy", countryoforigin: "Italy" },
        { carname: "Tesla", carcolor: "Gray", carrating: 4.7, carmanufacturer: "USA", countryoforigin: "USA" },
        { carname: "Mercedes-Benz", carcolor: "Gold", carrating: 4.6, carmanufacturer: "Germany", countryoforigin: "Germany" },
        { carname: "Chevrolet", carcolor: "Green", carrating: 4.1, carmanufacturer: "USA", countryoforigin: "USA" },
        { carname: "Lexus", carcolor: "Brown", carrating: 4.4, carmanufacturer: "Japan", countryoforigin: "Japan" },
        { carname: "Volkswagen", carcolor: "Yellow", carrating: 4.2, carmanufacturer: "Germany", countryoforigin: "Germany" },
        { carname: "Subaru", carcolor: "Orange", carrating: 4.5, carmanufacturer: "Japan", countryoforigin: "Japan" },
        { carname: "Hyundai", carcolor: "Purple", carrating: 4.3, carmanufacturer: "South Korea", countryoforigin: "South Korea" },
        { carname: "Mazda", carcolor: "Cyan", carrating: 4.0, carmanufacturer: "Japan", countryoforigin: "Japan" },
        { carname: "Volvo", carcolor: "Magenta", carrating: 4.6, carmanufacturer: "Sweden", countryoforigin: "Sweden" },
        { carname: "Kia", carcolor: "Turquoise", carrating: 4.2, carmanufacturer: "South Korea", countryoforigin: "South Korea" },
        { carname: "Jeep", carcolor: "Maroon", carrating: 4.3, carmanufacturer: "USA", countryoforigin: "USA" },
        { carname: "Porsche", carcolor: "Teal", carrating: 4.8, carmanufacturer: "Germany", countryoforigin: "Germany" },
        { carname: "Ferrari", carcolor: "Lime", carrating: 4.9, carmanufacturer: "Italy", countryoforigin: "Italy" },
        { carname: "Nissan", carcolor: "Olive", carrating: 4.1, carmanufacturer: "Japan", countryoforigin: "Japan" },
        { carname: "Land Rover", carcolor: "Indigo", carrating: 4.4, carmanufacturer: "UK", countryoforigin: "UK" }
      ];



    return (
        <div>
            <Card carDetailsNewObj={carDetailsArray} />

        </div>
    )
}

export default MainPage
