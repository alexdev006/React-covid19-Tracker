import React, { Component } from 'react'
import { Cards, CountryPicker, Chart } from './components'
import { Typography } from '@material-ui/core'

import styles from './App.module.css'
// import coronaBg from './images/imgCorona.jpg'

import { fetchData } from './api'

export default class App extends Component {
    state = {
        data : {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
       this.setState ( { data : fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState ( { data : fetchedData, country: country })

        console.log(fetchedData)
    }

    render() {
        const { data, country } = this.state

        return (
        <div className={styles.container}>
            <Typography variant="h1" color="alert">Covid-19</Typography>
            {/* <img src={coronaBg} className={styles.image} alt='healthBg'/>     */}
           <Cards data= { data }/>
           <CountryPicker handleCountryChange={this.handleCountryChange}/>
           <Chart data={data} country={country}/>
        </div>
        )
    }
}

