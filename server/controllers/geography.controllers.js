const Country = require('country-state-city').Country;
const State = require('country-state-city').State;
const City = require('country-state-city').City;
const { postcodeValidator } = require('postcode-validator');

// check if post code is valid US ZIP code
exports.validatePostCode = (req, res) => {
    const postCode = req.params.postCode;
    res.status(200).send({
        valid: postcodeValidator(postCode, 'US')
    });
}

// return an array of city names for a state
exports.cityArray = (req, res) => {
    const state = req.params.state;
    res.status(200).send({
        cities: City.getCitiesOfState('US', state).map(v => v.name)
    });
}

// return all US state name and abbreviation 
exports.stateArray = (req, res) => {
    res.status(200).send({
        states: State.getStatesOfCountry('US').map( v => ({
            abbr: v.isoCode,
            name: v.name
        }))
    });
}

// check if state abbreviation is a valid US state 
exports.validateState = (req, res) => {
    const state = req.params.state;
    res.status(200).send({
        valid: State.getStatesOfCountry('US').map( v => v.isoCode).includes(state)
    });
}

// check if a city belongs to a state 
exports.validateCity = (req, res) => {
    const state = req.params.state;
    const city = req.params.city;
    res.status(200).send({
        valid: City.getCitiesOfState('US', state).map(v => v.name).includes(city)
    });
}