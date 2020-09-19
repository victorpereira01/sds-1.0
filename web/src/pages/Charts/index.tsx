import React from 'react';
import Filters from '../../components/Filters';
import Chart from 'react-apexcharts';

import { barOptions } from './chart-options';

import './styles.css';

const chartData = [
    {
        x: 'Victor',
        y: 10
    },
    {
        x: 'Victor',
        y: 10
    },
    {
        x: 'Victor',
        y: 10
    },
    {
        x: 'Victor',
        y: 10
    },
    
]

const Charts = () => {
    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA" />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">JOGOS MAIS VOTADOS</h1>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            width="900"
                            height="150"
                            series={[{ data: chartData }]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;